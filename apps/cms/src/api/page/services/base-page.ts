import type { Context } from 'koa';
import { Page, BasePage } from '../../../../types';
import { ProjectRaw } from './project-page';

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

  getProjectBasePage: async (ctx: Context): Promise<BasePage> => {
    const project: ProjectRaw | null = await strapi.db
      .query('api::project.project')
      .findOne({ where: { nameInUrl: ctx.params.project } });

    const creationsPage: Page | null = await strapi.db
      .query('api::page.page')
      .findOne({ where: { url: `/${ctx.params.slug}` } });

    if (!project || !creationsPage) {
      const statusCode = 404;
      ctx.status = statusCode;
      ctx.throw(404, `Page /${ctx.params.slug}/${ctx.params.project} not found`);
    }

    const { name, nameInUrl } = project;

    return { pageTitle: name, url: nameInUrl, translations: creationsPage.translations };
  },
});
