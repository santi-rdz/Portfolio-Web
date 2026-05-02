# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Production build
npm run preview   # Preview production build
```

Node >= 22.12.0 required.

## Architecture

Astro 6 portfolio site with no framework islands (pure `.astro` components). Tailwind CSS v4 is configured via the Vite plugin (`@tailwindcss/vite`), not `tailwind.config.*`.

**Pages:**
- `/` — Single-page with scroll-snap sections: Hero → About → Experience → Projects → Skills → Contact
- `/experience` — Full experience list page
- `/projects` — Full projects list page
- `/resume` — Resume page with PDF export (uses `html2pdf.js`, `jspdf`)

**Data layer** lives in `src/data/`:
- `experience.ts` — Array of experience entries (title, duration, learnSource, details[])
- `projects.ts` — Array of project entries with images, tools, links

**Layout** (`src/layouts/Layout.astro`): wraps all pages, imports global CSS, registers `ClientRouter` (View Transitions), and mounts `Header`, `MediaLinks`, and `Footer` globally. Scroll-snap is enabled on desktop via `.scroll-wrapper`; disabled on mobile (≤768px).

**Animations**: Add `data-animate="fade-up|fade-down|fade-left|fade-right"` to any element. Visibility is toggled via `IntersectionObserver` in `Layout.astro` adding `.is-visible`. Use `style="--delay: Xms"` for staggering.

## UI Component System

**`Link.astro`** — renders `<a>` by default, pass `as="button"` for a `<button>`. Props:
- `data-cta` — blue gradient CTA button with fill-out hover effect
- `data-fill="left-to-right" | "bottom-to-up"` — changes fill direction
- `data-md` — medium size variant
- `data-mono` — JetBrains Mono font
- `lg` — large size (no value needed, attribute presence)

**`Heading.astro`** — accepts `as="h1|h2|h3|h4|h5"`. h2 renders with a `/` prefix and a horizontal rule. h4/h5 render in `--color-primary`.

## Styling conventions

All design tokens are CSS custom properties in `src/styles/global.css`. Never use hardcoded colors — use `var(--color-primary)`, `var(--color-gray)`, `var(--font-N)`, `var(--radius-*)`, etc. Layout containers: `.container` (1200px), `.lg-container` (1440px), `.md-container` (1024px).
