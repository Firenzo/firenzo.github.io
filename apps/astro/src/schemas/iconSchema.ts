import { z } from "astro/zod";
import { iconSet } from "@repo/iconset";

export const allIconClasses = Object.values(iconSet);

export const iconSchema = z.object({
  name: z.literal([...allIconClasses]),
  size: z.number().optional(),
  color: z.string().optional(),
});

export type Icon = z.infer<typeof iconSchema>;
