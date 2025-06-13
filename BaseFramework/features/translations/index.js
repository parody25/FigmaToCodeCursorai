/**
 * Translation
 * @format
 */

import { I18nManager } from 'react-native';
import i18n from 'i18next';
import {
  initReactI18next,
  useTranslation,
  withTranslation,
} from 'react-i18next';

import en from './en.json';
import ar from './ar.json';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    compatibilityJSON: 'v3',
    lng: I18nManager.isRTL ? 'ar' : 'en',
    fallbackLng: I18nManager.isRTL ? 'ar' : 'en',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

const getCurrentLanguage = () => {
  return i18n.languages[0];
};

const changeI18nLanguage = (language: string) => {
  I18nManager.forceRTL(i18n.dir(language) === 'rtl');
  i18n.changeLanguage(language);
};

export {
  withTranslation,
  useTranslation,
  i18n,
  getCurrentLanguage,
  changeI18nLanguage,
};

export default i18n;
