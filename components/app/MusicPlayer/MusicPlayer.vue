<template>
	<div :key="renderAudioKey" class="bg-darker w-full flex gap-5 text-white">
		<div class="flex gap-5 items-center">
			<BaseButton
				v-if="!isPlaying && !isPaused"
				data-testid="music-player__play-button"
				:color="!audioSrc ? 'gray' : 'primary'"
				icon="play"
				:disabled="!audioSrc"
				@click="play(audioSrc)" />
			<div class="flex gap-5">
				<BaseButton
					v-if="isPlaying || isPaused"
					data-testid="music-player__pause-button"
					color="primary"
					:icon="isPlaying ? 'pause' : 'play'"
					@click="pause" />
				<BaseButton v-if="isPlaying" color="secondary" icon="stop" icon-right @click="stop" />
			</div>

			<span v-if="audioSrc">
				{{ $t('app.audio_player.playing') }}
				<strong>{{ audioTitle }}</strong>
			</span>
			<span v-else>
				{{ $t('app.audio_player.no_audio_selected') }}
			</span>

			<div v-if="isPlaying" data-testid="music-player__audio-timeline" class="audio__timeline">
				<input
					:value="audioCurrentTime"
					type="range"
					class="audio__timeline"
					min="0"
					:max="audioDuration"
					@input="setNewCurrentTime" />
			</div>
			<div data-testid="music-player__audio-time" class="w-[200px]">{{ audioTime }}</div>
		</div>
		<audio ref="audioRef" :src="audioSrc" class="hidden" controls></audio>
	</div>
</template>

<script setup lang="ts">
import { useAudioStore } from '@/store/audio';

const { play, pause, stop } = useAudioStore();
const {
	audioElement,
	renderAudioKey,
	audioSrc,
	isPlaying,
	isPaused,
	audioCurrentTime,
	audioDuration,
} = storeToRefs(useAudioStore());

const audioRef = ref<HTMLAudioElement>();

const audioTitle = computed(() => audioRef.value && audioSrc.value.split('/').pop());

const audioTime = computed(() => {
	if (audioDuration) {
		// Calculate the time left and the total duration
		let currentMinutes: string | number = Math.floor(audioCurrentTime.value / 60);
		let currentSeconds: string | number = Math.floor(audioCurrentTime.value - currentMinutes * 60);
		let durationMinutes: string | number = Math.floor(audioDuration.value / 60);
		let durationSeconds: string | number = Math.floor(audioDuration.value - durationMinutes * 60);

		// Add a zero to the single digit time values
		if (currentSeconds < 10) {
			currentSeconds = '0' + currentSeconds;
		}
		if (durationSeconds < 10) {
			durationSeconds = '0' + durationSeconds;
		}
		if (currentMinutes < 10) {
			currentMinutes = '0' + currentMinutes;
		}
		if (durationMinutes < 10) {
			durationMinutes = '0' + durationMinutes;
		}

		// Display the updated duration
		return `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
	}
});

const setNewCurrentTime = (event: Event) => {
	const target = event.target as HTMLInputElement;
	audioElement.value!.currentTime = parseFloat(target.value);
};

onMounted(() => (audioElement.value = audioRef.value as HTMLAudioElement));
</script>

<style scoped lang="scss">
.audio__timeline {
	@apply w-[500px] bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
[&::-webkit-slider-thumb]:w-2.5
[&::-webkit-slider-thumb]:h-2.5
[&::-webkit-slider-thumb]:-mt-0.5
[&::-webkit-slider-thumb]:appearance-none
[&::-webkit-slider-thumb]:bg-white
[&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
[&::-webkit-slider-thumb]:rounded-full
[&::-webkit-slider-thumb]:transition-all
[&::-webkit-slider-thumb]:duration-150
[&::-webkit-slider-thumb]:ease-in-out
[&::-webkit-slider-thumb]:dark:bg-slate-700

[&::-moz-range-thumb]:w-2.5
[&::-moz-range-thumb]:h-2.5
[&::-moz-range-thumb]:appearance-none
[&::-moz-range-thumb]:bg-white
[&::-moz-range-thumb]:border-4
[&::-moz-range-thumb]:border-blue-600
[&::-moz-range-thumb]:rounded-full
[&::-moz-range-thumb]:transition-all
[&::-moz-range-thumb]:duration-150
[&::-moz-range-thumb]:ease-in-out

[&::-webkit-slider-runnable-track]:w-full
[&::-webkit-slider-runnable-track]:h-2
[&::-webkit-slider-runnable-track]:bg-gray-100
[&::-webkit-slider-runnable-track]:rounded-full
[&::-webkit-slider-runnable-track]:dark:bg-gray-700

[&::-moz-range-track]:w-full
[&::-moz-range-track]:h-2
[&::-moz-range-track]:bg-gray-100
[&::-moz-range-track]:rounded-full;
}
</style>
