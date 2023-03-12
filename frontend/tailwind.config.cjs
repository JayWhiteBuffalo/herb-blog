/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: { 
			colors: {
				"primary" : "#4f5d2f",
				"secondary" : "#84a59d",
				"tertiary" : "#70566d",
				"light" : "#ffffff",
				"light2" : "#ffffd0",
				"dark" : "#071013",
			},
			fontSize: {
				'body-lg': '1rem',
				'body': '.875rem',
			  },
		},
	},
	plugins: [],
}
