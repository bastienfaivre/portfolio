import { defineCollection } from 'astro:content';
import { z } from 'zod';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    categories: z.array(z.string()).optional(),
    author: z.string().optional(),
    customData: z.string().optional(),
  }),
});

export const collections = { blog };