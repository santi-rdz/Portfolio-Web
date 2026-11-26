import type { UIKey } from "../i18n/ui";

/**
 * A plain string is a proper noun shown as-is in every locale and doubles as
 * the TechIcon key. Translatable items reference a UI string and an icon key.
 */
export type Skill = string | { icon: string; labelKey: UIKey };

export const skillGroups: { titleKey: UIKey; items: Skill[] }[] = [
  {
    titleKey: "skills.group.languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Java",
      "Python",
      "C/C++",
      "Swift",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    titleKey: "skills.group.webMobile",
    items: [
      "React",
      "React Native",
      "Expo",
      "Astro",
      "Tailwind CSS",
      "TanStack Query",
    ],
  },
  {
    titleKey: "skills.group.backendData",
    items: [
      "Node.js",
      "Express",
      "Hono",
      "REST APIs",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "Supabase",
      "MySQL",
      "Zod",
    ],
  },
  {
    titleKey: "skills.group.cloudTools",
    items: [
      "Cloudflare Workers",
      "R2",
      "Durable Objects",
      "Hyperdrive",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Git",
      "Jira",
    ],
  },
  {
    titleKey: "skills.group.testing",
    items: [
      "Vitest",
      "Selenium",
      "TestNG",
      "Bruno",
      { icon: "End-to-end testing", labelKey: "skills.e2eTesting" },
    ],
  },
  {
    titleKey: "skills.group.practices",
    items: [
      { icon: "Team leadership", labelKey: "skills.teamLeadership" },
      { icon: "Client interviews", labelKey: "skills.clientInterviews" },
      { icon: "Requirements", labelKey: "skills.requirements" },
      { icon: "Use cases", labelKey: "skills.useCases" },
      { icon: "UI design", labelKey: "skills.uiDesign" },
    ],
  },
  {
    titleKey: "skills.group.spokenLanguages",
    items: [
      { icon: "Spanish (native)", labelKey: "skills.spanish" },
      { icon: "English (B2)", labelKey: "skills.english" },
    ],
  },
];
