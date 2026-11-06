import { defineCollection } from 'astro:content';

import { file } from 'astro/loaders';

import { z } from 'astro/zod';

const projects = defineCollection({
  loader: file('./src/data/projects.json'),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.url().optional(),
  }),
});

const socials = defineCollection({
  loader: file('./src/data/socials.json'),
  schema: z.object({
    name: z.string(),
    url: z.url(),
  }),
});

export const collections = { projects, socials };