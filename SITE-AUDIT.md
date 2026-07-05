# Archetype Site — Audit (findings & fixes)

> **This is the diagnostic reference, not a plan.** It records what the *current* Starlight site gets wrong, with evidence and the concrete fix for each — so the rebuild has the receipts and its Phase 0 has an exact quick-win list. **The plan lives in [`SITE-REDESIGN-ROADMAP.md`](./SITE-REDESIGN-ROADMAP.md).**
>
> **Reviewed:** 2026-07-05 (audit) · **Method:** the live site rendered at 1440px and 390px (light + dark), 8 screenshots, source read directly, then reviewed across six lenses (layout, content-rendering, typography/visual, IA/content, accessibility, performance/build). **39 findings.**
>
> Some findings are marked **↷ superseded** (the redesign's direction removes the need) or **↷ subsumed** (the rebuild handles it structurally). They're kept for the record.

---

## Two verification corrections (worth remembering)

- **Dark-mode contrast actually passes WCAG AA** (grey text ≈ 6.5–7.8:1). The accessibility debt is almost entirely in the **light theme** — which matters more now that the redesign makes light the default surface.
- **The deploy workflow's GitHub Actions are *not* on deprecated Node-20 runners** (current major versions). Only the Node *runtime* pin (`26`, floating) is worth revisiting.

---

## P0 — broken / blocking

| Finding | Evidence | Fix |
|---|---|---|
| **GFM tables render as raw pipe text in production** (roadmap + architecture pages) | 0 `<table>` in the deployed HTML (`\| Track \| Scope \|…`); a local `astro build` *does* render them — so GFM breaks only in the CI/Pages build, despite the lockfile pinning `remark-gfm@4.0.1` | Make GFM explicit and self-owned: add `remark-gfm` as a direct dep + `markdown: { remarkPlugins: [remarkGfm] }` in `astro.config.mjs`. **↷ subsumed:** the redesign turns status/roadmap into data-driven components, so only *prose* tables still need this. |
| **No link anywhere to the running application** | hero/sidebar/social all lack it | **↷ superseded:** the redesign is *deployment-agnostic* — the site must **not** center or link a specific instance. This finding does not apply to the new direction. |

## P1 — major

| Finding | Area | Fix |
|---|---|---|
| Content locked to ~720px on a 1440px window; dead band beside the TOC | all docs pages; no `--sl-content-width` set | `:root { --sl-content-width: 52rem }` (50–56rem) |
| Table CSS `overflow:hidden` + radius, no scroll wrapper → wide tables clip / force page-wide mobile scroll | `theme.css:155` | move chrome to a `display:block; overflow-x:auto` wrapper |
| Light-theme accent links fail WCAG 1.4.3 (~1.7:1) | `theme.css` light block never overrides `--sl-color-accent` | darken the accent for light mode. **Now central** — light is the redesign's default surface |
| Light theme reuses dark-palette greys → invisible tagline / faint TOC, search, toggle | `theme.css:28-41` | give light its own muted tokens |
| Architecture page states the wrong toolchain (**Poetry / npm**) | `architecture.mdx:14,22,32` | it's **uv / pnpm** (per CLAUDE.md); also "deploys to `gh-pages` branch" is stale (artifact-based now) |
| Overstated / stale claims: GraphQL SDKs, Jupyter, "2014 / 2025" framing | `overview.mdx:10-12` | trim to what's real |
| Google Fonts loaded via render-blocking `@import` (waterfall, FOUT, third-party/privacy) | `theme.css:1` | self-host (`@fontsource` or Astro fonts); also drop the unused `'IBM Plex Mono'` and add an emoji fallback |
| Landing still ships **Houston**, the default Astro mascot (799×799/98 KB into a ≤320px slot) | `index.mdx`, `houston.webp` | replace with bespoke/manuscript imagery via `<Image>` |
| No OpenGraph / social-share image | Starlight `head` config | add a branded OG card |
| Blockquotes fake Starlight's native callouts | `roadmap.mdx:28`, `index.mdx:22` | use `<Aside>`; reserve blockquote for real quotes |
| Missing action pages: Getting Started, API-docs link, Dataset, Screenshots/Demo | sidebar IA | **↷ subsumed** by the redesign IA |
| Reference content (Layer/Responsibilities, Track/Scope) better as components than markdown tables | architecture + roadmap | **↷ subsumed** — redesign uses cards/badges |

## P2 — polish

Emoji status markers with no emoji fallback font · hero H1 just repeats the wordmark · Twitter still points to `@DigiPalProject` · unattributed hero testimonial · no `prefers-reduced-motion` on card lifts · weak custom focus indicators · six overlapping `backdrop-filter: blur()` layers · CI pinned to a floating non-LTS Node 26 · splash prose runs to 110-char lines · excess trailing whitespace on the landing.

## P3 — nice-to-have

Full-bleed option for diagram/table pages · revisit global negative letter-spacing · a Home entry in the sidebar · verify header social icons meet the 24px tap-target minimum.

---

## What's already good — preserve these

- **Distinctive, non-templated type + palette** (Newsreader serif over Space Grotesk).
- **The custom architecture SVG** with genuinely descriptive alt text — a real asset.
- **A polished, responsive card system** (`FeatureCard.astro`) with proper `:focus-visible` and whole-card tap targets.
- **Solid dark-mode contrast** and colour-independent link affordance.
- **An honest, dated roadmap** that scopes speculative AI work as future rather than overclaiming.
- **Fast static architecture** — near-zero client JS; `sharp` already available for image optimization.
