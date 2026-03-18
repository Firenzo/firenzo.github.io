import { mapImageData } from '../../../helpers';
import type { Data } from '@strapi/strapi';
import { Prettify } from '../../../../types/utils';

type Introduction = Data.ContentType<'api::introduction.introduction'>;
export type AboutMePage = Prettify<
  Pick<Introduction, 'name' | 'role' | 'introText'> & {
    picture: ReturnType<typeof mapImageData>;
  }
>;

export default () => ({
  getAboutMePage: async (): Promise<AboutMePage> => {
    const introduction: Introduction = await strapi
      .service('api::introduction.introduction')
      .find({ populate: ['picture'] });

    const { name, role, introText, picture } = introduction;
    return { name, role, introText, picture: mapImageData(picture) };
  },
});
