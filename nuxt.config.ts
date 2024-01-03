// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
		'@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org
		'nuxt-icon', // https://github.com/nuxt-modules/icon | https://icones.js.org/collection/all?s=github
		'@vueuse/nuxt', // https://vueuse.org/guide/#nuxt
		'@morev/vue-transitions/nuxt', // https://github.com/MorevM/vue-transitions
		'@nuxt/image', // https://image.nuxt.com
		'@nuxtjs/color-mode', // https://color-mode.nuxtjs.org
		'@nuxtjs/eslint-module',
		'@vueuse/nuxt',
		'@nuxtjs/i18n',
	],
	typescript: {
		tsConfig: {
			compilerOptions: {
				moduleResolution: 'bundler',
			},
		},
	},
	nitro: {
		compressPublicAssets: true,
		routeRules: {
			// "/_nuxt/**": { headers: { "cache-control": "max-age=31536000" } }, // Set generated files cache to 1 year
		},
	},
	runtimeConfig: {
		public: {
			baseURL: '',
		},
	},
	vite: {
		plugins: [eslintPlugin()],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/css/utils/global.scss";',
				},
			},
		},
	},
	css: ['~/assets/css/main.scss'],
	tailwindcss: {
		exposeConfig: true,
	},
	eslint: {
		lintOnStart: false,
	},
	i18n: {
		vueI18n: './i18n.config.ts',
	},
	colorMode: {
		classSuffix: '',
	},
});
