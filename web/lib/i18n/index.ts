import { en, type Dictionary } from "./en";
import { pt } from "./pt";

export type Locale = "en" | "pt";
export type Page = "home" | "training";
export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = { en, pt };

export const otherLocale = (locale: Locale): Locale => (locale === "en" ? "pt" : "en");

// EN lives at the root, PT under /pt/. Trailing slashes match `trailingSlash: true`.
export const paths: Record<Page, Record<Locale, string>> = {
  home: { en: "/", pt: "/pt/" },
  training: { en: "/training/", pt: "/pt/formacao/" },
};
