# Archetype Starlight Site

This repo powers the documentation and marketing site for Archetype (the modern rebuild of DigiPal). It is built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) so we can mix landing-page messaging with long-form documentation in a single codebase.

## What’s inside

- `src/content/docs/` — MDX pages for the Overview, Architecture, Roadmap, and Community sections.
- `src/content/docs/index.mdx` — the splash page/landing experience.
- `astro.config.mjs` — defines navigation, metadata, and social links.
- `public/` & `src/assets/` — static assets (favicons, logos, diagrams).

## Getting started

```bash
npm install        # once, to install dependencies
npm run dev        # starts the dev server at http://localhost:4321
npm run build      # outputs a production bundle to dist/
npm run preview    # serves the dist/ build locally
```

Starlight automatically turns every `.md`/`.mdx` file in `src/content/docs/` into a route. Create new docs by copying one of the existing files and updating the frontmatter.

## Writing & style notes

- Cite historic DigiPal blog posts with inline Markdown links so readers can trace the scholarship.
- Prefer short sections with lists or tables—every page should skim well for busy researchers.
- The landing page (`index.mdx`) is designed for marketing copy, but deeper details belong in the individual docs.

## Deploying to GitHub Pages

1. Set the `site`/`base` options in `astro.config.mjs` to match the final Pages URL (e.g. `https://archetype-pal.github.io/archetype-site`).
2. Run `npm run build` to generate the `dist/` folder.
3. Publish `dist/` to the `gh-pages` branch (either via `npx astro deploy --site <url>` or a GitHub Actions workflow that uploads the artifact).
4. Enable GitHub Pages for the repo and point it at the `gh-pages` branch (or `docs/` folder if you prefer).

Once deployed, pushes to `main` can trigger Actions to rebuild and publish automatically.
