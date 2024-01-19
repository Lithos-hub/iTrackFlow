export const useHarmonyStore = defineStore('harmony', () => {
	const labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

	const selectedBarIndex = ref<number>(1);
	const selectedBarSplit = ref<number>(1);
	const selectedChord = ref<string[]>([]);

	const selectedBarLabel = computed(() => {
		return `${selectedBarIndex.value}${labels[selectedBarSplit.value - 1]}`;
	});

	return {
		selectedBarLabel,
		selectedBarIndex,
		selectedBarSplit,
		selectedChord,
	};
});
