import { Data } from '@strapi/strapi';
import { getAllContentBlockComponentUIDs, ContentBlockComponentUID, ContentBlock } from '../../../helpers';
import { ImageData } from '../../../../types';
import { mapProject, componentsToPopulate, type ProjectRaw, type Project } from './project-page';

export type CreationsPage = { creations: Project[] };

export default () => ({
  getCreationsPage: async (): Promise<CreationsPage> => {
    const creations: ProjectRaw[] = (
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

    const mappedCreations = creations.map((creation: ProjectRaw) => mapProject(creation));

    return { creations: mappedCreations };
  },
});
