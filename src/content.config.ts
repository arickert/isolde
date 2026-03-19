import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    images: z.array(z.string()).optional(),
    order: z.number().default(0),
    icon: z.string().default('✕'),
  }),
});

export const collections = { pages };
