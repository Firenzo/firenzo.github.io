import type { PageData } from "../schemas/pageSchemas";
import { setTranslations } from "./translations";
import { BASE_PATH, CMS_URL } from "./url";

export const getPageData = async (requestUrl: URL): Promise<PageData> => {
  const pageBaseUrl = CMS_URL + "/api/page";

  // Remove BASE_PATH from url to account for the base-path setting in astro.config.mjs
  // This makes sure that pages are still generated when building with SSG.

  const currentPath = requestUrl.pathname.replace(BASE_PATH, "");
  const response = await fetch(`${pageBaseUrl}${currentPath}`);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const pageData = await response.json();

  setTranslations(pageData.translations);

  return pageData;
};
