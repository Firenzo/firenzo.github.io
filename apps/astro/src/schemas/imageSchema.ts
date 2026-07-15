import { z } from "astro/zod";
import { nullishOptionalStringSchema } from "./commonSchemas";

export const imageSchema = z.object({
  url: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  mime: z.string(),
});

export const pictureSchema = z.object({
  ...imageSchema.shape,
  altText: nullishOptionalStringSchema,
  caption: nullishOptionalStringSchema,
  thumbnail: imageSchema.optional(),
  small: imageSchema.optional(),
  medium: imageSchema.optional(),
  large: imageSchema.optional(),
});

export type Image = z.infer<typeof imageSchema>;
export type Picture = z.infer<typeof pictureSchema>;
