// Inline SVGs from design/assets. All decorative — the text next to them carries the meaning.

import type { CapabilityIcon } from "@/lib/i18n/en";

const STAR_PATH = "M17 1.5 L19.6 14.4 L32.5 17 L19.6 19.6 L17 32.5 L14.4 19.6 L1.5 17 L14.4 14.4 Z";

/** Venley star mark — the only place gold is allowed. */
export function StarMark({
  size = 34,
  strokeWidth = 1.3,
  dot = 2,
  className,
}: {
  size?: number;
  strokeWidth?: number;
  dot?: number | null;
  className?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true" className={className}>
      <path d={STAR_PATH} fill="none" stroke="var(--gold)" strokeWidth={strokeWidth} />
      {dot ? <circle cx="17" cy="17" r={dot} fill="var(--gold)" /> : null}
    </svg>
  );
}

export function TelltaleIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
      <rect width="44" height="44" rx="11" fill="var(--mock-telltale-tile)" />
      <circle cx="22" cy="22" r="12" fill="var(--telltale-green)" opacity="0.2" />
      <circle cx="22" cy="22" r="6.5" fill="var(--telltale-green)" />
      <path
        d="M8 22 H14 L17 17 L21 27 L24 22 H36"
        fill="none"
        stroke="var(--ink-950)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function AtlasIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
      <rect width="44" height="44" rx="11" fill="var(--mock-atlas-tile)" />
      <circle cx="22" cy="22" r="11" fill="none" stroke="var(--accent)" strokeWidth="1.6" />
      <path
        d="M11 22 H33 M22 11 C16 16 16 28 22 33 M22 11 C28 16 28 28 22 33"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.3"
      />
    </svg>
  );
}

const capabilityPaths: Record<CapabilityIcon, React.ReactNode> = {
  native: (
    <>
      <rect x="3" y="5" width="22" height="15" rx="2.5" fill="none" />
      <path d="M10 24 H18 M14 20 V24" strokeLinecap="round" />
    </>
  ),
  ai: (
    <>
      <circle cx="7" cy="14" r="3.5" fill="none" />
      <circle cx="21" cy="7" r="3.5" fill="none" />
      <circle cx="21" cy="21" r="3.5" fill="none" />
      <path d="M10.2 12.4 L17.8 8.6 M10.2 15.6 L17.8 19.4" />
    </>
  ),
  training: (
    <>
      <rect x="3" y="4" width="22" height="14" rx="2.5" fill="none" />
      <path d="M8 9 H16 M8 13 H20 M14 18 V22 M9 25 L14 22 L19 25" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="4" width="22" height="20" rx="2.5" fill="none" />
      <path
        d="M3 9.5 H25 M8 15 L11 17.5 L8 20 M14 20 H19"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  payments: (
    <>
      <rect x="3" y="7" width="22" height="15" rx="2.5" fill="none" />
      <path d="M3 12 H25 M7 17.5 H12" strokeLinecap="round" />
    </>
  ),
};

export function CapabilityGlyph({ name }: { name: CapabilityIcon }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" stroke="var(--accent)" strokeWidth="1.5">
      {capabilityPaths[name]}
    </svg>
  );
}
