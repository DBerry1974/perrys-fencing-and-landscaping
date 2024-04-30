/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"brand-primary": "#7A8183",
				"brand-secondary": "#A6AAAB",
				"brand-dark-green": "#3F5917",
			  },
		},
	},
	plugins: [],
}
 