import type { MetadataRoute } from "next";
import { paths, type Page } from "@/lib/i18n";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(paths) as Page[]).flatMap((page) =>
    (["en", "pt"] as const).map((locale) => ({
      url: `${site.url}${paths[page][locale]}`,
      alternates: {
        languages: { en: `${site.url}${paths[page].en}`, pt: `${site.url}${paths[page].pt}` },
      },
    })),
  );
}
