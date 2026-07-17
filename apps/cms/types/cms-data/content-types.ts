import { Data } from '@strapi/strapi';
import { Prettify } from '../utils';

export type Page = Data.ContentType<'api::page.page'>;
export type Introduction = Data.ContentType<'api::introduction.introduction'>;
export type ProjectRaw = Data.ContentType<'api::project.project'>;
export type ContactInfo = Data.ContentType<'api::contact-info.contact-info'>;
export type ContactItemRaw = ContactInfo['contactItems'][number];
export type ContactItem = Prettify<
  Pick<ContactItemRaw, 'displayText' | 'url' | 'iconPosition' | 'icon'> & {
    __component: ContactItemRaw['__component'];
  }
>;
