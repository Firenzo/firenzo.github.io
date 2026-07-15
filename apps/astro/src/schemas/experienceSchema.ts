import { z } from "astro/zod";
import { nullishOptionalStringSchema } from "./commonSchemas";

export const experienceSchema = z.object({
  function: nullishOptionalStringSchema,
  company: nullishOptionalStringSchema,
  description: nullishOptionalStringSchema,
  city: nullishOptionalStringSchema,
  country: nullishOptionalStringSchema,
  additionalText: nullishOptionalStringSchema,
  startDate: nullishOptionalStringSchema,
  endDate: nullishOptionalStringSchema,
});
