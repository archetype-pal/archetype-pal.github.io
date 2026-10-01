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
	// Old URLs from before the site was organised by audience.
	redirects: {
		'/platform': '/researchers/',
		'/platform/search': '/researchers/search/',
		'/platform/imaging': '/researchers/imaging/',
		'/platform/annotation': '/researchers/annotation/',
		'/platform/workflow': '/researchers/workflow/',
		'/platform/lightbox': '/researchers/lightbox/',
		'/platform/data-model': '/researchers/data-model/',
		'/platform/interoperability': '/researchers/interoperability/',
		'/platform/architecture': '/contributors/architecture/',
		'/about/palaeography': '/researchers/palaeography/',
		'/contribute': '/contributors/',
		'/contribute/architecture': '/contributors/codebase/',
		'/contribute/workflow': '/contributors/workflow/',
		'/deploy': '/contributors/local-setup/',
		'/deploy/configuration': '/contributors/configuration/',
		'/deploy/corpus': '/contributors/corpus/',
		'/deploy/production': '/contributors/production/',
		'/deploy/troubleshooting': '/contributors/troubleshooting/',
		'/api': '/contributors/api/',
		'/api/resources': '/contributors/api-endpoints/',
		'/roadmap': '/funders/roadmap/',
		'/status': '/funders/status/',
	},
	integrations: [
		starlight({
			title: 'Archetype',
			description:
				'An open platform for palaeography: search, view, annotate and compare manuscript images and the texts they carry.',
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
					label: 'For researchers',
					items: [
						{ label: 'Start here', slug: 'researchers' },
						{ label: 'Palaeography on Archetype', slug: 'researchers/palaeography' },
						{ label: 'Search & browse', slug: 'researchers/search' },
						{ label: 'Images & IIIF', slug: 'researchers/imaging' },
						{ label: 'Annotation & TEI', slug: 'researchers/annotation' },
						{ label: 'Editorial workflow', slug: 'researchers/workflow' },
						{ label: 'Lightbox & worksets', slug: 'researchers/lightbox' },
						{ label: 'Data model', slug: 'researchers/data-model' },
						{ label: 'Export, reuse & cite', slug: 'researchers/interoperability' },
					],
				},
				{
					label: 'For contributors',
					items: [
						{ label: 'Start here', slug: 'contributors' },
						{ label: 'Run it locally', slug: 'contributors/local-setup' },
						{ label: 'How it is built', slug: 'contributors/architecture' },
						{ label: 'Working in the codebase', slug: 'contributors/codebase' },
						{ label: 'Contribution workflow', slug: 'contributors/workflow' },
						{
							label: 'Host an instance',
							items: [
								{ label: 'Production deployment', slug: 'contributors/production' },
								{ label: 'Configuration', slug: 'contributors/configuration' },
								{ label: 'Load your own corpus', slug: 'contributors/corpus' },
								{ label: 'Troubleshooting', slug: 'contributors/troubleshooting' },
							],
						},
						{
							label: 'API',
							items: [
								{ label: 'The API', slug: 'contributors/api' },
								{ label: 'Endpoints', slug: 'contributors/api-endpoints' },
							],
						},
					],
				},
				{
					label: 'For funders',
					items: [
						{ label: 'Start here', slug: 'funders' },
						{ label: 'What works today', slug: 'funders/status' },
						{ label: 'Roadmap & priorities', slug: 'funders/roadmap' },
						{ label: 'Governance & sustainability', slug: 'funders/governance' },
					],
				},
				{
					label: 'About',
					items: [
						{ label: 'About Archetype', slug: 'about' },
						{ label: 'From DigiPal to Archetype', slug: 'about/lineage' },
						{ label: 'Community & help', slug: 'about/community' },
					],
				},
			],
		}),
	],
});
