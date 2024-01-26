<template>
	<div
		:class="`row-span-${splits} border w-full h-full flex flex-col items-center p-5 relative ${
			isActive ? 'selected__pulse' : 'bg-white'
		} `"
		@click="selectSubdivision(index, subdivision)">
		<AppMusicStaffSubdivisionLabel :index="index" :subdivision="subdivision" />
		<div class="flex flex-col justify-between">
			<div>
				<strong class="text-black font-bold">{{ chord }}</strong>
				<p v-if="romanNumber !== 'atonal'" class="text-black">{{ romanNumber }}</p>
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
