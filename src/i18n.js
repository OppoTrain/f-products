import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// استيراد ملفات الترجمة
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import pol from "./locales/pol.json";
import rs from "./locales/rs.json";
import cr from "./locales/cr.json";
import ind from "./locales/in.json";
import li from "./locales/li.json";
import gr from "./locales/gr.json";
import rm from "./locales/rm.json";
import sl from "./locales/sl.json";
import uk from "./locales/uk.json";
import hn from "./locales/hn.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      pol: { translation: pol },
      rs: { translation: rs },
      cr: { translation: cr },
      in: { translation: ind },
      li: { translation: li },
      gr: { translation: gr },
      rm: { translation: rm },
      sl: { translation: sl },
      uk: { translation: uk },
      hn: { translation: hn },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
