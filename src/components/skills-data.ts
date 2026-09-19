import { IoCode, IoDesktop, IoServer, IoCloud, IoAnalytics, IoInfinite, IoSparkles } from 'react-icons/io5'
import type { SkillCategoryProps } from './types'

export const skillCategories: SkillCategoryProps[] = [
  {
    title: 'Languages',
    icon: IoCode,
    skills: ['TypeScript', 'JavaScript', 'C#'],
  },
  {
    title: 'Frontend',
    icon: IoDesktop,
    skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'Sass', 'CSS Modules'],
  },
  {
    title: 'Backend & Data',
    icon: IoServer,
    skills: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'Redis', 'Kafka', 'Snowflake'],
  },
  {
    title: 'AI',
    icon: IoSparkles,
    skills: ['Claude Code', 'GitHub Copilot', 'Prompt Engineering'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: IoCloud,
    skills: [
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
    icon: IoAnalytics,
    skills: ['New Relic', 'Grafana', 'Sentry'],
  },
  {
    title: 'Practices',
    icon: IoInfinite,
    skills: ['CI/CD', 'GitHub Actions', 'GitLab CI', 'Infrastructure as Code', 'Git', 'Testing', 'Mocha'],
  },
]
