/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				main: ['Poppins', 'sans-serif'],
				mono: ['Ubuntu Mono', 'monospace'],
				display: ['Clash Display', 'sans-serif'],
			  },
		},
	},
	plugins: [],
}
