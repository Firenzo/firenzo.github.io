import type { PageData } from "../schemas/pageSchemas";
import { setTranslations } from "./translations";

export const getPageData = async (requestUrl: URL): Promise<PageData> => {
  const pageBaseUrl = "http://localhost:1337/api/page";
  const currentPath = requestUrl.pathname;
  const response = await fetch(`${pageBaseUrl}${currentPath}`);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const pageData = await response.json();

  setTranslations(pageData.translations);

  return pageData;
};
