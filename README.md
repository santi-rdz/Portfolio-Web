# Portfolio Web - Raul Rodriguez

Personal portfolio website built with **Astro**, **TailwindCSS**, and modern web technologies.

Live: [portfolio-rdz.vercel.app](https://portfolio-rdz.vercel.app)

## 🎯 Features

- **Fast & Optimized** — Astro static generation with minimal JavaScript
- **Responsive Design** — Mobile-first approach with TailwindCSS
- **Modern Stack** — Semantic HTML, CSS Grid/Flexbox, ES6+
- **Smooth Animations** — Intersection Observer-based scroll animations
- **Dark-aware Typography** — Custom font system (Outfit + JetBrains Mono)

## 🚀 Project Structure

```text
src/
├── assets/              # Images and static files
├── components/
│   ├── sections/        # Page sections (Hero, About, Experience, etc.)
│   ├── ui/              # Reusable UI components (Heading, Link, ExperienceItem, etc.)
│   ├── icons/           # SVG icons
│   ├── Header.astro
│   ├── Footer.astro
│   └── MediaLinks.astro
├── layouts/
│   └── Layout.astro     # Base layout with animations
├── pages/               # Route pages
│   ├── index.astro
│   ├── experience.astro
│   └── projects.astro
├── data/
│   ├── projects.ts      # Projects data
│   └── experience.ts    # Experience/learning data
└── styles/
    └── global.css       # Design tokens & animations
```

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build |
| `npm run format` | Format code with Prettier |

## 🛠️ Tech Stack

**Frontend:**
- Astro
- TailwindCSS
- TypeScript
- Semantic HTML5

**Styling:**
- CSS Grid & Flexbox
- CSS Variables (design tokens)
- Responsive design (mobile-first)

**Tools:**
- Vite (build)
- Prettier (formatting)

## 📝 Content Management

Data is stored in `/src/data/`:
- **projects.ts** — Edit projects, tools, links
- **experience.ts** — Add learning experiences

Component files:
- **src/components/ui/ExperienceItem.astro** — Reusable experience item
- **src/components/ui/ProjectCard.astro** — Reusable project card

## 🎨 Design Tokens

Located in `/src/styles/global.css`:
- **Colors** — Primary, gray palette, semantic colors
- **Spacing** — Responsive font sizes with `clamp()`
- **Radius** — Border radius scale
- **Shadows** — Elevation system
- **Animations** — Scroll-triggered fade effects

## 🚀 Deployment

Hosted on **Vercel**. Deploys automatically on push to `main`.

```bash
npm run build  # Build static site
# Deploy ./dist/ to production
```

## 📄 License

© 2025 Raul Rodriguez. All rights reserved.
