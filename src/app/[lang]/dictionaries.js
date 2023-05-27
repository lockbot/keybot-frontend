// import 'server-only';

const dictionaries = {
  en: () => import('/src/app/[lang]/dictionaries/en.json').then((module) => module.default),
  pt: () => import('/src/app/[lang]/dictionaries/pt.json').then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();