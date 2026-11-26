import { getRelativeLocaleUrl } from "astro:i18n";
import { defaultLang, languages, locales, type Lang } from "./locales";
import { ui, type UIKey } from "./ui";

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && Object.hasOwn(languages, value);
}

/**
 * Locale and `t()` for the page being rendered. Pass `Astro.currentLocale`,
 * the single source of the active language for pages and components alike.
 * `t()` supports `{name}` placeholders: `t("projects.viewOnGithub", { title })`.
 */
export function useI18n(currentLocale: string | undefined) {
  const lang = isLang(currentLocale) ? currentLocale : defaultLang;

  function t(key: UIKey, vars?: Record<string, string>) {
    const text = ui[lang][key];
    if (!vars) return text;
    return text.replace(/\{(\w+)\}/g, (match, name) => vars[name] ?? match);
  }

  return { lang, t };
}

/**
 * Picks the active locale from a content field. Proper nouns are stored as a
 * plain string shared by every locale; translated fields as `{ en, es }`.
 */
export function localize<T>(value: T | Record<Lang, T>, lang: Lang): T {
  return typeof value === "object" &&
    value !== null &&
    Object.hasOwn(value, lang)
    ? (value as Record<Lang, T>)[lang]
    : (value as T);
}

/** Removes the locale prefix from a pathname: `/es/projects` → `/projects`. */
function stripLocale(pathname: string): string {
  const [, maybeLang, ...rest] = pathname.split("/");
  return isLang(maybeLang) && maybeLang !== defaultLang
    ? `/${rest.join("/")}`
    : pathname;
}

/**
 * Path of `path` in `lang`, following Astro's i18n routing and keeping any
 * hash: `("/#about", "es")` → `/es/#about`.
 */
export function localizePath(path: string, lang: Lang): string {
  const [pathname, hash] = path.split("#");
  const localized = getRelativeLocaleUrl(lang, stripLocale(pathname || "/"));
  return hash ? `${localized}#${hash}` : localized;
}

/** The same page in every locale, for hreflang tags and the language switch. */
export function getAlternates(pathname: string) {
  return locales.map((lang) => ({ lang, href: localizePath(pathname, lang) }));
}

/** Route params for pages under `src/pages/[...lang]/`. */
export function getLangStaticPaths() {
  return locales.map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
  }));
}
