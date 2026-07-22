import { z } from "astro/zod";
import {
  buttonWithIconSchema,
  nullishOptionalStringSchema,
  richTextSchema,
} from "./commonSchemas";
import { pictureSchema } from "./imageSchema";
import { contentBlockSchema } from "./contentblockSchema";

export const projectSchema = z.object({
  name: nullishOptionalStringSchema,
  nameInUrl: z.string(),
  introText: richTextSchema,
  tags: z.array(z.string()),
  image: pictureSchema.nullable().optional(),
  goToProjectButton: buttonWithIconSchema
    .omit({ __component: true })
    .nullable(),
  content: z.array(contentBlockSchema),
});
