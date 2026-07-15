import { Prettify } from '../utils';
import { Data } from '@strapi/strapi';
import { imageFormats } from '../../src/constants/image';

export type JSONValue =
  | (string | number | boolean)
  | {
      [key: string]: JSONValue;
    }
  | JSONValue[];

export type ImageFormat = (typeof imageFormats)[number];
type ImageBase = Prettify<
  Pick<Data.ContentType<'plugin::upload.file'>, 'url' | 'mime' | 'caption'> & {
    altText: Data.ContentType<'plugin::upload.file'>['alternativeText'];
  }
>;

export type ImageData = Prettify<
  ImageBase & {
    [K in Exclude<(typeof imageFormats)[number], 'original'>]?: Object;
  }
>;
