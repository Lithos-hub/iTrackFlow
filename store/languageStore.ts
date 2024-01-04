import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', () => {
	const language = ref('es');
	const { locale } = useI18n();

	const toggleLanguage = () => {
		language.value = language.value === 'en' ? 'es' : 'en';
		localStorage.setItem('language', language.value);
		locale.value = language.value;
	};

	onMounted(() => {
		language.value = localStorage.getItem('language') as string | 'es';
	});

	return {
		language,
		toggleLanguage,
	};
});
