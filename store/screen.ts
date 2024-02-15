import { defineStore } from 'pinia';

export const useScreenStore = defineStore('screen', () => {
	const colorMode = useColorMode();

	// To force some component to re-render when the color mode changes
	const renderScreenKey = ref(0);

	const toggleDarkMode = () => {
		const lightMode = colorMode.preference === 'light';
		colorMode.preference = lightMode ? 'dark' : 'light';
	};

	const lightMode = computed(() => colorMode.preference === 'light');

	watch(colorMode, () => renderScreenKey.value++);

	return { lightMode, toggleDarkMode, renderScreenKey };
});
