const controller = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('json-file-field')
      // the name of the service file & the method.
      .service('service')
      .getWelcomeMessage();
  },
});

export default controller;
