import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const logs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/logs' }),
  schema: z.object({
    entry: z.string(),
    title: z.string(),
    stardate: z.string(),
    author: z.string(),
    status: z.enum(['NOMINAL', 'CAUTION', 'WARNING', 'CRITICAL']).default('NOMINAL'),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { logs };
