export default {
  routes: [
    {
      method: 'GET',
      path: '/page/:slug',
      handler: 'get-page.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
