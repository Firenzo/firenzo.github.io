import { JSONValue } from '../common/common';
import { Introduction, ContactItem } from './content-types';
import { Prettify } from '../utils';
import { ImageData } from '../common/common';

export type BasePage = {
  pageTitle?: string;
  translations?: JSONValue;
  url?: string;
};

export type AboutmeContent = Prettify<
  Pick<Introduction, 'name' | 'role' | 'introText'> & {
    picture: ImageData;
  }
>;

export type ContactContent = {
  contactItems: ContactItem[];
};

export type AboutMePage = BasePage & AboutmeContent;
export type ContactPage = BasePage & ContactContent;

export type PageData = ContactPage;
