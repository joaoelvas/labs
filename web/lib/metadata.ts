import type { Metadata, Viewport } from "next";
import { dictionaries, paths, type Locale, type Page } from "./i18n";
import { ogPath, ogSize } from "./og";
import { site } from "./site";

export const viewport: Viewport = {
  themeColor: "#0B0C0E", // --ink-950; metadata can't read CSS variables
  colorScheme: "dark",
};

export function metadataFor(locale: Locale, page: Page = "home"): Metadata {
  const t = dictionaries[locale];
  const meta = page === "home" ? t.meta : t.trainingPage.meta;
  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: paths[page][locale],
      languages: { en: paths[page].en, pt: paths[page].pt },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      siteName: "Venley Labs",
      url: paths[page][locale],
      locale: locale === "en" ? "en_GB" : "pt_PT",
      type: "website",
      images: [{ url: ogPath(locale, page), ...ogSize, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogPath(locale, page)],
    },
  };
}
