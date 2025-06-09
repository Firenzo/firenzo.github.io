import { mapImageData, formatDate } from '../../../helpers';

export default () => ({
  getResumePage: async () => {
    const designSkills = (
      await strapi.service('api::design-skill.design-skill').find({ populate: ['logo'], sort: { orderIndex: 'asc' } })
    )?.results;

    const frontEndSkills = (
      await strapi
        .service('api::front-end-skill.front-end-skill')
        .find({ populate: ['logo'], sort: { orderIndex: 'asc' } })
    )?.results;

    const experiences = (await strapi.service('api::experience.experience').find({ sort: { startDate: 'desc' } }))
      ?.results;

    const mapSkills = (skills) => {
      return skills.map((skill) => {
        return {
          name: skill.name,
          show: skill.show,
          logo: mapImageData(skill.logo),
        };
      });
    };

    const mappedDesignSkills = mapSkills(designSkills);
    const mappedFrontEndSkills = mapSkills(frontEndSkills);
    const mappedExperiences = experiences.map((experience) => {
      return {
        function: experience.function,
        company: experience.company,
        description: experience.description,
        city: experience.city,
        country: experience.country,
        startDate: formatDate(experience.startDate),
        endDate: formatDate(experience.endDate),
        additionalText: experience.additionalText,
      };
    });

    const resumePageData = {
      designSkills: mappedDesignSkills,
      frontEndSkills: mappedFrontEndSkills,
      experiences: mappedExperiences,
    };

    return resumePageData;
  },
});
