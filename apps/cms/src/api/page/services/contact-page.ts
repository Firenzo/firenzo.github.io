import type { ContactInfo, ContactItemRaw, ContactPage } from '../../../../types';

export default () => ({
  getContactPage: async (): Promise<ContactPage> => {
    const contactItems: ContactInfo['contactItems'] = (
      await strapi.service('api::contact-info.contact-info').find({ populate: 'contactItems' })
    )?.contactItems;

    const mappedContactItems = contactItems.map((contactItem: ContactItemRaw) => {
      return {
        __component: contactItem.__component,
        displayText: contactItem.displayText,
        url: contactItem.url,
        iconPosition: contactItem.iconPosition,
        icon: contactItem.icon,
      };
    });

    return { contactItems: mappedContactItems };
  },
});
