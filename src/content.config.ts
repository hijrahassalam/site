import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const accent = z.enum(['cyan', 'mint', 'violet', 'amber']);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    positioning: z.string(),
    /** current = flagship yang sedang dibangun · production = bukti produksi · tooling = kapabilitas */
    category: z.enum(['current', 'production', 'tooling']),
    status: z.string(),
    statusKind: z.enum(['live', 'early', 'building', 'shipped', 'internal']),
    accent,
    role: z.string(),
    scale: z.string().optional(),
    period: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    hasDetail: z.boolean().default(true),
    stack: z.array(z.object({ label: z.string(), items: z.string() })).default([]),
    highlights: z.array(z.string()).default([]),
    metrics: z.array(z.object({ value: z.coerce.string(), label: z.string() })).default([]),
    flow: z.array(z.string()).default([]),
    flowLabel: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    visualNote: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    positioning: z.string(),
    accent: accent.default('violet'),
    status: z.string(),
    metrics: z.array(z.object({ value: z.coerce.string(), label: z.string() })).default([]),
    pipeline: z.array(z.string()).default([]),
    findingTitle: z.string(),
    findingBody: z.string(),
    findingWarning: z.string(),
    reference: z.string(),
    order: z.number().default(1),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({
    updated: z.string(),
    quests: z.array(
      z.object({
        kind: z.string(),
        title: z.string(),
        status: z.string(),
        statusKind: z.enum(['live', 'early', 'building', 'shipped', 'internal', 'research', 'next']),
        note: z.string(),
        accent,
        href: z.string().optional(),
      })
    ),
  }),
});

export const collections = { projects, research, now };
