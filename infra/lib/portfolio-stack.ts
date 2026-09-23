import * as fs from 'fs'
import * as path from 'path'
import * as cdk from 'aws-cdk-lib'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as route53 from 'aws-cdk-lib/aws-route53'
import * as targets from 'aws-cdk-lib/aws-route53-targets'
import { DnsValidatedCertificate } from 'aws-cdk-lib/aws-certificatemanager'
import { Construct } from 'constructs'

const DOMAIN_NAME = 'anthonygnl.com'
const WWW_DOMAIN_NAME = 'www.anthonygnl.com'

const copyHtmlAndTxtFiles = (sourceDir: string, destDir: string) => {
  fs.rmSync(destDir, { recursive: true, force: true })

  const walk = (dir: string, relativeDir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const relativePath = path.join(relativeDir, entry.name)
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), relativePath)
      } else if (entry.name.endsWith('.html') || entry.name.endsWith('.txt')) {
        const destPath = path.join(destDir, relativePath)
        fs.mkdirSync(path.dirname(destPath), { recursive: true })
        fs.copyFileSync(path.join(dir, entry.name), destPath)
      }
    }
  }

  walk(sourceDir, '')
}

export class PortfolioStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    })

    const hostedZone = route53.HostedZone.fromLookup(this, 'AnthonyGnlZone', {
      domainName: DOMAIN_NAME,
    })

    // CloudFront requires the certificate to be in us-east-1. DnsValidatedCertificate
    // handles this via a Lambda custom resource that calls ACM in us-east-1 at deploy
    // time — no need to bootstrap CDK in us-east-1 (this account only has it in us-west-2).
    const certificate = new DnsValidatedCertificate(this, 'SiteCertificate', {
      domainName: DOMAIN_NAME,
      subjectAlternativeNames: [WWW_DOMAIN_NAME],
      hostedZone,
      region: 'us-east-1',
    })

    const urlRewriteFunction = new cloudfront.Function(this, 'UrlRewriteFunction', {
      code: cloudfront.FunctionCode.fromFile({ filePath: 'lib/cloudfront-functions/url-rewrite.js' }),
      runtime: cloudfront.FunctionRuntime.JS_2_0,
    })

    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(siteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        functionAssociations: [
          {
            function: urlRewriteFunction,
            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
          },
        ],
      },
      domainNames: [DOMAIN_NAME, WWW_DOMAIN_NAME],
      certificate,
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
        },
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
        },
      ],
    })

    const cloudFrontTarget = route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution))

    new route53.ARecord(this, 'ApexAliasA', { zone: hostedZone, target: cloudFrontTarget })
    new route53.AaaaRecord(this, 'ApexAliasAaaa', { zone: hostedZone, target: cloudFrontTarget })
    new route53.ARecord(this, 'WwwAliasA', { zone: hostedZone, recordName: 'www', target: cloudFrontTarget })
    new route53.AaaaRecord(this, 'WwwAliasAaaa', { zone: hostedZone, recordName: 'www', target: cloudFrontTarget })

    // A single BucketDeployment applies one cacheControl to everything it deploys, so
    // hashed/immutable static assets and HTML/RSC-prefetch payloads (which must revalidate
    // on every request) are split into two deployments. Both need prune: false since each
    // only sees its own filtered slice of `out/` — with the default prune: true, each would
    // delete the other's files from the bucket on every deploy.
    new s3deploy.BucketDeployment(this, 'StaticAssets', {
      sources: [s3deploy.Source.asset('../out', { exclude: ['*.html', '*.txt'] })],
      destinationBucket: siteBucket,
      prune: false,
      cacheControl: [
        s3deploy.CacheControl.setPublic(),
        s3deploy.CacheControl.maxAge(cdk.Duration.days(365)),
        s3deploy.CacheControl.immutable(),
      ],
    })

    const htmlOnlyDir = path.resolve(process.cwd(), '../out-html')
    copyHtmlAndTxtFiles(path.resolve(process.cwd(), '../out'), htmlOnlyDir)

    new s3deploy.BucketDeployment(this, 'HtmlPages', {
      sources: [s3deploy.Source.asset(htmlOnlyDir)],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ['/*'],
      prune: false,
      cacheControl: [
        s3deploy.CacheControl.setPublic(),
        s3deploy.CacheControl.maxAge(cdk.Duration.seconds(0)),
        s3deploy.CacheControl.mustRevalidate(),
      ],
    })

    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: distribution.distributionDomainName,
    })

    new cdk.CfnOutput(this, 'SiteUrl', {
      value: `https://${DOMAIN_NAME}`,
    })
  }
}
