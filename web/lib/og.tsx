import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { dictionaries, paths, type Locale, type Page } from "./i18n";

// Social preview images, served by app/og/[image]/route.tsx and rendered once at build time.
// Satori can't read CSS variables, so the token values are repeated here.
const INK = "#0b0c0e";
const TEXT = "#eceae4";
const MUTED = "#a3a7ae";
const GOLD = "#c9a646";
const STAR_PATH = "M17 1.5 L19.6 14.4 L32.5 17 L19.6 19.6 L17 32.5 L14.4 19.6 L1.5 17 L14.4 14.4 Z";

export const ogSize = { width: 1200, height: 630 };

export const ogImages = (Object.keys(paths) as Page[]).flatMap((page) =>
  (Object.keys(dictionaries) as Locale[]).map((locale) => ({ page, locale })),
);

export const ogPath = (locale: Locale, page: Page) => `/og/${page}-${locale}.png`;

// Read on first render only: lib/metadata.ts imports this module for ogPath on every page.
let fonts: Promise<[Buffer, Buffer]> | undefined;
const loadFonts = () =>
  (fonts ??= Promise.all([
    readFile(join(process.cwd(), "assets/InterTight-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/JetBrainsMono-Medium.ttf")),
  ]));

export async function ogImage(locale: Locale, page: Page) {
  const t = dictionaries[locale];
  const hero = page === "home" ? t.hero : t.trainingPage.hero;
  const [display, mono] = await loadFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: INK,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          color: TEXT,
          fontFamily: "Inter Tight",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="52" height="52" viewBox="0 0 34 34">
            <path d={STAR_PATH} fill="none" stroke={GOLD} strokeWidth={1.3} />
            <circle cx="17" cy="17" r="2" fill={GOLD} />
          </svg>
          <div style={{ fontSize: 26, letterSpacing: "0.32em", textTransform: "uppercase" }}>Venley Labs</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 22,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: MUTED,
            }}
          >
            {hero.eyebrow}
          </div>
          <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: "-0.035em", maxWidth: 1000 }}>
            {hero.title}
          </div>
        </div>
        <div style={{ fontFamily: "JetBrains Mono", fontSize: 22, color: MUTED }}>venleylabs.com</div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Inter Tight", data: display, weight: 600, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
