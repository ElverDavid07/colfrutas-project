/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				nunito: "'Nunito', sans-serif",
				berkshire: "'Berkshire Swash', cursive",
				kanit: "'Kanit', sans-serif",
				lora:"'Lora', serif;"
			},
			colors: {
				base: "#f6f6f6",
				primary:"#912F72"
				

			},
		},
	},
	plugins: [],
}