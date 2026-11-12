import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    role: z.string(),
    kind: z.string(),
    status: z.string(),
    summary: z.string(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    stack: z.array(z.string()).default([]),
    highlight: z.string().optional(),
  }),
});

export const collections = { work };
