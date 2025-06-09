/**
 * page-slug service
 */

export default () => ({
  getBasePage: async (ctx) => {
    const pageUrl = `/${ctx.params.slug}`;
    const page = await strapi.db.query('api::page.page').findOne({ where: { url: pageUrl } });

    if (!page) {
      const statusCode = 404;
      ctx.status = statusCode;
      ctx.throw(404, `Page ${pageUrl} not found`);
      return;
    }
    const { pageTitle, url, translations } = page;

    return { pageTitle, url, translations };
  },
});
