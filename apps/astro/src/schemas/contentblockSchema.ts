/* prettier-ignore */
import { z } from "astro/zod";
import { pictureSchema } from "./imageSchema";
import {
  buttonWithIconSchema,
  nullishOptionalStringSchema,
  richTextSchema,
} from "./commonSchemas";

export const singleMediaItemComponentSchema = z.object({
  __component: z.literal("content-blocks.single-media-item"),
  showCaption: z.boolean(),
  image: pictureSchema,
});

export const dualMediaItemsComponentSchema = z.object({
  __component: z.literal("content-blocks.dual-media-items"),
  mappedItems: z
    .array(singleMediaItemComponentSchema.omit({ __component: true }))
    .max(2),
});

export const imageSliderComponentSchema = z.object({
  __component: z.literal("content-blocks.image-slider"),
  imageSliderItems: z.array(
    z.object({
      title: nullishOptionalStringSchema,
      description: nullishOptionalStringSchema,
      image: pictureSchema,
      additionalInfo: richTextSchema,
    }),
  ),
});

export const scrollableImageComponentSchema = z.object({
  __component: z.literal("content-blocks.scrollable-image"),
  title: nullishOptionalStringSchema,
  description: nullishOptionalStringSchema,
  image: pictureSchema,
});

export const richTextComponentSchema = z.object({
  __component: z.literal("content-blocks.rich-text"),
  content: richTextSchema,
});

export const lottieAnimationComponentSchema = z.object({
  __component: z.literal("content-blocks.lottie-animation"),
  caption: nullishOptionalStringSchema,
  background: z.literal(["Light", "Dark"]),
  lottieJSON: z.json(),
});

export const buttonComponentSchema = z.object({
  ...buttonWithIconSchema.shape,
  __component: z.literal("content-blocks.button"),
});

export const contentBlockSchema = z.union([
  singleMediaItemComponentSchema.optional(),
  dualMediaItemsComponentSchema.optional(),
  imageSliderComponentSchema.optional(),
  scrollableImageComponentSchema.optional(),
  richTextComponentSchema.optional(),
  lottieAnimationComponentSchema.optional(),
  buttonComponentSchema.optional(),
]);


export type SingleMediaItemComponent = z.infer<typeof singleMediaItemComponentSchema>;
export type DualMediaItemsComponent = z.infer<typeof dualMediaItemsComponentSchema>;
export type ImageSliderComponent = z.infer<typeof imageSliderComponentSchema>;
export type ScrollableImageComponent = z.infer<typeof scrollableImageComponentSchema>;
export type RichTextComponent = z.infer<typeof richTextComponentSchema>;
export type LottieAnimationComponent = z.infer<typeof lottieAnimationComponentSchema>;
export type ButtonComponent = z.infer<typeof buttonComponentSchema>;

export type ContentBlock = z.infer<typeof contentBlockSchema>;
