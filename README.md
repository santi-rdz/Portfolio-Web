# Portfolio Web

Personal portfolio for Raul Rodriguez, Full-Stack Developer, built with Astro 6, Tailwind CSS v4, and content collections.

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
├── assets/
│   ├── projects/        # Project screenshots
│   └── resume/          # Resume Markdown, one file per locale (en.md, es.md)
├── components/
│   ├── icons/           # Icon components
│   ├── sections/        # Home page sections
│   └── ui/              # Reusable UI components
├── content/
│   ├── courses/         # Courses with certificate links
│   ├── experience/      # Work experience entries
│   ├── leadership/      # Leadership and activities entries
│   └── projects/        # Project collection entries
├── data/                # Site data: contact links, featured stack, skills, CVs
├── i18n/                # Locales, UI strings and translation helpers
├── layouts/             # Shared Astro layouts
├── lib/                 # Content and Markdown helpers
├── pages/
│   └── [...lang]/       # Every route, generated once per locale
└── styles/              # Global styles and design tokens
```

## Stack

- Astro 6
- Tailwind CSS v4 through `@tailwindcss/vite`
- TypeScript
- Astro content collections
- pnpm
- Prettier

## Internationalization

The site uses Astro's built-in i18n routing. English is the default locale and has no prefix; Spanish lives under `/es/`.

- `src/i18n/locales.ts`: supported locales and the default one. It is the single source of truth: `astro.config.mjs` reads it for routing and the sitemap.
- `src/i18n/ui.ts`: UI strings. `en` is the source of truth and TypeScript fails if another locale is missing a key. Wrap text in `**double asterisks**` to highlight it.
- `src/i18n/utils.ts`: `useI18n(Astro.currentLocale)` returns `{ lang, t }`; `localize()` picks a translated content field; `localizePath()` and `getAlternates()` build localized links and `hreflang` alternates.
- `src/pages/[...lang]/`: each page is written once; `getStaticPaths` renders it for every locale.
- `@astrojs/sitemap` generates `sitemap-index.xml` with `hreflang` alternates.

To add a locale, add it to `languages` in `src/i18n/locales.ts`, then fill in the translations that TypeScript and the content schema report as missing (`ui.ts`, content entries and `src/assets/resume/<lang>.md`).

## Content

Projects, experience, leadership and courses are managed as Markdown files. Translatable fields are written once per locale inside the same entry (`description: { en, es }`), so links, tools and images are never duplicated.

- Projects: `src/content/projects/*.md`
- Experience: `src/content/experience/*.md`
- Leadership & activities: `src/content/leadership/*.md`
- Courses: `src/content/courses/*.md`

The collection schemas are defined in `src/content.config.ts`.

## Resume

`/resume` and `/es/resume` render `src/assets/resume/<lang>.md`, which mirror the English and Spanish CVs. The download split button's main action gets the CV in the page's language; its menu offers every language. PDFs live in `public/` and are listed in `src/data/site.ts`:

- `public/resume.pdf`: English CV
- `public/resume-es.pdf`: Spanish CV

A PDF missing from `public/` is left out of the menu with a build warning.

## Styling

Global styles and design tokens live in `src/styles/global.css`. Prefer existing CSS custom properties such as `var(--color-primary)`, `var(--color-gray)`, and `var(--radius-*)` when adding or updating styles.

## Deployment

The site is deployed on Netlify. Build output is generated in `dist/`.
