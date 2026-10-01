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

export const lastVerified = '2026-10-01';

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
    platform: '/researchers/search/',
  },
  {
    id: 'imaging',
    area: 'Imaging & IIIF',
    maturity: 'shipped',
    summary: 'Deep-zoom examination of high-resolution page images, served and described with IIIF Image & Presentation.',
    platform: '/researchers/imaging/',
  },
  {
    id: 'annotation',
    area: 'Annotation & TEI',
    maturity: 'shipped',
    summary: 'Marking up glyphs and scribal features on the image, and linking transcription to the exact region on a TEI model.',
    detail: [
      'Follow-ups: a jump to unlinked passages, a confirm step before a drawn link is saved, and an inline @subtype axis in the TEI editor.',
    ],
    platform: '/researchers/annotation/',
  },
  {
    id: 'descriptions',
    area: 'Manuscript descriptions',
    maturity: 'shipped',
    summary: 'Structured TEI msDesc descriptions authored in the backoffice, rendered on the public manuscript page and searchable by facet.',
    detail: ['Deferred to a later version: RNG/Schematron schema validation.'],
    platform: '/researchers/annotation/',
  },
  {
    id: 'workflow',
    area: 'Editorial Workflow',
    maturity: 'shipped',
    summary: 'Moving transcriptions from draft to reviewed to published, with an attributed, dated audit trail.',
    detail: ['Next: a reviewer-assignee picker — the API already records an assignee; only the control to set it is missing.'],
    platform: '/researchers/workflow/',
  },
  {
    id: 'lightbox',
    area: 'Lightbox & Collections',
    maturity: 'shipped',
    summary: 'Persistent worksets, side-by-side comparison of hands, sticky notes and shareable views for research and teaching.',
    detail: [
      'Backlog: filter presets, workspace templates, freeform crop, px↔mm measurement calibration, richer image notes, offline use.',
    ],
    platform: '/researchers/lightbox/',
  },
  {
    id: 'data-model',
    area: 'Data Model',
    maturity: 'shipped',
    summary: 'The structured vocabulary a palaeographer works with: manuscripts, hands, glyphs, annotation graphs and TEI texts.',
    platform: '/researchers/data-model/',
  },
  {
    id: 'collection-admin',
    area: 'Collection management',
    maturity: 'shipped',
    summary: 'A staff backoffice for the corpus itself: resumable image upload per item part, served as lossless JP2 over IIIF; moving an image to another item part; and per-language site labels for project-specific copy such as the home page.',
    detail: ['Not yet: a sub-folder chooser and semi-automatic bulk assignment of uploads to item parts.'],
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
    platform: '/researchers/interoperability/',
  },
  {
    id: 'stats-qc',
    area: 'Annotation statistics & quality control',
    maturity: 'planned',
    summary: 'Give editorial teams a view of coverage and consistency across a corpus.',
    detail: [
      'Coverage reporting per manuscript and per hand.',
      'Per-annotator statistics and activity.',
      'An optional, off-by-default supervisor review step and quality-control queue.',
    ],
  },
  {
    id: 'ai',
    area: 'AI-assisted palaeography',
    maturity: 'exploratory',
    summary: 'A future, grant-funded research direction — with the scholar always the author of record.',
    detail: [
      'Today the platform imports externally-produced HTR transcriptions only; it runs no recognition model.',
      'Not part of the released platform: the programme depends on grant funding. A phased design exists, and exploratory work is kept on a separate branch.',
      'Research directions: handwriting recognition, scribe attribution, and computational dating — every machine suggestion routed through the editorial review workflow.',
    ],
  },
];
