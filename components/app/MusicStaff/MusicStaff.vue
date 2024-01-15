<template>
	<div
		class="relative border border-dark/10 text-center p-5 min-h-[150px] hover:bg-black/10 cursor-pointer duration-100">
		<small class="absolute top-0 left-1 text-primary">{{ index }}</small>
		<h4 class="text-black">{{ figuredChordName }}</h4>
		<small class="text-black">{{ chordFigure }}</small>
	</div>
</template>

<script setup lang="ts">
import { MusicStaffProps } from './MusicStaff.interfaces';
import { getChordType } from '@/utils/chord';

const { chordName, chordFigure, keySignature, index } = defineProps<MusicStaffProps>();

const figuredChordName = computed(() => {
	if (!chordName) return '';
	const { type } = getChordType(chordName, keySignature);
	return `${chordName}${type}`;
});
</script>
