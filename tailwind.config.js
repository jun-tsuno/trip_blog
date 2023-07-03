const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: {
					pink: '#FF8B8B',
					blue: '#75CAD6',
					'light-blue': '#C0DBEA',
					green: '#98D8AA',
				},
				secondary: {
					pink: '#FBEFED',
					navy: '#3C486B',
					'off-white': '#FFFBF5',
					'light-gray': '#F5F4F4',
					'mid-gray': '#CFD2CF',
					'dark-gray': '#413F42',
					'pastel-pink': '#F3A5BC',
					'pastel-green': '#A7DB8C',
					'pastel-blue': '#A0D8E9',
					'pastel-purple': '#B4A7EB',
					'pastel-orange': '#FFDFD3',
					'pastel-yellow': '#E5E28B',
					'pastel-gray': '#A0D8E9',
				},
			},
			fontFamily: {
				titillium: ['Titillium Web', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
