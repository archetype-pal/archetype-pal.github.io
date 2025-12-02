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

This repo ships with `.github/workflows/deploy.yml`, a GitHub Actions workflow that builds the site and deploys it to Pages whenever `main` changes.

1. Ensure the `site` field in `astro.config.mjs` matches the final URL (it is already set to `https://archetype-pal.github.io`).
2. In the GitHub UI, go to **Settings → Pages** and select **GitHub Actions** as the source (the first deploy will publish automatically after the workflow finishes).
3. Push to `main` or click **Run workflow** from the Actions tab. The CI job runs `npm ci`, `npm run build`, and uploads `dist/` as the Pages artifact.
4. Monitor the “Deploy Starlight site to GitHub Pages” workflow for success; the deployment summary lists the live URL.

If you prefer manual deployment, you can still run `npm run build` locally and publish the `dist/` folder with `npx astro deploy --site <url>`, but the automated workflow keeps `main` as the single source of truth.
