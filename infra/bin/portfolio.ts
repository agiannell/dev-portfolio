#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { PortfolioStack } from '../lib/portfolio-stack'

const app = new cdk.App()
new PortfolioStack(app, 'DevPortfolioStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-west-2',
  },
})
