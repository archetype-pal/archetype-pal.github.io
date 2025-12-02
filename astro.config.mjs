// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://archetype-pal.github.io',
	integrations: [
		starlight({
			title: 'Archetype',
			description:
				'A modern, open platform for palaeography research, manuscript description, and IIIF-driven storytelling.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/archetype-pal' },
				{ icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/DigiPalProject' },
			],
			sidebar: [
				{
					label: 'About Archetype',
					items: [
						{ label: 'Overview', slug: 'overview' },
						{ label: 'Architecture', slug: 'architecture' },
						{ label: 'Roadmap', slug: 'roadmap' },
						{ label: 'Community', slug: 'community' },
					],
				},
			],
		}),
	],
});
