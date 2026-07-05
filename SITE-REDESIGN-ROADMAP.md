# Archetype Site — From-the-Roots Redesign

> **This is the single plan for the site.** It rethinks the *idea* of the site from the roots — not a list of fixes. Its companion is [`SITE-AUDIT.md`](./SITE-AUDIT.md), the diagnostic evidence about the *current* site (findings + concrete fixes) that Phase 0 draws its quick-wins from. **Date:** 2026-07-05 · **Revised:** 2026-07-06.
>
> **Method:** four independent from-the-roots concepts were generated (Diátaxis-first, Two-Doors-by-audience, OSS-platform model, Status-led hub) and judged from three lenses (developer-hub, stakeholder-clarity, static-Starlight feasibility). The synthesis was then **refined by owner feedback** into the direction below: **stakeholder-first**, no homepage counter, and a **formal** design language.
>
> **A working prototype of the homepage exists** (light-default, formal) — see “Prototype” in §3.

---

## 1. First principles

**Why this site exists.** Archetype is an open-source *codebase* — a modern rebuild of the DigiPal framework that any institution can deploy to run a palaeography platform over **its own** manuscript corpus. The site is the canonical home of that codebase. It serves two audiences, **stakeholders first**:

1. **Stakeholders (primary): academic researchers, professors, libraries, museums, and funding bodies** — who need to understand what the platform *is*, what it does today, and where it's headed.
2. **Developers / self-hosters (secondary)** — who want to deploy it over their own corpus, use the API, and contribute.

The two are served by one coherent site that shares a common **Platform** spine; the *homepage and top-level framing lead stakeholder-first*, and developer material sits one level in.

**Hard constraints (decided, non-negotiable):**

