# Portfolio Web

Personal portfolio built with **Astro** and **CSS**.

## 🚀 Project Structure

```text
src/
├── assets/          # Images
├── components/
│   ├── sections/    # Page sections (Hero, About, Experience, Projects, Skills, Contact)
│   ├── ui/          # Reusable components (Heading, Link, ExperienceItem, ProjectCard, etc.)
│   ├── icons/       # SVG icons
│   ├── Header.astro
│   ├── Footer.astro
│   └── MediaLinks.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   ├── experience.astro
│   └── projects.astro
├── data/
│   ├── projects.ts
│   └── experience.ts
└── styles/
    └── global.css
```

## 🧞 Commands

```bash
npm run dev      # Start dev server
npm run build    # Build to ./dist/
npm run preview  # Preview build
```

## 🎨 Stack

- **Astro** — Static site generation
- **CSS** — Semantic HTML with CSS Grid/Flexbox
- **TypeScript** — Type safety
- **Prettier** — Code formatting

## 📝 Customize

- **Projects** → Edit `src/data/projects.ts`
- **Experience** → Edit `src/data/experience.ts`
- **Styles** → Update `src/styles/global.css` (CSS variables & animations)

## 🚀 Deploy

Deployed on **Netlify**.
