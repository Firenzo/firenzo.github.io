import { mapImageData } from '../../../helpers';
import type { Introduction, AboutmeContent } from '../../../../types';

export default () => ({
  getAboutMePage: async (): Promise<AboutmeContent> => {
    const introduction: Introduction = await strapi
      .service('api::introduction.introduction')
      .find({ populate: ['picture'] });

    const { name, role, introText, picture } = introduction;
    return { name, role, introText, picture: mapImageData(picture) };
  },
});
