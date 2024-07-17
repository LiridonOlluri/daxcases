import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enLocales from "./en";
import alLocales from "./al";
export const languageResources = {
  en: { translation: enLocales },
  al: { translation: alLocales },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",

  debug: true,
  lng: "en",
  fallbackLng: "en",
  resources: languageResources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
