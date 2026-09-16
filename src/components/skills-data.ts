import { FaCode, FaLaptopCode, FaDatabase, FaCloud, FaChartLine, FaInfinity } from 'react-icons/fa'
import type { SkillCategoryProps } from './types'

export const skillCategories: SkillCategoryProps[] = [
  {
    title: 'Languages',
    icon: FaCode,
    skills: ['TypeScript', 'JavaScript', 'C#'],
  },
  {
    title: 'Frontend',
    icon: FaLaptopCode,
    skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'Sass', 'CSS Modules'],
  },
  {
    title: 'Backend & Data',
    icon: FaDatabase,
    skills: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'Redis', 'Kafka', 'Snowflake'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: FaCloud,
    skills: [
      'AWS',
      'AWS Lambda',
      'AWS DynamoDB',
      'AWS S3',
      'AWS CloudFront',
      'AWS SQS/SNS',
      'AWS CDK',
      'Docker',
    ],
  },
  {
    title: 'Observability',
    icon: FaChartLine,
    skills: ['New Relic', 'Grafana', 'Sentry'],
  },
  {
    title: 'Practices',
    icon: FaInfinity,
    skills: ['CI/CD', 'GitHub Actions', 'GitLab CI', 'Infrastructure as Code', 'Git', 'Testing', 'Mocha'],
  },
]
