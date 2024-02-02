<template>
	<div :key="refreshPlayerKey" class="fixed bottom-0 left-0 bg-black w-full flex gap-5 text-white">
		<div class="flex gap-5 items-center">
			<BaseButton
				v-if="!isPlaying && !isPaused"
				:color="!audioSrc ? 'gray' : 'primary'"
				icon="play"
				:disabled="!audioSrc"
				@click="play" />
			<div class="flex gap-5">
				<BaseButton
					v-if="isPlaying || isPaused"
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

			<div v-if="isPlaying" class="audio__timeline relative flex">
				<div
					class="absolute top-0 left-0 bg-primary h-full"
					:style="{
						width: `${(audioCurrentTime / audioDuration) * 100}%`,
					}" />
			</div>
			<div>{{ audioTime }}</div>
		</div>
		<audio ref="audioRef" :src="audioSrc" class="hidden" controls></audio>
	</div>
</template>

<script setup lang="ts">
import { useAudioPlayerStore } from '@/store/audioPlayer';

const { setAudioElement, play, pause, stop } = useAudioPlayerStore();
const { refreshPlayerKey, audioSrc, isPlaying, isPaused, audioDuration, audioCurrentTime } =
	storeToRefs(useAudioPlayerStore());

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

onMounted(() => setAudioElement(audioRef.value as HTMLAudioElement));
</script>

<style scoped lang="scss">
.audio__timeline {
	width: 500px;
	height: 5px;
	background-color: #fff;
}
</style>
~/store/audioPlayer
