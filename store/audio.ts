export const useAudioStore = defineStore('audio', () => {
	const renderAudioKey = ref(0);

	const audioPlayingId = ref<number | null>(null);
	const audioSrc = ref<string>('');
	const audioElement = ref<HTMLAudioElement | null>(null);
	const isPlaying = ref(false);
	const isPaused = ref(false);

	const audioDuration = ref(0);
	const audioCurrentTime = ref(0);

	const play = (audioPath?: string) => {
		if (isPlaying.value || !audioElement.value) return;

		if (audioPath) audioSrc.value = audioPath;

		isPlaying.value = true;
		isPaused.value = false;

		audioElement.value.src = audioSrc.value;

		setTimeout(() => {
			if (!audioElement.value) return;
			audioDuration.value = audioElement.value.duration;
		}, 500);

		setTimeout(() => {
			audioElement.value?.play();
		}, 500);

		setInterval(() => (audioCurrentTime.value = audioElement.value?.currentTime as number), 1000);
	};

	const pause = () => {
		if (audioElement.value && isPlaying.value) {
			isPlaying.value = false;
			isPaused.value = true;

			audioElement.value.pause();
		} else {
			play();
		}
		renderAudioKey.value++;
	};

	const stop = () => {
		if (audioElement.value) {
			audioElement.value.pause();
			audioElement.value.currentTime = 0;
			isPlaying.value = false;
			isPaused.value = false;
			renderAudioKey.value++;
			audioSrc.value = '';
		}
	};

	return {
		audioPlayingId,
		renderAudioKey,
		audioSrc,
		audioElement,
		isPlaying,
		isPaused,
		play,
		pause,
		stop,
		audioDuration,
		audioCurrentTime,
	};
});
