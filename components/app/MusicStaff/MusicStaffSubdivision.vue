<template>
	<div
		:class="`row-span-${splits} border w-full h-full flex flex-col items-center p-5 relative ${
			isActive ? 'selected__pulse' : 'bg-white'
		} `"
		@click="selectSubdivision(index, subdivision)">
		<AppMusicStaffSubdivisionLabel :index="index" :subdivision="subdivision" />
		<div class="flex flex-col justify-between">
			<div>
				<h4 class="text-black font-bold">{{ chord }}</h4>
				<h5 class="text-black">{{ romanNumber }}</h5>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { MusicStafSubdivisionProps } from './MusicStaffSubdivision.interfaces';
import { useHarmonyStore } from '~/store/harmony';

const { subdivision, index, splits, romanNumber, chord } = defineProps<MusicStafSubdivisionProps>();

const { selectedBarSplit, selectedBarIndex, selectedChord } = storeToRefs(useHarmonyStore());
const isActive = computed(() => {
	return selectedBarSplit.value === subdivision && selectedBarIndex.value === index;
});

const selectSubdivision = (index: number, split: number) => {
	selectedBarIndex.value = index;
	selectedBarSplit.value = split;

	selectedChord.value = [`${chord} - (${romanNumber})`];
};
</script>

<style scoped></style>
