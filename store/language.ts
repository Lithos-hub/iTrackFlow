import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', () => {
	const lang = ref('es');
	const { locale } = useI18n();

	const toggleLanguage = () => {
		lang.value = lang.value === 'en' ? 'es' : 'en';
		localStorage.setItem('language', lang.value);
		locale.value = lang.value;
	};

	onMounted(() => {
		lang.value = localStorage.getItem('language') as string | 'es';
		locale.value = lang.value;
	});

	return {
		lang,
		toggleLanguage,
	};
});
