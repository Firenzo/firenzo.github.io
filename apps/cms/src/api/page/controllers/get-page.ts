export default {
  find: async (ctx, next) => {
    try {
      const basePageData = await strapi.service('api::page.base-page').getBasePage(ctx);
      const pageUrl = `/${ctx.params.slug}`;

      let pageSpecificData = {};
      switch (pageUrl) {
        case '/about-me': {
          const aboutMeData = await strapi.service('api::page.about-me-page').getAboutMePage();
          pageSpecificData = { ...aboutMeData };
          break;
        }
        case '/resume': {
          const resumeData = await strapi.service('api::page.resume-page').getResumePage();
          pageSpecificData = { ...resumeData };
          break;
        }
        case '/creations': {
          if (ctx.params.project) {
            const projectData = await strapi.service('api::page.project-page').getProjectPage(ctx.params.project);
            pageSpecificData = { ...projectData };
            break;
          }

          const creationsData = await strapi.service('api::page.creations-page').getCreationsPage();
          pageSpecificData = { ...creationsData };
          break;
        }
        case '/contact': {
          const contactData = await strapi.service('api::page.contact-page').getContactPage();
          pageSpecificData = { ...contactData };
          break;
        }
      }
      ctx.body = { ...basePageData, ...pageSpecificData };
    } catch (err) {
      console.error('Error in page.find:', err);
      ctx.body = { error: err.message, stack: err.stack };
    }
  },
};
