export const useAudioStore = defineStore('audio', () => {
	const refreshPlayerKey = ref(0);

	const audioSrc = ref<string>('');
	const audioElement = ref<HTMLAudioElement | null>(null);
	const isPlaying = ref(false);
	const isPaused = ref(false);

	const audioDuration = ref(0);
	const audioCurrentTime = ref(0);

	const setAudioSrc = (src: string) => {
		audioSrc.value = src;
	};
	const setAudioElement = (element: HTMLAudioElement) => {
		audioElement.value = element;
	};

	const setAudioCurrentTime = (duration: number) => {
		audioCurrentTime.value = duration;
	};

	const play = () => {
		if (audioElement.value) {
			audioDuration.value = audioElement.value.duration;
			isPlaying.value = true;
			isPaused.value = false;

			setTimeout(() => audioElement.value?.play(), 500);

			setInterval(() => setAudioCurrentTime(audioElement.value?.currentTime as number), 1000);
		}
	};

	const pause = () => {
		if (audioElement.value && isPlaying.value) {
			isPlaying.value = false;
			isPaused.value = true;

			audioElement.value.pause();
		} else {
			play();
		}
		refreshPlayerKey.value++;
	};

	const stop = () => {
		if (audioElement.value) {
			audioElement.value.pause();
			audioElement.value.currentTime = 0;
			isPlaying.value = false;
			isPaused.value = false;
			refreshPlayerKey.value++;
		}
	};

	return {
		refreshPlayerKey,
		audioSrc,
		audioElement,
		setAudioSrc,
		setAudioElement,
		isPlaying,
		isPaused,
		play,
		pause,
		stop,
		audioDuration,
		audioCurrentTime,
	};
});
