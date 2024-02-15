export default {
	renderAudioKey: 0,
	audioSrc: '',
	audioElement: null,
	isPlaying: false,
	isPaused: false,
	audioDuration: 0,
	audioCurrentTime: 0,
	play: vi.fn(),
	pause: vi.fn(),
	stop: vi.fn(),
};
