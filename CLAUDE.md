# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio site (Anthony Giannell) built with Next.js (App Router) and TypeScript, using SCSS modules for styling. Single page (`src/app/page.tsx`) composed of section components: Intro, Projects, Skills, Contact, Footer.

## Commands

```bash
yarn dev         # start dev server (localhost:3000)
yarn build       # production build
yarn start       # run production build
yarn lint        # eslint .
yarn typecheck   # tsc --noEmit
```

There is no test suite/runner configured in this repo.

Package manager is Yarn (`yarn.lock` is the lockfile of record); avoid mixing in `package-lock.json`.

Node version is pinned via `.nvmrc`.

## Architecture

- **App Router, with a `src/` layout.** `src/app/layout.tsx` is the shared root shell: it imports global styles and sets the page `<title>` and favicon/manifest `<link>` tags via the Next.js Metadata API (`export const metadata`), rather than a hand-written `<Head>`/component. `src/app/page.tsx` is currently the only route and just stacks the section components in order. Nothing in the component tree uses client-side state/hooks, so everything renders as a Server Component (no `'use client'` anywhere).
- **Barrel export for components.** `src/components/index.ts` re-exports every component (`contact`, `footer`, `intro`, `projects`, `skill-category`, `skills`). Other files import from the bare `components` module specifier (e.g. `import { SkillCategory } from 'components'`) rather than relative paths — this resolves via the `paths: { "*": ["./src/*"] }` mapping in `tsconfig.json`. When adding a new component, add its export to this barrel.
- **Component/style pairing.** Each component in `src/components/*.tsx` has a matching CSS module in `src/styles/*.module.scss` (e.g. `skill-category.tsx` ↔ `skill-category.module.scss`). Shared SCSS variables/mixins (colors, fonts, `border`/`flex` mixins) live in `src/styles/_config.scss` and are pulled into `src/styles/globals.scss` and module files via `@use './config' as *`.
- **Skills list is data-driven.** `src/components/skills-data.ts` exports `skillCategories` (typed via `SkillCategoryProps` in `src/components/types.ts`) — an array of `{ title, icon, skills }` groups, `icon` being a `react-icons/fa` component. `src/components/skills.tsx` maps each group to a `<SkillCategory>`, which renders the category title with its icon and the skills as plain text badges (no per-skill icons).
- **Projects/social links are hardcoded JSX**, not data-driven — each project card in `src/components/projects.tsx` and each social link in `src/components/intro.tsx`/`src/components/footer.tsx` is written out directly (including duplicated icon-size variants per breakpoint in `intro.tsx`). Follow the existing repetition style rather than introducing a new abstraction unless asked.
- ESLint config is flat-config (`eslint.config.mjs`) extending `eslint-config-next/core-web-vitals`, with `@next/next/no-img-element` turned off (the codebase intentionally uses plain `<img>` tags, not `next/image`) and `infra/**` ignored entirely (see below).
- Favicon assets themselves live under `public/favicon/` and are unaffected by the App Router move — only how they're referenced (Metadata API vs. hand-written `<link>` tags) changed. Note: `public/favicon/site.webmanifest`'s `icons` array points at `/android-chrome-*.png` but the files actually live at `/favicon/android-chrome-*.png` — a pre-existing bug, not yet fixed.
- **The site is fully static** (`next.config.js` sets `output: 'export'`) — no API routes, no data fetching, no `'use client'`/`'use server'` anywhere in the tree. This is load-bearing: it's what makes the `infra/` deployment approach (below) valid, and any future change that requires real server-side rendering or an API route would need revisiting that.
- **`infra/` is a separate AWS CDK package**, not part of the Next app's build — its own `package.json`/`tsconfig.json`/`cdk.json`, deliberately excluded from the root `tsconfig.json` (`exclude: ["infra"]`) and `eslint.config.mjs` (`ignores: ["infra/**"]`) so the app's stricter TypeScript/lint settings don't leak into it. `infra/lib/portfolio-stack.ts` provisions S3 + CloudFront (with Origin Access Control) + an ACM cert (via the deprecated-but-functional `DnsValidatedCertificate`, since this AWS account isn't CDK-bootstrapped in `us-east-1`, which CloudFront certs require) + Route53 alias records for `anthonygnl.com`/`www.anthonygnl.com`. Deploys run via `.github/workflows/deploy.yml`, triggered manually (`workflow_dispatch`), mirroring the sibling project `smash-bros-battle`'s deploy pattern (including reusing its `github-deploy` IAM role) but without any Lambda/SSR — this app has no backend to run.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
