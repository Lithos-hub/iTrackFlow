import { SelectedChord } from '@/components/App/MusicStaff/MusicStaff.interfaces';

export const useHarmonyStore = defineStore('harmony', () => {
	const labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

	const selectedBarIndex = ref<number>(1);
	const selectedBarSubdivision = ref<number>(1);

	// Dropdown selections
	const selectedChord = ref<SelectedChord[]>([]);
	const selectedBarSplit = ref<string[]>(['1']);

	const selectedBarLabel = computed(
		() => `${selectedBarIndex.value}${labels[selectedBarSubdivision.value - 1]}`,
	);

	return {
		selectedBarLabel,
		selectedBarIndex,
		selectedBarSubdivision,
		selectedChord,
		selectedBarSplit,
	};
});
