type Translations = Record<string, string> | null;

let translations: Translations = null;

export const setTranslations = (pageTranslations: Translations) => {
  translations = pageTranslations;
};

export const getTranslation = (key: string) =>
  translations?.[key] ?? `???${key}???`;
