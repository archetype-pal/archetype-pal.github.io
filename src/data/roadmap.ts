// Single source of truth for the platform's capability status.
// The Roadmap and "What's shipped" pages, and any status badge, all read from
// this file — so status is authored once and cannot drift between pages.
// It describes the CODEBASE's capabilities, never a specific deployment.
// Seeded from a verified audit of the product roadmaps against the source.

export type Maturity = 'shipped' | 'in-progress' | 'planned' | 'exploratory';

export interface Capability {
  id: string;
  area: string;
  maturity: Maturity;
  summary: string;
  /** For non-shipped work: what's coming. For shipped: notable follow-ups (optional). */
  detail?: string[];
  /** Link to the Platform page that describes it, where one exists. */
  platform?: string;
}

export const lastVerified = '2026-07-06';

export const maturityMeta: Record<
  Maturity,
  { label: string; blurb: string; order: number }
> = {
  'in-progress': { label: 'In progress', blurb: 'Partly shipped; more underway.', order: 0 },
  planned: { label: 'Planned', blurb: 'Designed; not yet built.', order: 1 },
  exploratory: { label: 'Exploratory', blurb: 'A research direction, not a committed feature.', order: 2 },
  shipped: { label: 'Shipped', blurb: 'Live in the platform today.', order: 3 },
};

export const capabilities: Capability[] = [
  {
    id: 'search',
    area: 'Search & Browse',
    maturity: 'shipped',
    summary: 'Faceted search across a whole collection by script, scribe, date, place and text, over purpose-built indexes.',
    platform: '/platform/search/',
  },
  {
    id: 'imaging',
    area: 'Imaging & IIIF',
    maturity: 'shipped',
    summary: 'Deep-zoom examination of high-resolution page images, served and described with IIIF Image & Presentation.',
    platform: '/platform/imaging/',
  },
  {
    id: 'annotation',
    area: 'Annotation & TEI',
    maturity: 'shipped',
    summary: 'Marking up glyphs and scribal features on the image, and linking transcription to the exact region on a TEI model.',
    platform: '/platform/annotation/',
  },
  {
    id: 'workflow',
    area: 'Editorial Workflow',
    maturity: 'shipped',
    summary: 'Moving transcriptions from draft to reviewed to published, with an attributed, dated audit trail.',
    platform: '/platform/workflow/',
  },
  {
    id: 'lightbox',
    area: 'Lightbox & Collections',
    maturity: 'shipped',
    summary: 'Persistent worksets, side-by-side comparison of hands, sticky notes and shareable views for research and teaching.',
    detail: ['Backlog: auto-save, main-canvas pinch-to-zoom, filter presets, workspace templates.'],
    platform: '/platform/lightbox/',
  },
  {
    id: 'data-model',
    area: 'Data Model',
    maturity: 'shipped',
    summary: 'The structured vocabulary a palaeographer works with: manuscripts, hands, glyphs, annotation graphs and TEI texts.',
    platform: '/platform/data-model/',
  },
  {
    id: 'interop',
    area: 'Interoperability & Standards',
    maturity: 'in-progress',
    summary: 'Standards-based export and import so the scholarship is portable and citable.',
    detail: [
      'Shipped: W3C Web Annotations (JSON-LD) and IIIF Presentation 3 export; TEI and HTR (PAGE-XML/ALTO) import.',
      'Next: a reverse W3C-annotation → graph import path.',
      'Next: a IIIF Collection endpoint spanning multiple manuscripts.',
    ],
    platform: '/platform/interoperability/',
  },
  {
    id: 'stats-qc',
    area: 'Annotation statistics & quality control',
    maturity: 'planned',
    summary: 'Give editorial teams a view of coverage and consistency across a corpus.',
    detail: [
      'Coverage reporting per manuscript and per hand.',
      'Per-annotator statistics and activity.',
      'A supervisor review step and a quality-control queue.',
    ],
  },
  {
    id: 'realtime',
    area: 'Real-time collaboration',
    maturity: 'planned',
    summary: 'Let multiple editors work the same material without collisions.',
    detail: ['A websocket layer to broadcast and merge live annotation edits.'],
  },
  {
    id: 'observability',
    area: 'Observability & operations',
    maturity: 'planned',
    summary: 'Make an instance easy to run reliably in production.',
    detail: ['OpenTelemetry tracing, aggregate dashboards, and on-call documentation.'],
  },
  {
    id: 'ai',
    area: 'AI-assisted palaeography',
    maturity: 'exploratory',
    summary: 'A future, grant-funded research direction — with the scholar always the author of record.',
    detail: [
      'Today the platform imports externally-produced HTR transcriptions only; it runs no recognition model.',
      'Research directions: handwriting recognition, scribe attribution, and computational dating — every machine suggestion routed through the editorial review workflow.',
    ],
  },
];
