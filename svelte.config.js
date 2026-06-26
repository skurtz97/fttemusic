import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { resolve } from 'path';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { 
		adapter: adapter({
			runtime: 'nodejs24.x'
		}),
	},
	preprocess: [
		mdsvex({
			extensions: ['.svx'],
			layout: {
				songs: resolve('./src/routes/songs/+layout.svelte')
			}
		})
	],
	extensions: [
		'.svelte', 
		'.svx',
	]
};

export default config;