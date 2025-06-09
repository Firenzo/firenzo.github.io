import { mapImageData, mapContentBlocks, getAllContentBlockComponentsNames } from '../../../helpers';

const componentInclusions = getAllContentBlockComponentsNames().reduce((acc, componentName) => {
  acc[componentName] = { populate: '*' };
  console.log(componentName);
  return acc;
}, {});

export default () => ({
  getCreationsPage: async () => {
    console.log(componentInclusions);
    const creations = (
      await strapi.service('api::project.project').find({
        populate: {
          image: true,
          goToProjectButton: true,
          content: {
            on: {
              ...componentInclusions,

              // override entries in componentInclusions for components with nested populations
              'content-blocks.dual-media-items': {
                populate: {
                  mediaItem: {
                    populate: '*',
                  },
                },
              },
              'content-blocks.image-slider': {
                populate: {
                  imageSliderItems: {
                    populate: '*',
                  },
                },
              },
            },
          },
        },
        sort: { createdAt: 'desc' },
      })
    )?.results;

    const mappedCreations = creations.map((creation) => {
      return {
        name: creation.name,
        nameInUrl: creation.nameInUrl,
        introText: creation.introText,
        tags: creation.tags,
        image: mapImageData(creation.image),
        goToProjectButton: {
          displayText: creation.goToProjectButton.displayText,
          url: creation.goToProjectButton.url,
          iconPosition: creation.goToProjectButton.iconPosition.toLowerCase(),
          icon: creation.goToProjectButton.icon,
        },
        content: mapContentBlocks(creation.content),
      };
    });

    return { creations: mappedCreations };
  },
});
