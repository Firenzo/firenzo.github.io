import { mapImageData, formatDate } from '../../../helpers';
import { Data } from '@strapi/strapi';
import { ImageData } from '../../../helpers';

type DesignSkillRaw = Data.ContentType<'api::design-skill.design-skill'>;
type FrontEndSkillRaw = Data.ContentType<'api::front-end-skill.front-end-skill'>;
type ExperienceRaw = Data.ContentType<'api::experience.experience'>;

export type DesignSkill = Pick<DesignSkillRaw, 'name' | 'show' | 'logo'> & { logo: ImageData };
export type FrontendSkill = Pick<FrontEndSkillRaw, 'name' | 'show' | 'logo'> & { logo: ImageData };
export type Experience = Pick<
  ExperienceRaw,
  'function' | 'company' | 'description' | 'city' | 'country' | 'additionalText'
> & { startDate: string; endDate: string };

export type ResumePage = {
  designSkills: DesignSkill[];
  frontEndSkills: FrontendSkill[];
  experiences: Experience[];
};

export default () => ({
  getResumePage: async (): Promise<ResumePage> => {
    const designSkills: DesignSkillRaw[] = (
      await strapi.service('api::design-skill.design-skill').find({ populate: ['logo'], sort: { orderIndex: 'asc' } })
    )?.results;

    const frontEndSkills: FrontEndSkillRaw[] = (
      await strapi
        .service('api::front-end-skill.front-end-skill')
        .find({ populate: ['logo'], sort: { orderIndex: 'asc' } })
    )?.results;

    const experiences: ExperienceRaw[] = (
      await strapi.service('api::experience.experience').find({ sort: { startDate: 'desc' } })
    )?.results;

    const mapSkills = (skills: DesignSkillRaw[] | FrontEndSkillRaw[]) => {
      return skills.map((skill: DesignSkillRaw | FrontEndSkillRaw) => {
        return {
          name: skill.name,
          show: skill.show,
          logo: mapImageData(skill.logo),
        };
      });
    };

    const mappedDesignSkills = mapSkills(designSkills);
    const mappedFrontEndSkills = mapSkills(frontEndSkills);
    const mappedExperiences = experiences.map((experience: ExperienceRaw) => {
      return {
        function: experience.function,
        company: experience.company,
        description: experience.description,
        city: experience.city,
        country: experience.country,
        additionalText: experience.additionalText,
        startDate: formatDate(experience.startDate),
        endDate: formatDate(experience.endDate),
      };
    });

    return {
      designSkills: mappedDesignSkills,
      frontEndSkills: mappedFrontEndSkills,
      experiences: mappedExperiences,
    };
  },
});
