export default () => ({
  getContactPage: async () => {
    const contactItems = (await strapi.service('api::contact-info.contact-info').find({ populate: 'contactItems' }))
      ?.contactItems;

    const mappedContactItems = contactItems.map((contactItem) => {
      return {
        component: contactItem.__component,
        displayText: contactItem.displayText,
        url: contactItem.url,
        iconPosition: contactItem.iconPosition,
        icon: contactItem.icon,
      };
    });

    return { contactItems: mappedContactItems };
  },
});
