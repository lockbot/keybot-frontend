// import 'server-only';

const dictionaries = {
  'en-US': () => import('/src/app/[lang]/dictionaries/en-US.json').then((module) => module.default),
  'pt-BR': () => import('/src/app/[lang]/dictionaries/pt-BR.json').then((module) => module.default),
  'pt-PT': () => import('/src/app/[lang]/dictionaries/pt-PT.json').then((module) => module.default),
  'en-GB': () => import('/src/app/[lang]/dictionaries/en-GB.json').then((module) => module.default),
  'es-ES': () => import('/src/app/[lang]/dictionaries/es-ES.json').then((module) => module.default),
  'fr-FR': () => import('/src/app/[lang]/dictionaries/fr-FR.json').then((module) => module.default),
  'de-DE': () => import('/src/app/[lang]/dictionaries/de-DE.json').then((module) => module.default),
  'it-IT': () => import('/src/app/[lang]/dictionaries/it-IT.json').then((module) => module.default),
  'uk-UA': () => import('/src/app/[lang]/dictionaries/uk-UA.json').then((module) => module.default),
  'ja-JP': () => import('/src/app/[lang]/dictionaries/ja-JP.json').then((module) => module.default),
  'ko-KR': () => import('/src/app/[lang]/dictionaries/ko-KR.json').then((module) => module.default),
  'zh-CN': () => import('/src/app/[lang]/dictionaries/zh-CN.json').then((module) => module.default),
  'nl-NL': () => import('/src/app/[lang]/dictionaries/nl-NL.json').then((module) => module.default),
  'eo': () => import('/src/app/[lang]/dictionaries/eo.json').then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();