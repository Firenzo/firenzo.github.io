const register = ({ strapi }) => {
  strapi.customFields.register({
    name: 'array',
    plugin: 'array-field',
    type: 'json',
    inputSize: {
      default: 12,
      isResizable: true,
    },
  });
};

export default register;
