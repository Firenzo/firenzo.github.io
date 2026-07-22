import { z } from "astro/zod";
import { nullishOptionalStringSchema, richTextSchema } from "./commonSchemas";

export const experienceSchema = z.object({
  role: nullishOptionalStringSchema,
  company: nullishOptionalStringSchema,
  description: richTextSchema,
  city: nullishOptionalStringSchema,
  country: nullishOptionalStringSchema,
  additionalText: nullishOptionalStringSchema,
  startDate: nullishOptionalStringSchema,
  endDate: z
    .string()
    .nullish()
    .optional()
    .transform((v) => v || "now")
    .pipe(z.string()),
});
