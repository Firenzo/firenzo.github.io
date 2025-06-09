import { mapImageData } from '../../../helpers';

export default () => ({
  getAboutMePage: async () => {
    const { name, role, introText, picture } = await strapi
      .service('api::introduction.introduction')
      .find({ populate: ['picture'] });

    return { name, role, introText, picture: mapImageData(picture) };
  },
});
