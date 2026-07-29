import { Core } from '@strapi/strapi';
import fs from 'node:fs/promises';
import path from 'node:path';

export const generateAllProjectsArray = async (strapi: Core.Strapi) => {
  const projects = await strapi.documents('api::project.project').findMany({
    fields: ['nameInUrl'],
  });

  const names = projects.map((p) => p.nameInUrl);
  const output = `//! This file is auto generated, don't change this file\n\nexport const allProjects = ${JSON.stringify(names, null, 2)} as const;\n`;
  const outputPath = path.join(process.cwd(), 'src', 'modules', 'allProjects.ts');
  await fs.writeFile(path.resolve(outputPath), output);
};
