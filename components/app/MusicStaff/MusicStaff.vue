<template>
	<div
		class="relative border border-dark/10 text-center p-5 min-h-[150px] hover:bg-black/10 cursor-pointer duration-100">
		<small class="absolute top-0 left-1 text-black">{{ index }}</small>
		<div class="flex flex-row items-center justify-center">
			<div
				v-for="split in splits"
				:key="split"
				:class="`row-span-${splits} border p-5 relative ${
					isActive ? 'selected__pulse' : 'bg-white'
				} `"
				@click="$emit('on-select-bar', label)">
				<AppMusicStaffSubdivisionLabel :label="label" />
				<h4 class="text-black font-bold">{{ chord }}</h4>
				<h5 class="text-black">{{ romanNumber }}</h5>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { MusicStaffProps } from './MusicStaff.interfaces';

const props = defineProps<MusicStaffProps>();

defineEmits(['on-select-bar']);

const label = computed(() => {
	const labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

	return `${props.index}${labels[props.splits - 1]}`;
});

const isActive = computed(() => props.selectedBar === label.value);
</script>
