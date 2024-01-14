<template>
	<div class="border-dark border-r text-center">
		<h2 class="text-black">{{ figuredChordName }}</h2>
	</div>
</template>

<script setup lang="ts">
import { MusicStaffProps } from './MusicStaff.interfaces';
import { getChordType } from '@/utils/chord';

const { chordName, chordType, chordFigure, keySignature } = defineProps<MusicStaffProps>();

const figuredChordName = computed(() => {
	return `${chordName}${chordType === 'major' ? 'M' : ''}${chordFigure}`;
});

onMounted(() => {
	getChordType(chordName, keySignature);
});
</script>

<style scoped></style>
