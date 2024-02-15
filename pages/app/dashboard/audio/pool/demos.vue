<template>
	<div class="flex grow gap-5 h-[calc(100%-40px)]">
		<section class="flex flex-col gap-5">
			<section class="default_border default_mode p-5">
				<div class="grid grid-cols-6 justify-between items-end gap-5">
					<BaseInput
						v-model="searchQuery"
						variant="bordered"
						color="white"
						:label="$t('app.audio.pool.demos.search')"
						:placeholder="$t('app.audio.pool.demos.search_placeholder')" />
					<BaseDropdown
						v-model="selectedStyle"
						:data="stylesList"
						color="white"
						:label="$t('app.audio.pool.demos.category')"
						:placeholder="$t('app.audio.pool.demos.category_placeholder')" />
					<BaseDropdown
						v-model="selectedInstrument"
						:data="instrumentsList"
						color="white"
						:label="$t('app.audio.pool.demos.instrument')"
						:placeholder="$t('app.audio.pool.demos.instrument_placeholder')" />
					<BaseDropdown
						v-model="selectedDuration"
						:data="durationsList"
						color="white"
						:label="$t('app.audio.pool.demos.duration')"
						:placeholder="$t('app.audio.pool.demos.duration_placeholder')" />
					<BaseDropdown
						v-model="selectedCreator"
						:data="creatorsList"
						color="white"
						:label="$t('app.audio.pool.demos.creator')"
						:placeholder="$t('app.audio.pool.demos.creator_placeholder')" />
					<BaseDropdown
						v-model="selectedTempo"
						:data="temposList"
						color="white"
						:label="$t('app.audio.pool.demos.tempo')"
						:placeholder="$t('app.audio.pool.demos.tempo_placeholder')" />
				</div>
			</section>
			<section class="default_border default_mode h-full">
				<div class="p-5 flex flex-col gap-5">
					<strong>Mis audios</strong>
					<div class="flex flex-wrap gap-5 text-white">
						<AppAudioDemoCard
							v-for="data of audioData"
							:key="data.id"
							v-bind="data"
							@click="play(data.audioPath)" />
					</div>
				</div>
			</section>
		</section>
		<section class="w-[250px]">
			<aside class="default_border default_mode p-5 flex flex-col gap-5 h-full">
				<strong>Subida de audio</strong>
				<!-- Dropzone -->
				<BaseDropzone
					ref="dropZoneRef"
					:is-over-drop-zone="isOverDropZone"
					:placeholder="$t('app.audio.pool.demos.upload_placeholder')"
					@click="fileInputRef?.click()" />
				<input
					ref="fileInputRef"
					type="file"
					class="hidden"
					accept="audio/*"
					@change="onSelectFile" />
				<small v-if="fileTypeError" class="text-red-500 text-center">
					{{ $t('app.audio.pool.demos.audio_error') }}
				</small>
			</aside>
		</section>
		<AppMusicPlayer class="absolute bottom-0 left-0 z-50" />
	</div>
</template>

<script setup lang="ts">
import { useAudioStore } from '~/store/audio';

definePageMeta({
	title: 'Audio Demos',
	description: 'Audio Demos description',
	layout: 'dashboard',
});

const { play } = useAudioStore();

const dropZoneRef = ref<HTMLDivElement>();
const fileInputRef = ref<HTMLInputElement | null>(null);

const searchQuery = ref('');
const selectedStyle = ref([]);
const selectedInstrument = ref([]);
const selectedDuration = ref([]);
const selectedTempo = ref('');
const selectedCreator = ref('');
const selectedAudioFiles = ref<File[] | File | null>(null);

const fileTypeError = ref(false);

const stylesList = ref([
	{
		label: 'Category 1',
		value: 'category-1',
	},
	{
		label: 'Category 2',
		value: 'category-2',
	},
	{
		label: 'Category 3',
		value: 'category-3',
	},
]);

const instrumentsList = ref([
	{
		label: 'Instrument 1',
		value: 'instrument-1',
	},
	{
		label: 'Instrument 2',
		value: 'instrument-2',
	},
	{
		label: 'Instrument 3',
		value: 'instrument-3',
	},
]);

const durationsList = ref([
	{
		label: 'Duration 1',
		value: 'duration-1',
	},
	{
		label: 'Duration 2',
		value: 'duration-2',
	},
	{
		label: 'Duration 3',
		value: 'duration-3',
	},
]);

const creatorsList = ref([
	{
		label: 'Creator 1',
		value: 'creator-1',
	},
	{
		label: 'Creator 2',
		value: 'creator-2',
	},
	{
		label: 'Creator 3',
		value: 'creator-3',
	},
]);

const temposList = ref([
	{
		label: 'Tempo 1',
		value: 'tempo-1',
	},
	{
		label: 'Tempo 2',
		value: 'tempo-2',
	},
	{
		label: 'Tempo 3',
		value: 'tempo-3',
	},
]);

const audioData = ref([
	{
		id: 1,
		trackName: 'Audio 1.mp3',
		description: 'Audio 1 description',
		audioPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
	},
	{
		id: 2,
		trackName: 'Audio 2.mp3',
		description: 'Audio 2 description',
		audioPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
	},
	{
		id: 3,
		trackName: 'Audio 3.mp3',
		description: 'Audio 3 description',
		audioPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
	},
]);

const { isOverDropZone } = useDropZone(dropZoneRef, {
	onDrop,
	dataTypes: ['audio/mp3', 'audio/flac', 'audio/wav'],
});

const onSelectFile = (event: Event) => {
	const target = event.target as HTMLInputElement;
	const file = target.files?.[0];

	if (!file || !checkFileType(file, 'audio')) {
		fileTypeError.value = true;
		return;
	}

	selectedAudioFiles.value = file;
};

function onDrop(files: File[] | null) {
	if (!files) return;

	const file = files[0];

	if (!file || !checkFileType(file, 'audio')) {
		fileTypeError.value = true;
		return;
	}

	selectedAudioFiles.value = files;
}
</script>
