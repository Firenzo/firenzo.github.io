import { z } from "astro/zod";
import { iconSchema } from "./iconSchema";

export const nullishOptionalStringSchema = z
  .string()
  .optional()
  .nullish()
  .overwrite((v) => v || "")
  .pipe(z.string());

export const richTextSchema = z
  .array(z.record(z.string(), z.unknown()))
  .nullish()
  .overwrite((v) => v || []);

export const buttonWithIconSchema = z.object({
  __component: z.string(),
  displayText: nullishOptionalStringSchema,
  url: z.string(),
  iconPosition: z.literal(["Left", "Right"]),
  icon: iconSchema,
});
