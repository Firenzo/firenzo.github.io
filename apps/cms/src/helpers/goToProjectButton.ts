import type { ProjectRaw, Project } from '../api/page/services/project-page';

export const mapGoToProjectButton = (
  goToProjectButton: ProjectRaw['goToProjectButton']
): Project['goToProjectButton'] => {
  if (goToProjectButton === null) return goToProjectButton;

  return {
    displayText: goToProjectButton?.displayText,
    url: goToProjectButton?.url,
    iconPosition: goToProjectButton?.iconPosition,
    icon: goToProjectButton?.icon,
    backgroundColor: goToProjectButton?.backgroundColor,
  };
};
