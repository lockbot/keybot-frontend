// import 'server-only';

const dictionaries = {
  'en-US': () => import('/src/app/[lang]/dictionaries/en-US.json').then((module) => module.default),
  'pt-BR': () => import('/src/app/[lang]/dictionaries/pt-BR.json').then((module) => module.default),
  'pt-PT': () => import('/src/app/[lang]/dictionaries/pt-PT.json').then((module) => module.default),
  'en-GB': () => import('/src/app/[lang]/dictionaries/en-GB.json').then((module) => module.default),
  'es-ES': () => import('/src/app/[lang]/dictionaries/es-ES.json').then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();