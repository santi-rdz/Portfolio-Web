import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      github: z.string().url(),
      website: z.string().url().optional(),
      image: image(),
      tools: z.array(z.string()),
      status: z.enum(["completed", "in-progress"]).default("completed"),
      order: z.number(),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    duration: z.string().optional(),
    learnSource: z.string(),
    details: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { projects, experience };
