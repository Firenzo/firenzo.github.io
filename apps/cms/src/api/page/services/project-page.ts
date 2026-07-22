import {
  mapImageData,
  mapContentBlocks,
  getAllContentBlockComponentUIDs,
  ContentBlockComponentUID,
  ContentBlock,
  mapGoToProjectButton,
} from '../../../helpers';
import { Data } from '@strapi/strapi';
import { ImageData } from '../../../../types';

export type ProjectRaw = Data.ContentType<'api::project.project'>;
export type GoToProjectButton = Data.Component<'common.button'>;
export type Project = Pick<ProjectRaw, 'name' | 'nameInUrl' | 'introText' | 'tags'> & {
  image: ImageData;
  goToProjectButton: Pick<GoToProjectButton, 'displayText' | 'url' | 'icon' | 'iconPosition' | 'backgroundColor'>;
  content: ContentBlock[];
};

export const componentsToPopulate: Record<ContentBlockComponentUID, { populate: '*' }> | {} =
  getAllContentBlockComponentUIDs().reduce((acc, componentUid: ContentBlockComponentUID) => {
    acc[componentUid] = { populate: '*' };
    return acc;
  }, {});

export const mapProject = (project: ProjectRaw): Project => ({
  name: project.name,
  nameInUrl: project.nameInUrl,
  introText: project?.introText,
  tags: project.tags,
  image: project.image ? mapImageData(project.image) : null,
  goToProjectButton: mapGoToProjectButton(project.goToProjectButton),
  content: mapContentBlocks(project.content),
});

export type ProjectPage = { project: Project };

export default () => ({
  getProjectPage: async (projectSlug: string): Promise<ProjectPage> => {
    const project: ProjectRaw = (
      await strapi.service('api::project.project').find({
        filters: { nameInUrl: { $eq: projectSlug } },
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
      })
    )?.results[0];

    return { project: mapProject(project) };
  },
});
