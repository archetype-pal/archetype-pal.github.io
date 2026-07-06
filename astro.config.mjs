// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
	site: 'https://archetype-pal.github.io',
	// Ensure GFM (tables, etc.) is applied in every build environment, not left to
	// implicit/transitive resolution — which broke tables in the CI/Pages build.
	markdown: {
		remarkPlugins: [remarkGfm],
	},
	integrations: [
		starlight({
			title: 'Archetype',
			description:
				'An open platform for palaeography research, manuscript description, and IIIF-driven scholarship — for researchers, libraries, and museums.',
			// Default to light mode; the theme toggle still lets visitors switch to dark.
			head: [
				{
					tag: 'script',
					content:
						"try{if(!localStorage.getItem('starlight-theme')){localStorage.setItem('starlight-theme','light');document.documentElement.dataset.theme='light';}}catch(e){}",
				},
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/archetype-pal' }],
			customCss: ['./src/styles/theme.css'],
			sidebar: [
				{
					label: 'Platform',
					items: [
						{ label: 'Overview', slug: 'platform' },
						{ label: 'Architecture', slug: 'platform/architecture' },
						{ label: 'Search & Browse', slug: 'platform/search' },
						{ label: 'Imaging & IIIF', slug: 'platform/imaging' },
						{ label: 'Annotation & TEI', slug: 'platform/annotation' },
						{ label: 'Editorial Workflow', slug: 'platform/workflow' },
						{ label: 'Lightbox & Collections', slug: 'platform/lightbox' },
						{ label: 'Data Model', slug: 'platform/data-model' },
						{ label: 'Interoperability', slug: 'platform/interoperability' },
					],
				},
				{
					label: 'Project',
					items: [{ label: 'Roadmap', slug: 'roadmap' }],
				},
				{
					label: 'About',
					items: [
						{ label: 'Overview', slug: 'overview' },
						{ label: 'Community', slug: 'community' },
					],
				},
			],
		}),
	],
});
