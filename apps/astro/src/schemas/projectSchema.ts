import { z } from "astro/zod";
import {
  buttonWithIconSchema,
  nullishOptionalStringSchema,
  richTextSchema,
} from "./commonSchemas";
import { pictureSchema } from "./imageSchema";
import { contentBlockSchema } from "./contentblockSchema";

export const projectSchema = z.looseObject({
  name: nullishOptionalStringSchema,
  nameInUrl: z.string(),
  introText: richTextSchema,
  tags: z.array(z.string()),
  image: pictureSchema,
  goToProjectButton: buttonWithIconSchema.omit({ __component: true }),
  //   content: z.array(contentBlockSchema),
});
