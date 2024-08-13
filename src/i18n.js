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

