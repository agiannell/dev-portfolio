import type { IconType } from 'react-icons/lib'

export type SkillCategoryProps = {
  key?: number
  title: string
  icon: IconType
  skills: string[]
}

export type CaseStudySection = {
  heading: string
  paragraphs: string[]
}

export type CaseStudyProps = {
  id: string
  title: string
  role: string
  timeline: string
  stack: string[]
  sections: CaseStudySection[]
}
