import type { Picture } from "../schemas/imageSchema";

export const applyShadow = (image: Picture) => {
  return !(image.url.endsWith("png") || image.url.endsWith("svg"));
};
