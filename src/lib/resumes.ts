import { existsSync } from "node:fs";
import { publicDir } from "astro:config/server";
import { resumes } from "../data/site";
import { languages, locales } from "../i18n/locales";

/**
 * CV PDFs present in `public/`, in locale order. A missing file is skipped
 * with a build warning instead of shipping a broken download link.
 */
export function getAvailableResumes() {
  return locales.flatMap((lang) => {
    const { file, downloadName } = resumes[lang];
    if (!existsSync(new URL(file, publicDir))) {
      console.warn(`[resume] public/${file} not found; skipping download.`);
      return [];
    }
    return [
      { lang, href: `/${file}`, downloadName, label: languages[lang].label },
    ];
  });
}
