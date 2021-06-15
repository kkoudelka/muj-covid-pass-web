import i18next from "i18next";
import csTrans from "./cs";
import { initReactI18next } from "react-i18next";
import enTrans from "./en";

export const initTranslations = async (locale: string) => {
  await i18next.use(initReactI18next).init({
    resources: {
      en: enTrans,
      cs: csTrans,
    },
    lng: locale,
    fallbackLng: "cs",
    interpolation: {
      escapeValue: true,
    },
  });
};
