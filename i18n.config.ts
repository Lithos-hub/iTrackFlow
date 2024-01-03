import en from '@/assets/locales/en.json';
import es from '@/assets/locales/es.json';

export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'es',
	messages: {
		en,
		es,
	},
}));
