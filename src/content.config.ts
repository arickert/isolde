import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    artists: z.string().optional(),
    date: z.string().optional(),
    images: z.array(z.string()).optional(),
    order: z.number().default(0),
    icon: z.string().optional(),
    width: z.number().default(678),
    color: z.string().default('#beb5c4'),
    videos: z.array(z.string()).optional(),
    row: z.preprocess((v) => (v === '' ? undefined : v), z.enum(['current', 'past', 'info']).optional()),
    status: z.preprocess((v) => (v === '' ? undefined : v), z.enum(['past', 'current', 'future']).optional()),
  }),
});

export const collections = { pages };
