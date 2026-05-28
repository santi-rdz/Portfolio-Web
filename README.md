# Portfolio Web

Personal portfolio for Raul Rodriguez, built with Astro 6, Tailwind CSS v4, and content collections.

## Requirements

- Node.js 22.12.0 or newer
- pnpm 10.17.0 or newer

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

The development server runs at `http://localhost:4321`.

## Project Structure

```text
src/
├── assets/              # Images and static source assets
├── components/
│   ├── icons/           # Icon components
│   ├── sections/        # Home page sections
│   └── ui/              # Reusable UI components
├── content/
│   ├── experience/      # Experience collection entries
│   └── projects/        # Project collection entries
├── layouts/             # Shared Astro layouts
├── pages/               # Astro routes
└── styles/              # Global styles and design tokens
```

## Stack

- Astro 6
- Tailwind CSS v4 through `@tailwindcss/vite`
- TypeScript
- Astro content collections
- pnpm
- Prettier

## Content

Projects and experience entries are managed as Markdown files:

- Projects: `src/content/projects/*.md`
- Experience: `src/content/experience/*.md`

The collection schemas are defined in `src/content.config.ts`.

## Styling

Global styles and design tokens live in `src/styles/global.css`. Prefer existing CSS custom properties such as `var(--color-primary)`, `var(--color-gray)`, and `var(--radius-*)` when adding or updating styles.

## Deployment

The site is deployed on Netlify. Build output is generated in `dist/`.
