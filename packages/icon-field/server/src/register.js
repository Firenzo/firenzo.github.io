const register = ({ strapi }) => {
  strapi.customFields.register({
    name: 'icon',
    plugin: 'icon-field',
    type: 'json',
    inputSize: {
      default: 6,
      isResizable: true,
    },
  });
};

export default register;
