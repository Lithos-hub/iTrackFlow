<template>
	<div
		:class="`row-span-${splits} default_border w-full h-full min-h-[120px] flex flex-col items-center p-5 relative ${
			isActive ? 'selected__pulse' : 'dark:bg-black/10 bg-white/10'
		} `"
		@click="selectSubdivision(index, subdivision)">
		<AppMusicStaffSubdivisionLabel :index="index" :subdivision="subdivision" />
		<div class="flex flex-col justify-between">
			<div class="flex flex-col">
				<strong class="font-bold">{{ chord }}</strong>
				<p v-if="romanNumber !== 'atonal'">{{ romanNumber }}</p>
				<small v-else class="text-red-500">Atonal</small>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ChordName, RomanNumber } from './MusicStaff.interfaces';
import { MusicStafSubdivisionProps } from './MusicStaffSubdivision.interfaces';
import { useHarmonyStore } from '~/store/harmony';

const { subdivision, index, splits, romanNumber, chord } = defineProps<MusicStafSubdivisionProps>();

const { selectedBarSubdivision, selectedBarSplit, selectedBarIndex, selectedChord } =
	storeToRefs(useHarmonyStore());

const isActive = computed(
	() => selectedBarSubdivision.value === subdivision && selectedBarIndex.value === index,
);

const selectSubdivision = (index: number, split: number) => {
	selectedBarIndex.value = index;
	selectedBarSubdivision.value = split;
	selectedBarSplit.value[0] = splits;

	selectedChord.value = [`${chord as ChordName} - (${romanNumber as RomanNumber})`];
};
</script>
