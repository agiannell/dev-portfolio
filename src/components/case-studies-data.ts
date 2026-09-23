import type { CaseStudyProps } from './types'

export const caseStudies: Record<string, CaseStudyProps> = {
  'paas-api': {
    id: 'paas-api',
    title: "Building and Evolving Pluralsight's PaaS API Platform",
    role: 'Software Engineer, Tech Lead',
    timeline: '2022 to Present (4+ years)',
    stack: ['Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL (Aurora)', 'AWS', 'Kafka'],
    sections: [
      {
        heading: 'The system',
        paragraphs: [
          "Pluralsight's PaaS API is the customer facing GraphQL API that now serves 70% of the company's customer ARR, handling nearly 400,000 requests per day against an Aurora PostgreSQL cluster holding close to 2TB of data. I've supported this system for my entire time at Pluralsight, starting as an Associate Software Engineer and growing into the Tech Lead role for the team that owns it.",
          "Most of the data behind the API doesn't originate there. Much of it streams in continuously from Kafka, and for the topics that need real transformation before they're usable, a dedicated service handles that ingestion and writes into the same database the API reads from. Working inside a system like this, where most of your data arrives asynchronously from sources you don't directly control, shaped how I think about API design: defensive query patterns, careful indexing, and never assuming the data behind an endpoint is as fresh or complete as it looks.",
        ],
      },
      {
        heading: 'A platform wide identity migration',
        paragraphs: [
          "At one point, the entire API needed to migrate its identity model from an older handle based user identifier to a new, more durable ID scheme. This wasn't a self contained project. It touched nearly every resolver across the API surface, and it had to happen without any customer facing downtime.",
          'I did substantial work on this migration as part of the team executing it, building backwards compatible helpers, converting endpoints incrementally rather than attempting a single cutover. The lesson that stuck with me: a migration across a live, heavily used API succeeds or fails based on how well you can stage it, not how cleverly you write the final query.',
        ],
      },
      {
        heading: 'Owning deprecation as an ongoing discipline',
        paragraphs: [
          "An API that's been in production for some time accumulates legacy fields, and simply deleting them breaks the customers still depending on them. I owned a recurring deprecation program that treats this as a repeatable process rather than a one off cleanup: automated tooling flags candidates, customers get notified with real usage data about what they're still calling, and only then do fields actually get removed.",
          "This is unglamorous work, and it's also some of the most consequential engineering I do, since it's the difference between a platform that stays maintainable after years of growth and one that accumulates cruft no one wants to touch.",
        ],
      },
      {
        heading: 'Building something new inside a mature system',
        paragraphs: [
          'Not everything is maintenance. I designed and built a green field Analytics API from scratch, backed by Snowflake, that now serves customers as a separate, purpose built system rather than an extension of the core API. Before it went live, I built a shadow traffic load testing setup so the new service could absorb real production level traffic patterns without any customer ever touching it, giving us real confidence in its behavior under load before it mattered.',
        ],
      },
      {
        heading: 'What this work has taught me',
        paragraphs: [
          'Four years on the same system teaches you things a string of short projects doesn\'t: how a schema decision made two years ago constrains what you can safely build today, how to migrate a live system without customers noticing, and how to balance shipping new capability against the standing responsibility of not breaking what already works. That combination, sustained ownership plus the occasional green field build, is the kind of engineering I want to keep doing.',
        ],
      },
    ],
  },
}

export const caseStudyIds = Object.keys(caseStudies)
