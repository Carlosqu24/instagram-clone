import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EnglishDictionary from "./dictionaries/en"
import SpanishDictionary from "./dictionaries/es"

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: EnglishDictionary,
        es: SpanishDictionary,
    },
});

export default i18n;