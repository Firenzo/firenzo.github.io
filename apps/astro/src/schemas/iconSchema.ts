import { z } from "astro/zod";
import { iconSet, iconColors, iconSizes } from "@repo/iconset";

export const allIconClasses = Object.values(iconSet);

export const iconSchema = z.object({
  name: z.literal(allIconClasses),
  size: z.literal(iconSizes).optional(),
  color: z.literal(iconColors).optional(),
});

export type Icon = z.infer<typeof iconSchema>;
