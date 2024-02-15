<template>
	<article
		:key="renderAudioKey"
		class="rounded-2xl flex flex-col justify-evenly p-5 items-center aspect-square shadow duration-200 relative hover:scale-105 hover:shadow-xl cursor-pointer"
		:class="{
			'border border-green-500 bg-green-500/10': audioPath === audioSrc,
			'default_border default_mode': audioPath !== audioSrc,
		}">
		<BaseButton flat icon="trash" icon-color="red" class="absolute top-0 right-0" />
		<BaseButton flat icon="pencil" icon-color="blue" class="absolute top-0 left-0" />
		<BaseIcon
			:key="renderScreenKey"
			icon="sound"
			:color="lightMode ? 'black' : 'white'"
			:size="30" />
		<small>{{ trackName }}</small>
	</article>
</template>

<script setup lang="ts">
import { AudioData } from '@/interfaces/audio';
import { useAudioStore } from '@/store/audio';
import { useScreenStore } from '@/store/screen';

defineProps<AudioData>();

const { audioSrc, renderAudioKey } = storeToRefs(useAudioStore());
const { lightMode, renderScreenKey } = storeToRefs(useScreenStore());
</script>
