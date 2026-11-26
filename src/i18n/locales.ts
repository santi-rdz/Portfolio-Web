/**
 * Single source of truth for supported locales. Imported by `astro.config.mjs`
 * (routing and sitemap) and by the app, so it must stay dependency-free.
 */
export const languages = {
  en: {
    label: "English",
    short: "EN",
    hreflang: "en-US",
    ogLocale: "en_US",
  },
  es: {
    label: "Español",
    short: "ES",
    hreflang: "es-MX",
    ogLocale: "es_MX",
  },
} as const;

export type Lang = keyof typeof languages;

export const locales = Object.keys(languages) as Lang[];
export const defaultLang: Lang = "en";
