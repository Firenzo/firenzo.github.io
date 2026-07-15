import { z } from "astro/zod";
import {
  buttonWithIconSchema,
  nullishOptionalStringSchema,
  richTextSchema,
} from "./commonSchemas";
import { pictureSchema } from "./imageSchema";
import { experienceSchema } from "./experienceSchema";
import { skillSchema } from "./skillSchema";
import { projectSchema } from "./projectSchema";

export const basePageSchema = z.object({
  pageTitle: z.string().optional(),
  url: z.string().optional(),
  translations: z.union([z.literal(""), z.json()]),
});

export const aboutMeContentSchema = z.object({
  name: nullishOptionalStringSchema,
  role: nullishOptionalStringSchema,
  introText: richTextSchema,
  picture: pictureSchema,
});

export const resumeContentSchema = z.object({
  designSkills: z.array(skillSchema),
  frontEndSkills: z.array(skillSchema),
  experiences: z.array(experienceSchema),
});

export const creationsContentSchema = z.object({
  creations: z.array(projectSchema),
});

export const contactContentSchema = z.object({
  contactItems: z.array(buttonWithIconSchema),
});

export const aboutMePageSchema = z.object({
  ...basePageSchema.shape,
  ...aboutMeContentSchema.shape,
});

export const resumePageSchema = z.object({
  ...basePageSchema.shape,
  ...resumeContentSchema.shape,
});

export const creationsPageSchema = z.object({
  ...basePageSchema.shape,
  ...creationsContentSchema.shape,
});

export const contactPageSchema = z.object({
  ...basePageSchema.shape,
  ...contactContentSchema.shape,
});

export const pageSchema = z.union([
  aboutMePageSchema,
  resumePageSchema,
  creationsPageSchema,
  contactPageSchema,
]);

export type BasePage = z.infer<typeof basePageSchema>;

export type AboutMeContent = z.infer<typeof aboutMeContentSchema>;
export type AboutMePage = z.infer<typeof aboutMePageSchema>;

export type ResumeContent = z.infer<typeof resumeContentSchema>;
export type ResumePage = z.infer<typeof resumePageSchema>;

export type CreationsContent = z.infer<typeof creationsContentSchema>;
export type CreationsPage = z.infer<typeof creationsPageSchema>;

export type ContactContent = z.infer<typeof contactContentSchema>;
export type ContactPage = z.infer<typeof contactPageSchema>;

export type PageData = z.infer<typeof pageSchema>;
