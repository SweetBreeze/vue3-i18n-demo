/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-18 15:23:57
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-20 11:12:08
 */
import { createI18n } from "vue-i18n"; // import from runtime only

import { useI18n } from "vue-i18n";
// User defined lang
import enLocale from "./en";
import zhLocale from "./zh";

const getLanguage = () => sessionStorage.getItem("lang");

const messages = {
    en: {
        ...enLocale,
    },
    zh: {
        ...zhLocale,
    },
};

export const getLocale = () => {
    const sessionlang = getLanguage();
    if (sessionlang) {
        return sessionlang;
    }
    const language = navigator.language.toLowerCase();
    const locales = Object.keys(messages);
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            return locale;
        }
    }
    // Default language is english
    return "zh";
};

const i18n = createI18n({
    legacy: false,
    locale: sessionStorage.getItem("lang") || "zh",
    messages: messages,
});

export default i18n;
