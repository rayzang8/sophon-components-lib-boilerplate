import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh_Common from './zh/common';
import {cacheUtils} from "../cacheUtils";


const resources = {
  zh: {
    common: {
      ...zh_Common,
    },

  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: cacheUtils.getLocale(),

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;