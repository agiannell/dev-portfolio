# dev-portfolio

Anthony Giannell's personal portfolio site, built with [Next.js](https://nextjs.org/) (App Router) and TypeScript.

## Getting Started

This project uses Node 24 (see `.nvmrc`) and Yarn.

```bash
nvm use
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. The page auto-updates as you edit files under `src/app/` and `src/components/`.

## Scripts

```bash
yarn dev         # start the dev server
yarn build       # production build
yarn start       # run the production build
yarn lint        # eslint .
yarn typecheck   # tsc --noEmit
```

## Project structure

- `src/app/` — routes (`page.tsx` is the only page; `layout.tsx` sets up the shared shell, global styles, and favicon/title metadata)
- `src/components/` — one component per portfolio section (Intro, Projects, Skills, Contact, Footer), re-exported from `src/components/index.ts`
- `src/styles/` — one SCSS module per component, plus shared variables/mixins in `src/styles/_config.scss`

## Deployment

The site is deployed manually to an EC2 instance.
