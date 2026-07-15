import { z } from "astro/zod";
import { nullishOptionalStringSchema } from "./commonSchemas";
import { pictureSchema } from "./imageSchema";

nullishOptionalStringSchema;
export const skillSchema = z.looseObject({
  name: nullishOptionalStringSchema,
  show: z.boolean(),
  logo: pictureSchema.omit({
    thumbnail: true,
    small: true,
    medium: true,
    large: true,
  }),
});
