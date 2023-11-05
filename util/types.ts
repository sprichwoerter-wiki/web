import z from "zod"

export const schemaPartialProverb = z.object({
  name: z.string(),
  slug: z.string(),
  explanation: z.string().optional(),
  coverUrl: z.string().optional(),
})

export type PartialProverb = z.infer<typeof schemaPartialProverb>

export const schemaProverb = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  metaDescription: z.string().optional(),
  explanation: z.string().optional(),
  example: z.string().optional(),
  history: z.string().optional(),
  coverUrl: z.string().optional(),
})

export type Proverb = z.infer<typeof schemaProverb>