- **Deployment-agnostic / instance-decoupled.** The site documents the *code*, generically. It must be true for *every* deployment. It does **not** link to, embed, depend on, or center any specific running instance.
- **No live data, no app integration.** Static content only.
- **Static site on GitHub Pages; stays on Astro + Starlight.** The rethink is about *information architecture, content model, positioning, and visual language* — not the framework. (Starlight is the correct engine for a two-audience documentation hub; a custom or dynamic rebuild would reinvent its search/nav/versioning/a11y for no benefit, because there's no live data to justify it.)

**Non-goals (things this site is explicitly NOT):** a marketing funnel; a showcase for the "Models of Authority" dataset; a front door to a hosted product; a DigiPal-nostalgia blog; **a status scoreboard** (progress counters belong on the roadmap page, not the homepage).

**What "good" looks like:** a professor, librarian, or funder grasps *what Archetype is, what it does today, and its credibility* within one screen — in a register that reads as scholarly and institutional; a developer can still get from *curious → running their own instance → contributing* without friction; and **nothing on the site goes stale silently or assumes a deployment that isn't yours.**

---

## 2. The core reframe

The current site inherited its shape from the Astro starter and a marketing brief. Root-level, that shape is wrong for the jobs above.

| | Today (inherited) | The rethink |
|---|---|---|
| **What it is** | A marketing "About" site for the *Models of Authority* instance | The canonical hub for the *Archetype platform*, for a scholarly audience |
| **Primary reader** | Undifferentiated | **Stakeholders** — researchers, libraries, museums, funders (developers second) |
| **Subject** | One dataset + one production app | The platform, generically — bring your own corpus |
| **Homepage** | Hero pitch + Houston mascot + "See the vision" | **What the platform does today** — a scholarly capabilities showcase + a credibility panel |
| **Progress framing** | — | Roadmap is a **linked destination** for goals & upcoming work — **not a counter on the homepage** |
| **Roadmap/status source** | Prose + emoji baked in markdown tables (broken in prod) | **Data-driven** components from one source of truth (surfaced on the Roadmap page) |
| **Visual register** | Amber-on-dark "aurora", reads tech-product | **Formal, light-default academic-press** — ivory paper, ink serif, a single claret accent |
| **DigiPal** | The organizing narrative | A *lineage/scholarship* section (the code's origin & method) |
| **Live instance** | Centered; "See the vision" / (Improvement-Roadmap even said "link the live app") | **Removed** — deployment-agnostic; that earlier item is reversed |

---

## 3. The concept — "An open platform for manuscript scholarship"

A **stakeholder-first project hub on a conventional OSS-docs skeleton.** Three ideas, fused, then tuned to a scholarly audience:

- **Lead with what it does today (for scholars).** The homepage is a calm, credible showcase of the platform's *present* capabilities, framed by scholarly value — not a status board and not a pitch.
- **A familiar docs tree underneath (for developers).** Get Started / Guides / Reference / Contribute, so self-hosters navigate natively with zero "metaphor tax." Low content-rot, conventional.
- **Doc-type discipline within** (Diátaxis) — every docs page declares its type (tutorial / how-to / reference / explanation) and never mixes teaching with looking-up — *without* the literal 4-quadrant navigation or its sprawl.

**Identity line:** *"An open platform for palaeography — read the hands of the past."*
Subhead: *"Archetype lets scholars search, view, annotate, and teach with manuscript images and the texts they carry — built for researchers, libraries, and museums."*

### The homepage (as prototyped)
1. **Scholarly hero** — the identity line + a plain subhead naming the audience. No mascot, no instance CTA, no testimonial, **no progress counter**.
2. **A credibility panel** (what a funder/library weighs): *open source · standards-based (IIIF, TEI, W3C) · your collection stays yours · rooted in fifteen years of DigiPal scholarship.*
3. **"What it does today"** — a curated capabilities showcase (Search the corpus · Examine every stroke · Annotate the hand · Describe hands & scribes · Tie text to image · Compare hands side by side · Edit with an audit trail · Publish to standards · Teach and share), each framed by scholarly value, **no status badges or counts**.
4. **"The road ahead"** — a short prose band describing upcoming goals with a **link to the roadmap**. The roadmap, not the homepage, carries the detail.
5. **Two lanes** — *Researchers & institutions* (primary) and *Developers* — routing without splitting the site.
6. **"Under the hood"** — the preserved architecture diagram, demoted and presented as an academic **Fig. 1** plate for the technically curious.

> **Prototype.** A self-contained, light-default, formal prototype of this homepage has been built (real inlined brand fonts, working light/dark toggle, verified responsive in both themes). It supersedes the earlier dark "status-board" mock. Treat it as the visual reference for the rebuild.

---

## 4. Information architecture (the new site map)

Stakeholder-facing sections lead; developer sections follow; both **share** the Platform spine. Home = the capabilities showcase.

```
Home ──────────────  what the platform does today + credibility + road-ahead link

PLATFORM  (what it does — stakeholder-facing, shared with developers)
 ├─ Platform Overview     the capability domains at a glance
 ├─ Architecture          the custom SVG (Fig. 1) + layer breakdown
 ├─ Search & Browse · Imaging & IIIF · Annotation & TEI
 ├─ Editorial Workflow · Lightbox & Collections
 ├─ Data Model            manuscripts, item-parts, hands/scribes, symbols, graphs, TEI texts
 └─ Interoperability      W3C Web Annotations (JSON-LD), IIIF, TEI

ROADMAP & PROJECT  (goals and direction — where progress/status lives, off the homepage)
 ├─ Roadmap               upcoming features & goals, grouped by theme (data-driven, dated)
 ├─ What's shipped        an honest capabilities/status view for those who want it
 ├─ Changelog & Releases  what landed, when
 └─ Decisions (ADRs)      context / decision / status / consequences

RESEARCH & SCHOLARSHIP  (academic audience)
 ├─ Palaeography on Archetype   glyphs, allographs, hands, scribes — the DigiPal method
 ├─ Standards & interoperability   why IIIF, TEI, W3C
 ├─ From DigiPal to Archetype      lineage & continuity
 └─ How to cite · Publications

DOCS — GET STARTED & GUIDES  (developers/self-hosters — tutorial + how-to)
 ├─ Quickstart (Docker Compose) · Requirements
 ├─ Bring Your Own Corpus · Configuration · Search Index Ops
 └─ Production Hardening · Upgrades · Troubleshooting

REFERENCE & API  (integrators — reference-first, generic /api/v1/docs)
 ├─ REST API (auth, core resources, search, IIIF, exports) · OpenAPI/Swagger
 └─ Configuration reference · Command reference · Service topology

CONTRIBUTE & ABOUT
 ├─ Repository layout · Local dev · Architecture guardrails · Testing & CI · Good first issues
 └─ Project principles · Governance · License · Getting help · Code of conduct
```

Roughly ~35 pages — held near the OSS-platform scale, **not** a ~50-page Diátaxis sprawl. Top-nav order leads stakeholder-first (Platform · Roadmap · Research · Docs · About); the left sidebar context-switches per section; Starlight/Pagefind search spans everything.

---

## 5. The roadmap/status engine (the maintainable mechanism)

The single-source-of-truth idea survives — but it now feeds the **Roadmap page**, not a homepage counter.

**Single source of truth:** a Starlight content collection, `src/content/status/*.yaml`, one entry per capability:

```yaml
# src/content/status/search.yaml
domain: Search & Browse
maturity: shipped            # shipped | in-progress | planned | exploratory
summary: Registry-driven Meilisearch adapters with faceted browse.
track: ROADMAP.md#search     # provenance in the product roadmaps
last_verified: 2026-07-06
platform_page: /platform/search/
```

**What reads from it:** the **Roadmap** page (goals & upcoming, grouped and dated), the "What's shipped" view, and per-capability **status badges** *on the Platform pages* — all via `getCollection('status')`. The **homepage does not** render counts or a maturity board; its capability showcase is curated present-tense content. Consequences:

- **Authored once, cannot drift** between pages; no emoji-in-markdown-tables to keep in sync.
- **Deployment-agnostic by construction** — it describes *code capabilities*, never a deployment.
- **The P0 table bug is gone** — status/roadmap render as data-driven components, so there is no GFM markdown-table surface to break in the CI build. (The `remark-gfm` fix from the improvement roadmap is still worth doing for *prose* tables.)
- **Seeded from work already done** — the verified audit (136 shipped / 22 partial / 124 planned across the product roadmaps) becomes the initial data, with a "how we assess status" note so the roadmap stays *auditable*.

Optional follow-on: a small CI check that flags a `last_verified` older than N days, so the roadmap can't quietly rot.

---

## 6. Content model & editorial rules

- **Docs pages** carry frontmatter `type: tutorial | how-to | reference | explanation` and a visible type badge. A page that mixes teaching and looking-up gets split. (Diátaxis *discipline*, not Diátaxis navigation.)
- **Roadmap/status pages** are a first-class type Diátaxis doesn't cover, driven by the status collection.
- **Cross-cutting tags:** `audience` (stakeholder | developer), `service` (api | frontend | infrastructure | search | imaging), `maturity`.
- **One hard rule:** every capability claim is *deployment-agnostic*, *dated*, and *traceable to the codebase* — honest state, never aspiration dressed as fact.

---

## 7. Design language — formal, light-default (a deliberate departure)

> This **supersedes** the earlier "preserve the amber-on-dark aurora" guidance. Per owner direction, the visual register moves to something formal and institutional, suited to professors, libraries, museums, and funders. Light is the default; dark is an opt-in toggle.

**The system (as prototyped):**
- **Light by default, with an in-page light/dark toggle** (persisted). No auto-dark.
- **Palette:** warm **ivory paper** + **warm-ink** text; a single disciplined **claret / rubric-red** accent (grounded in manuscript rubrication; reads as academic prestige, not tech-product amber). A matching **formal charcoal** dark mode — not a navy aurora.
- **Typography:** **Newsreader** serif carries headings *and* leads/intros (editorial-journal register); **Space Grotesk** for labels, nav, and UI; a mono only for incidental build metadata.
- **Restraint over glow:** flat paper (no radial aurora), **hairline borders and short accent rules** as the structural motif, minimal shadow, generous whitespace.
- **The architecture diagram** stays as an intentional dark **"Fig. 1"** plate — an academic-figure convention — rather than a clashing block.

**Preserve from the current site:** the Newsreader / Space-Grotesk pairing, the custom architecture SVG, the card/component discipline. **Change:** the amber-on-dark identity → the formal light system above; bare emoji-in-headings → **Badge** components; Houston mascot → removed; narrow 720px column → wider measure; render-blocking Google-Fonts `@import` → self-hosted; missing OG image → added. *The exact fixes for these live in [`SITE-AUDIT.md`](./SITE-AUDIT.md) — and light-theme contrast is now central, since light is the default.*

---

## 8. What we kill

- **The amber-on-dark "aurora" as the site's identity** → formal light-default ivory/claret.
- **A progress counter / status scoreboard on the homepage** → capabilities-today on the homepage; counts live on the roadmap page.
- **Developer-first framing** → stakeholder-first; developer docs one level in.
- **"Models of Authority" as the subject** → at most one *example* corpus.
- **Every link/CTA to a specific live instance** (`archetype.elghareeb.space`) and all "our production instance" framing. *(This explicitly reverses the Improvement-Roadmap's "link the live app" item.)*
- **The Houston mascot** and the placeholder hero; **the marketing-continuity hero** ("Rebuilding fifteen years…") and "See the vision"; **the unattributed testimonial**.
- **VisigothicPal / ScandiPal / SephardiPal as "our showcases"**, and DigiPal-blog continuity as the organizing narrative → lineage moves to the Research section.
- **Stale/false claims:** GraphQL SDKs, Jupyter notebooks, "perfect for 2014 / brittle for 2025", the Poetry/npm toolchain (it's uv/pnpm); the stale @DigiPalProject Twitter link.
- **The flat 5-page structure** and "this docs site doubles as the marketing landing" framing.
- **Raw GFM markdown tables for status/roadmap** → data-driven components.

---

## 9. Migration roadmap (phased)

- **Phase 0 — Foundations (½–1 day).** Lock the concept + the formal design tokens (light-default, ivory/claret, serif-forward). Scaffold the `status` content collection + Badge component. Land the still-relevant build fixes — GFM config for prose tables, `--sl-content-width`, remove Houston + instance links, self-host fonts, light-theme contrast — **exact fixes in [`SITE-AUDIT.md`](./SITE-AUDIT.md)**.
- **Phase 1 — Stakeholder homepage + Platform (2–4 days).** Build the homepage from the prototype (hero, credibility panel, capabilities-today showcase, road-ahead link, two lanes, Fig. 1 plate) and the **Platform** capability/subsystem pages — the shared, stakeholder-facing spine. **Biggest audience value, first.**
- **Phase 2 — Roadmap & Project (1–2 days).** Author `src/content/status/*.yaml` from the verified audit; build the Roadmap (goals & upcoming), the "What's shipped" view, changelog, and ADR log — all data-driven.
- **Phase 3 — Docs · Reference/API · Contribute (4–6 days).** The tutorial/how-to/reference content that makes self-hosting real — the largest content lift, and what the current site most lacks.
- **Phase 4 — Research & About + polish (1–2 days).** Palaeography primer, lineage, standards, how-to-cite, governance; final a11y (light-theme contrast), OG image, reduced-motion, badge polish.

**Existing content → new homes:** `overview.mdx` splits into Platform Overview + About/Principles + Research/Lineage (marketing framing dropped); `architecture.mdx` → Platform/Architecture (SVG kept as Fig. 1, toolchain fixed); `roadmap.mdx` → generated from status data (Roadmap page); `community.mdx` → Contribute + About.

---

## 10. How this relates to the audit

[`SITE-AUDIT.md`](./SITE-AUDIT.md) is **diagnostic evidence, not a competing plan** — the findings and concrete fixes for the *current* site. This plan draws on it (Phase 0's quick-wins come straight from it), with three of its findings reframed by this direction:
1. **"Link the live app" is superseded** — deployment-agnostic; the site must not center an instance.
2. **The table fixes change shape** — status/roadmap become components; only *prose* tables still need the `remark-gfm` fix.
3. **Light-theme contrast rises to P1** — light is now the default surface.

There is one plan (this document) and one audit (the evidence behind it) — not two roadmaps.

---

## 11. Alternatives considered (why this synthesis)

| Concept | Verdict |
|---|---|
| **Status-led hub** | Won stakeholder + feasibility; its single-source-of-truth mechanism is kept — but relocated to the Roadmap page, since the owner ruled out a homepage counter. |
| **OSS-platform model** | Won developer-hub; its conventional docs tree is the load-bearing skeleton, now *below* the stakeholder-facing surface. |
| **Two-doors by audience** | Contributed the "two lanes" affordance (kept) — but a hard split risks two disconnected sites, so it's an affordance, not the structure. |
| **Diátaxis-first** | Best doc-type rigor (kept as *discipline within*) — but its literal 4-quadrant nav confuses stakeholders and sprawls, so it's not the navigation. |

*Owner feedback then tuned the synthesis: stakeholder-first, no homepage counter, and a formal light-default visual language.*

---

## 12. Decisions & open questions

**Settled:** stakeholder-first positioning · roadmap linked (no homepage counter) · formal light-default design (ivory/claret, serif-forward) · keep Starlight · deployment-agnostic.

**Open:**
1. **Appetite** — full phased rebuild, or start with Phase 0–1 (formal tokens + stakeholder homepage + Platform) as a high-value first slice and evaluate?
2. **Accent** — confirm **claret/rubric-red** as the accent (the prototype's choice), or explore an alternative formal palette (e.g. deep ink-navy, or claret + a restrained gold-leaf second accent).
3. **Roadmap upkeep** — manual re-verification each release, or build the CI freshness check (and/or a script that re-runs the codebase audit to regenerate the status data)?
4. **Versioning** — Starlight's versioned docs (per release), or single "latest" for now?
