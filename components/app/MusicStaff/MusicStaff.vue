<template>
	<div
		class="relative default_border text-center p-5 hover:bg-black/10 cursor-pointer duration-100 flex flex-col gap-2.5">
		<small class="absolute top-0 left-1">{{ index }}</small>
		<div class="flex flex-row grow items-center justify-center">
			<AppMusicStaffSubdivision
				v-for="({ chord, romanNumber }, i) of subdivisionChords"
				:key="i"
				:subdivision="i + 1"
				:splits="splits"
				:index="index"
				:chord="chord"
				:roman-number="romanNumber" />
		</div>
		<BaseInput
			v-model="model"
			variant="underline"
			debounced
			color="black"
			:placeholder="$t('app.harmony.lyrics')"
			@input="updateLyrics" />
	</div>
</template>

<script setup lang="ts">
import { MusicStaffProps } from './MusicStaff.interfaces';

const { lyrics } = defineProps<MusicStaffProps>();

defineEmits(['on-select-bar']);

const model = defineModel<MusicStaffProps['lyrics']>();

const updateLyrics = () => console.log('Updating');

onMounted(() => {
	model.value = lyrics;
});
</script>
