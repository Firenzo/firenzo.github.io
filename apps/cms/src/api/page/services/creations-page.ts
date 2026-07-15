import { Data } from '@strapi/strapi';
import {
  mapImageData,
  mapContentBlocks,
  getAllContentBlockComponentUIDs,
  ContentBlockComponentUID,
  ContentBlock,
} from '../../../helpers';
import { ImageData } from '../../../../types';

export type Project = Data.ContentType<'api::project.project'>;
type GoToProjectButton = Data.Component<'common.button'>;
type Creation = Pick<Project, 'name' | 'nameInUrl' | 'introText' | 'tags'> & {
  image: ImageData;
  goToProjectButton: Pick<GoToProjectButton, 'displayText' | 'url' | 'icon' | 'iconPosition'>;
  content: ContentBlock[];
};

export type CreationsPage = { creations: Creation[] };

const componentsToPopulate: Record<ContentBlockComponentUID, { populate: '*' }> | {} =
  getAllContentBlockComponentUIDs().reduce((acc, componentUid: ContentBlockComponentUID) => {
    acc[componentUid] = { populate: '*' };
    return acc;
  }, {});

export default () => ({
  getCreationsPage: async (): Promise<CreationsPage> => {
    const creations: Project[] = (
      await strapi.service('api::project.project').find({
        populate: {
          image: true,
          goToProjectButton: true,
          content: {
            on: {
              ...componentsToPopulate,

              // override entries in componentsToPopulate for components with nested populations
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

    const mappedCreations = creations.map((creation: Project) => {
      return {
        name: creation.name,
        nameInUrl: creation.nameInUrl,
        introText: creation.introText,
        tags: creation.tags,
        image: mapImageData(creation.image),
        goToProjectButton: {
          displayText: creation.goToProjectButton.displayText,
          url: creation.goToProjectButton.url,
          iconPosition: creation.goToProjectButton.iconPosition,
          icon: creation.goToProjectButton.icon,
        },
        content: mapContentBlocks(creation.content),
      };
    });

    return { creations: mappedCreations };
  },
});
