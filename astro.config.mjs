// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { defaultLang, languages, locales } from "./src/i18n/locales.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://raul-rodriguez.netlify.app/",
  i18n: {
    locales,
    defaultLocale: defaultLang,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/success\/?$/.test(page),
      i18n: {
        defaultLocale: defaultLang,
        locales: Object.fromEntries(
          locales.map((lang) => [lang, languages[lang].hreflang]),
        ),
      },
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
