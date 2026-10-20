import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/thoughts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    version: z.string().optional(),
    pdf: z.url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { thoughts, guides };
