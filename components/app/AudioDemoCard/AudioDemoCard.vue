<template>
	<article
		:key="renderAudioKey"
		class="text-black dark:text-white rounded-2xl flex flex-col justify-evenly p-5 items-center aspect-square shadow duration-200 relative cursor-pointer"
		:class="{
			'border border-green-500 bg-green-500/10': audioPath === audioSrc,
			'default_border default_mode': audioPath !== audioSrc,
		}">
		<BaseButton flat icon="trash" icon-color="red" class="absolute top-0 right-0" />
		<BaseButton flat icon="pencil" icon-color="blue" class="absolute top-0 left-0" />
		<BaseIcon
			:key="renderScreenKey"
			:icon="isPlaying && audioPath === audioSrc ? 'pause' : 'play'"
			:color="iconColor"
			:size="30"
			class="hover:scale-110 duration-200"
			@click="isPlaying ? pause() : play(audioPath)" />
		<small>{{ trackName }}</small>
	</article>
</template>

<script setup lang="ts">
import { AudioData } from '@/interfaces/audio';
import { useAudioStore } from '@/store/audio';
import { useScreenStore } from '@/store/screen';

const { audioPath } = defineProps<AudioData>();
defineEmits(['on-play']);

const { audioSrc, renderAudioKey, isPlaying } = storeToRefs(useAudioStore());

const { play, pause } = useAudioStore();
const { renderScreenKey, lightMode } = storeToRefs(useScreenStore());

const iconColor = computed(() => {
	if (isPlaying && audioPath === audioSrc.value) {
		return lightMode.value ? 'gray' : 'green';
	}
	return lightMode.value ? 'black' : 'white';
});
</script>
