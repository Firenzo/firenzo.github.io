export default {
  routes: [
    {
      method: 'GET',
      path: '/page/:slug/:project?',
      handler: 'get-page.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
