import { defineCollection, z } from 'astro:content';

const conceptsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    readTime: z.string()
  })
});

export const collections = {
  concepts: conceptsCollection
};