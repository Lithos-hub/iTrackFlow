/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 */
module.exports = {
	content: [],
	theme: {
		screens: {
			touch: { raw: 'hover: none' },
			'can-hover': { raw: 'hover: hover' },
			xxs: '380px',
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1920px',
			'4xl': '2560px',
			'5xl': '3840px',
		},
		extend: {
			colors: {
				primary: '#5B9BE6',
				secondary: '#EC4D94',
				tertiary: '#E98E87',
				dark: '#101010',
				success: '#3bb273',
				info: '#5438dc',
				warning: '#ef7b45',
				danger: '#ef233c',
			},
			flex: {
				2: '2 2 0%',
				3: '3 3 0%',
			},
		},
	},
	resolve: {
		safelist: [
			{
				pattern: /col-(span|start|end)-\d+/,
			},
			{
				pattern: /row-(span|start|end)-\d+/,
			},
			{
				pattern: /grid-(cols|rows)-\d+/,
			},
			{
				pattern:
					/^(bg|text|border|ring)-(slate|gray|zinc|neutral|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-)?(100|200|300|400|500|600|700|800|900)?$/,
			},
		],
	},
	darkMode: 'class',
};
