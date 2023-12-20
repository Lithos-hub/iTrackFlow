import { defineStore } from 'pinia';

export const useScreenStore = defineStore('screen', () => {
	const colorMode = useColorMode();

	const lightMode = ref(false);

	const toggleDarkMode = () => {
		lightMode.value = !lightMode.value;
		colorMode.preference = lightMode.value ? 'light' : 'dark';
	};

	return { lightMode, toggleDarkMode };
});
