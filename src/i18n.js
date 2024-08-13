import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './data/translationEn.json';
import translationFr from './data/translationFr.json';
import translationUa from './data/translationUa.json';

const resources = {
    fr: {
        translation: translationFr
    },
    en: {
        translation: translationEn
    },
    ua: {
        translation:translationUa
    }
};

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'fr', //default language
        fallbackLng: 'fr', // the language to use if no translation is found
        interpolation: {
            escapeValue: false // react вже екранує значення
        }
    });

export default i18next;