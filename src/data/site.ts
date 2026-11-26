import type { Lang } from "../i18n/locales";

export const email = "raul.rodriguez39@uabc.edu.mx";

export const socialLinks = {
  github: "https://github.com/santi-rdz",
  linkedin: "https://linkedin.com/in/raul-rodriguez-169911369",
} as const;

/** Featured stack: About section list and the JSON-LD `knowsAbout`. */
export const featuredTechs = [
  "TypeScript",
  "JavaScript",
  "React",
  "React Native",
  "Expo",
  "Astro",
  "Node.js",
  "Hono",
  "Prisma",
  "PostgreSQL",
  "Cloudflare Workers",
  "Selenium",
];

/** Downloadable CVs in `public/`, one per locale. */
export const resumes: Record<Lang, { file: string; downloadName: string }> = {
  en: { file: "resume.pdf", downloadName: "Raul_Rodriguez_Resume.pdf" },
  es: { file: "resume-es.pdf", downloadName: "Raul_Rodriguez_CV.pdf" },
};
