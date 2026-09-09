import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({
    base: "./src/content/writing",
    pattern: "**/*.md"
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(""),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    language: z.enum(["zh", "en"]).default("zh"),
    legacyUrl: z.string().optional()
  })
});

export const collections = { writing };
