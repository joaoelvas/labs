# Venley Labs website — design handoff

This folder is the handoff for building the Venley Labs marketing site (a single landing page).
Venley Labs is the software studio of **Venley Star, Lda** (Portugal). The page has to do one job:
**prove we are good at software**, using our own shipped products (Telltale, Atlas) as evidence.

## What's in here

| Path | What it is |
|---|---|
| `reference/index.html` | **Visual source of truth.** Standalone static HTML of the approved design. Open it in a browser and match it. |
| `source/Main.dc.html` | The original design-canvas source (same content; uses `{{accent}}` placeholders). Reference only — don't ship it. |
| `tokens.css` / `tokens.json` | Colours, type, spacing, radii. Use these instead of the hard-coded values in the reference. |
| `content.md` | All page copy, section by section, with open placeholders marked `[LIKE THIS]`. |
| `assets/` | SVGs: Venley star mark, Telltale lamp icon, Atlas icon, capability icons. |

The reference uses inline styles because of the design tool it came from. **Do not copy the inline styles.**
Rebuild it as clean components that use the tokens.

## Stack

Not decided yet — **confirm with Joao before scaffolding.** Defaults if he doesn't specify:

- Next.js (App Router) + TypeScript, static export where possible
- Tailwind or CSS modules mapped to `tokens.css` (either is fine; no component library needed)
- Bilingual **EN / PT** from day one (Joao's standard). If content should be editable, use Payload CMS, which is his standard CMS.
- Deploy target: Railway (already used for the Telltale site)

## Page structure

The whole site is one page, `/`, with anchor navigation.

1. **Header**: star mark (gold) + `VENLEY LABS` wordmark (uppercase, letter-spacing 0.34em, weight 500). Nav: Work, Capabilities, Approach, plus a pill button "Start a project" that links to `#contact`.
2. **Hero** (`#top`): mono eyebrow, a large H1, a lead paragraph, two CTAs (primary filled, secondary outline). On the right, a **terminal card** with a fake `labs status` output listing real product facts.
3. **At a glance strip**: four short claims (Native / AI-ready / Zero / End-to-end), each with a one-line caption.
4. **Work** (`#work`): two full-width case-study cards.
   - **Telltale**: copy and chips on the left; on the right, a mockup of the macOS menu bar plus a 2×3 module-tile dropdown. Buttons go to the real download and site.
   - **Atlas**: the layout is mirrored. A chat mockup showing a question, the MCP tool calls, and the answer.
5. **Capabilities** (`#capabilities`): four columns. Each has an icon, a title, a description, and a "Proven in → …" line.
6. **Approach** (`#approach`): a **light band** (`--paper` background) for contrast, with three numbered principles.
7. **Contact** (`#contact`): a centred star mark, a big headline, and an email button.
8. **Footer**: small star, "Venley Labs is part of Venley Star, Lda · Portugal", and the copyright.

## Visual rules

- **Dark theme only.** The background is `--ink-950` with a faint 72px grid made of two linear gradients (see `tokens.css` → `.grid-bg`). There's no light-mode toggle, but the Approach band is intentionally light.
- **Monochrome UI.** The accent is off-white (`--accent`). **Gold (`--gold`) is used ONLY on the Venley star mark**, because it's the parent-brand logo colour. Don't spread gold to buttons or labels. Joao explicitly rejected a yellow/gold accent.
- **Green (`--telltale-green`) is used only inside the Telltale card**, because it's that app's own icon colour.
- Fonts: **Inter Tight** for display (600, negative tracking), **Inter** for body, **JetBrains Mono** for eyebrows, chips and terminal text. All come from Google Fonts. Self-host them via `next/font` in production.
- Radii: cards 24px, inner panels 14–16px, buttons and chips fully round (999px).
- No gradients except the subtle dark ones behind the product mockups. No emoji, no stock images, no AI-looking glow effects.

## Responsive

- Max content width is 1200px, with 24px side padding.
- Every multi-column row uses flex-wrap with a flex basis (around 220–480px), so it stacks on phones. Keep that behaviour.
- On mobile the hero terminal card drops below the text, and the case-study mockups stack above or below their copy (Atlas uses `wrap-reverse` so its copy comes first).
- The H1 uses `clamp(44px, 6.4vw, 84px)`. Section H2s use `clamp(34px, 4vw, 52px)`.
- Header nav: on narrow screens, collapse it into a menu button or let it wrap. Never allow horizontal scroll.

## Accessibility

- Use real `<a>`/`<button>` elements, with touch targets of at least 44px.
- Decorative SVGs get `aria-hidden="true"`.
- Text contrast is at least 4.5:1. The muted grey `#A3A7AE` on `#0B0C0E` passes; don't go darker for body copy.
- Respect `prefers-reduced-motion` if you add any animation. The only animation idea worth doing is a blinking terminal cursor.

## Open items — ask Joao, do not invent

- `[STATUS]`: Atlas availability (internal tool, beta, or available). This affects the copy and CTA.
- `[YOUR EMAIL]`: the contact address.
- `[CLIENT OR PRODUCT]`: proof for the "Web platforms" capability.
- Confirm that Telltale is built in **Swift** (the chip says "Swift · native").
- **Client work**: the page currently shows only in-house products. Two or three client case studies (they can be anonymised) would strengthen it a lot. Leave the Work section easy to extend with more cards.
- Telltale isn't notarized yet. If it still isn't at launch, consider pointing "Download free" to the Telltale site instead of the direct `/download`.

Do not add stats, testimonials, client logos or team photos that Joao hasn't supplied.

## Real links

- Telltale site: https://telltaleapp.up.railway.app
- Telltale download: https://telltaleapp.up.railway.app/download

## Done when

- [ ] It matches `reference/index.html` at 1440px and stays clean at 390px.
- [ ] All colours, fonts and spacing come from tokens, with no stray hex values in components.
- [ ] EN and PT both work. PT copy can be a first pass, marked for Joao's review.
- [ ] It scores 95+ for Lighthouse accessibility and performance.
- [ ] Every open placeholder is either filled by Joao or still clearly visible, never silently guessed.
