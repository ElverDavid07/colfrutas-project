/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				berkshire: "'Berkshire Swash', cursive",
				rubik: "'Rubik', sans-serif",
				passionOne:"'Passion One', cursive",
				kanit:"'Kanit', sans-serif"
			},
			colors: {
				base: "#f6f6f6",
				primary: "#912F72",
			},
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('tailwind-scrollbar')({ nocompatible: true })
	],
}