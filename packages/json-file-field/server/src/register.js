const register = ({ strapi }) => {
  // register phase

  strapi.customFields.register({
    name: 'json-file',
    plugin: 'json-file-field',
    type: 'json',
    inputSize: {
      default: 12,
      isResizable: true,
    },
  });
};

export default register;
