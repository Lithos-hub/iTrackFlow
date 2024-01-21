export const useHarmonyStore = defineStore('harmony', () => {
	const labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

	const selectedBarIndex = ref<number>(1);
	const selectedBarSubdivision = ref<number>(1);

	// Dropdown selections
	const selectedChord = ref<string[]>([]);
	const selectedBarSplit = ref<number[]>([1]);

	const selectedBarLabel = computed(() => {
		return `${selectedBarIndex.value}${labels[selectedBarSubdivision.value - 1]}`;
	});

	return {
		selectedBarLabel,
		selectedBarIndex,
		selectedBarSubdivision,
		selectedChord,
		selectedBarSplit,
	};
});
