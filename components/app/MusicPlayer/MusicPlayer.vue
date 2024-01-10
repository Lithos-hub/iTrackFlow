<template>
	<div :key="refreshPlayerKey" class="fixed bottom-0 left-0 bg-dark w-full p-5 flex gap-5">
		<div class="flex gap-5">
			<BaseButton
				v-if="!isPlaying && !isPaused"
				color="primary"
				icon="play"
				icon-right
				@click="play" />
			<div class="flex gap-5">
				<BaseButton
					v-if="isPlaying || isPaused"
					color="primary"
					:icon="isPlaying ? 'pause' : 'play'"
					icon-right
					@click="pause" />
				<BaseButton v-if="isPlaying" color="secondary" icon="stop" icon-right @click="stop" />
			</div>
		</div>
		<audio ref="audioRef" :src="audioSrc" class="hidden"></audio>
	</div>
</template>

<script setup lang="ts">
import { useAudioPlayerStore } from '@/store/audioPlayerStore';

const { setAudioSrc, setAudioElement, play, pause, stop } = useAudioPlayerStore();
const { refreshPlayerKey, audioSrc, isPlaying, isPaused } = storeToRefs(useAudioPlayerStore());

const audioRef = ref<HTMLAudioElement>();

onMounted(() => {
	setAudioSrc('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
	setAudioElement(audioRef.value as HTMLAudioElement);
	// TODO: Remove when the Backend is ready
});
</script>
