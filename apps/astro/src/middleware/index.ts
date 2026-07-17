import type { MiddlewareHandler } from "astro";
import type { PageData } from "../schemas/pageSchemas";
import { setTranslations } from "../helpers/translations";

export const onRequest: MiddlewareHandler = async (context, next) => {
  /**
   * This middleware fetches data of existing pages and
   * adds the data to the Astro.locals object.
   */
  const availablePages = ["/about-me", "/resume", "/creations", "/contact"];
  const currentPath =
    context.url.pathname === "/" ? "/creations" : context.url.pathname;
  if (availablePages.includes(currentPath)) {
    const pageBaseUrl = "http://localhost:1337/api/page";
    try {
      const response = await fetch(`${pageBaseUrl}${currentPath}`);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const pageData = await response.json();
      if (context.locals) {
        context.locals.pageData = pageData as PageData;
        setTranslations(pageData.translations);
      }
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      }
      throw new Error(String(err));
    }
  }

  return next();
};
