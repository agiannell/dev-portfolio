import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CaseStudy } from 'components'
import { caseStudies, caseStudyIds } from 'components/case-studies-data'

export const dynamicParams = false

export const generateStaticParams = async () => {
  return caseStudyIds.map((id) => ({ id }))
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> => {
  const { id } = await params
  const caseStudy = caseStudies[id]
  return { title: caseStudy ? `${caseStudy.title} | Anthony Giannell` : 'Anthony Giannell' }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const caseStudy = caseStudies[id]

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudy {...caseStudy} />
}
