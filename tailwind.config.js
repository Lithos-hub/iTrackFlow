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
				primary: '#5b9be6',
				secondary: '#ec4d94',
				tertiary: '#e98e87',
				dark: '#202020',
				darker: '#101010',
				softdark: '#272829',
				success: '#429867',
				info: '#70e7ff',
				warning: '#fab243',
				danger: '#fc5956',
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
				pattern: /w-\[\d+px\]/,
			},
			{
				pattern: /h-\[\d+px\]/,
			},
			{
				pattern: /after:w-\[\d+px\]/,
			},
			{
				pattern: /after:h-\[\d+px\]/,
			},
			{
				pattern:
					/^(bg|text|border|ring)-(slate|gray|zinc|neutral|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-)?(100|200|300|400|500|600|700|800|900)?$/,
			},
			{
				pattern:
					/^(before:bg|before:text|before:border|before:ring)-(slate|gray|zinc|neutral|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-)?(100|200|300|400|500|600|700|800|900)?$/,
			},
			{
				pattern:
					/^(after:bg|after:text|after:border|after:ring)-(slate|gray|zinc|neutral|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-)?(100|200|300|400|500|600|700|800|900)?$/,
			},
		],
	},
	darkMode: 'class',
};
