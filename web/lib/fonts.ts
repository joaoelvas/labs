import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";

// Self-hosted at build time by next/font; exposed as CSS variables used by the tokens.
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const fontVariables = [interTight.variable, inter.variable, jetbrainsMono.variable].join(" ");
