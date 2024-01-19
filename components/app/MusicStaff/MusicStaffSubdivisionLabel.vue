<template>
	<div>
		<small class="absolute top-0 left-1 text-black">{{ label }}</small>
	</div>
</template>

<script setup lang="ts">
import { MusicStaffSubdivisionLabelProps } from './MusicStaffSubdivisionLabel.interfaces';

const props = defineProps<MusicStaffSubdivisionLabelProps>();

const label = computed(() => {
	const labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

	return `${props.index}${labels[props.subdivision - 1]}`;
});
</script>
