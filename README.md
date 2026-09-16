# dev-portfolio

Anthony Giannell's personal portfolio site, built with [Next.js](https://nextjs.org/) (Pages Router) and TypeScript.

## Getting Started

This project uses Node 24 (see `.nvmrc`) and Yarn.

```bash
nvm use
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. The page auto-updates as you edit files under `pages/` and `components/`.

## Scripts

```bash
yarn dev         # start the dev server
yarn build       # production build
yarn start       # run the production build
yarn lint        # eslint .
yarn typecheck   # tsc --noEmit
```

## Project structure

- `pages/` — routes (`index.tsx` is the only page; `_app.tsx` sets up the shared shell/head)
- `components/` — one component per portfolio section (Intro, Projects, Skills, Contact, Footer), re-exported from `components/index.ts`
- `styles/` — one SCSS module per component, plus shared variables/mixins in `styles/_config.scss`

## Deployment

The site is deployed manually to an EC2 instance.
