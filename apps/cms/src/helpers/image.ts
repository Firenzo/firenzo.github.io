import { Data } from '@strapi/strapi';
import { Prettify } from '../../types/utils';

const imageFormats = ['original', 'thumbnail', 'small', 'medium', 'large'] as const;

type ImageFormat = (typeof imageFormats)[number];
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

export const mapImageData = (image: Data.ContentType<'plugin::upload.file'>): ImageData => {
  const altText = image.alternativeText;
  const caption = image.caption;

  const availableFormats = imageFormats.filter((imageFormat: ImageFormat) => {
    if (imageFormat === 'original') {
      return true;
    }
    return !!image?.formats?.[imageFormat];
  });

  const mappedImageData = availableFormats.reduce((acc: {} | ImageData, imageFormat: ImageFormat) => {
    if (imageFormat === 'original') {
      acc = {
        url: image.url,
        width: image.width,
        height: image.height,
        mime: image.mime,
      };

      if (image.ext === '.svg') {
        'width' in acc && delete acc.width;
        'height' in acc && delete acc.height;
      }
      return acc;
    }

    acc[imageFormat] = {
      url: image?.formats?.[imageFormat]?.url,
      width: image?.formats?.[imageFormat]?.width,
      height: image?.formats?.[imageFormat]?.height,
      mime: image?.formats?.[imageFormat]?.mime,
    };

    if (image.ext === '.svg') {
      delete image.formats[imageFormat].width;
      delete image.formats[imageFormat].height;
    }

    return acc;
  }, {});

  return { altText, caption, ...mappedImageData };
};
