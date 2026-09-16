# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio site (Anthony Giannell) built with Next.js (Pages Router) and TypeScript, using SCSS modules for styling. Single page (`pages/index.tsx`) composed of section components: Intro, Projects, Skills, Contact, Footer.

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

- **Pages Router, not App Router.** `pages/_app.tsx` is the shared shell: it imports global styles, sets the page `<title>`, and renders `<Favicon />` inside `<Head>`. `pages/index.tsx` is currently the only route and just stacks the section components in order.
- **Barrel export for components.** `components/index.ts` re-exports every component (`contact`, `favicon`, `footer`, `intro`, `projects`, `skill`, `skills`). Other files import from the bare `components` module specifier (e.g. `import { Skill } from 'components'`) rather than relative paths — when adding a new component, add its export to this barrel.
- **Component/style pairing.** Each component in `components/*.tsx` has a matching CSS module in `styles/*.module.scss` (e.g. `components/skills.tsx` ↔ `styles/skills.module.scss`). Shared SCSS variables/mixins (colors, fonts, `border`/`flex` mixins) live in `styles/_config.scss` and are pulled into `styles/globals.scss` and module files via `@import`.
- **Skills list is data-driven.** `components/skills.tsx` holds a hardcoded array of `SkillProps` (`components/types.ts`) and maps it to repeated `<Skill>` instances; icon assets referenced by path live under `public/images/skill-icons/`.
- **Projects/social links are hardcoded JSX**, not data-driven — each project card in `components/projects.tsx` and each social link in `components/intro.tsx`/`components/footer.tsx` is written out directly (including duplicated icon-size variants per breakpoint in `intro.tsx`). Follow the existing repetition style rather than introducing a new abstraction unless asked.
- ESLint config is flat-config (`eslint.config.mjs`) extending `eslint-config-next/core-web-vitals`, with `@next/next/no-img-element` turned off (the codebase intentionally uses plain `<img>` tags, not `next/image`).

## Known in-progress state

The repo is mid-upgrade (see recent "troubleshooting failing build" commits): Next.js/React/TypeScript were bumped to major new versions and `tsconfig.json`/`package.json`/`.nvmrc` are actively being adjusted to get the build green again. Check `git status`/`git diff` before assuming the current config files are in a final state.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
