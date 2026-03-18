import { Data } from '@strapi/strapi';
import { Prettify } from '../../../../types/utils';

type ContactInfo = Data.ContentType<'api::contact-info.contact-info'>;
type ContactItemRaw = ContactInfo['contactItems'][number];

export type ContactItem = Prettify<
  Pick<ContactItemRaw, 'displayText' | 'url' | 'iconPosition' | 'icon'> & {
    component: ContactItemRaw['__component'];
  }
>;

export type ContactPage = {
  contactItems: ContactItem[];
};

export default () => ({
  getContactPage: async (): Promise<ContactPage> => {
    const contactItems: ContactInfo['contactItems'] = (
      await strapi.service('api::contact-info.contact-info').find({ populate: 'contactItems' })
    )?.contactItems;

    const mappedContactItems = contactItems.map((contactItem: ContactItemRaw) => {
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
