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
  displayText: nullishOptionalStringSchema.optional(),
  url: z.string().optional(),
  iconPosition: z.literal(["Left", "Right"]).optional(),
  icon: iconSchema.optional(),
  backgroundColor: z.literal(["Primary", "White", "Black"]).optional(),
});

const DEFAULT_HEADING = "h3";
const headings = ["h2", "h3", "h4", "h5", "h6"] as const;
export const headingSchema = z
  .literal(headings)
  .nullish()
  .overwrite((v) => (v && headings.includes(v) ? v : DEFAULT_HEADING))
  .pipe(z.literal(headings));

export type ButtonWithIcon = z.infer<typeof buttonWithIconSchema>;
export type Headings = z.infer<typeof headingSchema>;
