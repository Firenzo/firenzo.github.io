import type { Data } from '@strapi/strapi';
import type { Context } from 'koa';

type Page = Data.ContentType<'api::page.page'>;
export type BasePage = Pick<Page, 'pageTitle' | 'url' | 'translations'>;

export default () => ({
  getBasePage: async (ctx: Context): Promise<BasePage> => {
    const pageUrl = `/${ctx.params.slug}`;

    const page: Page | null = await strapi.db.query('api::page.page').findOne({ where: { url: pageUrl } });

    if (!page) {
      const statusCode = 404;
      ctx.status = statusCode;
      ctx.throw(404, `Page ${pageUrl} not found`);
    }
    const { pageTitle, url, translations } = page;

    return { pageTitle, url, translations };
  },
});
