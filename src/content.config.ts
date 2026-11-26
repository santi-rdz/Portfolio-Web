import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { locales, type Lang } from "./i18n/locales";

/**
 * A field translated into every supported locale. Language-neutral data
 * (links, tools, images, order) stays outside, so it is defined only once,
 * and a missing translation fails the build.
 */
const localized = <T extends z.ZodType>(schema: T) =>
  z.object(
    Object.fromEntries(locales.map((lang) => [lang, schema])) as Record<
      Lang,
      T
    >,
  );

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: localized(z.string()),
      github: z.url(),
      website: z.url().optional(),
      image: image(),
      tools: z.array(z.string()),
      status: z.enum(["completed", "in-progress"]).default("completed"),
      order: z.number(),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: localized(z.string()),
    duration: localized(z.string()).optional(),
    organization: localized(z.string()),
    details: localized(z.array(z.string())),
    order: z.number(),
  }),
});

const leadership = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/leadership" }),
  schema: z.object({
    title: z.string(),
    date: localized(z.string()),
    organization: localized(z.string()),
    details: localized(z.array(z.string())),
    order: z.number(),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
  schema: z.object({
    title: z.string(),
    provider: z.string(),
    certificate: z.url().optional(),
    repository: z.url().optional(),
    inProgress: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { projects, experience, leadership, courses };
