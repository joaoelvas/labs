import { ogImage, ogImages } from "@/lib/og";

// One PNG per page and locale, written to out/og/<page>-<locale>.png at build time.
// A route handler (not opengraph-image.tsx) so the files keep their .png extension.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return ogImages.map(({ page, locale }) => ({ image: `${page}-${locale}.png` }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ image: string }> }) {
  const { image } = await params;
  const match = ogImages.find(({ page, locale }) => image === `${page}-${locale}.png`);
  if (!match) return new Response("Not found", { status: 404 });
  return ogImage(match.locale, match.page);
}
