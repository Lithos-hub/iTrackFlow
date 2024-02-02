import { defineStore } from 'pinia';

export const useScreenStore = defineStore('screen', () => {
	const colorMode = useColorMode();

	const toggleDarkMode = () => {
		const lightMode = colorMode.preference === 'light';
		colorMode.preference = lightMode ? 'dark' : 'light';
	};

	const lightMode = computed(() => colorMode.preference === 'light');

	return { lightMode, toggleDarkMode };
});
