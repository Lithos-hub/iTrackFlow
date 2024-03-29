<template>
	<div class="flex grow gap-5 h-[calc(100%-40px)]">
		<section class="flex flex-col gap-5 w-full">
			<section class="default_border default_mode p-5">
				<div class="grid grid-cols-3 justify-between items-end gap-5">
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
			<section class="default_border default_mode h-auto overflow-y-auto">
				<div class="p-5 flex flex-col gap-5">
					<strong>
						{{ $t('app.audio.pool.demos.my_audios') }}
					</strong>
					<div class="flex flex-wrap gap-5 text-white">
						<AppAudioDemoCard v-for="data of audioData" :key="data.id" v-bind="data" />
					</div>
				</div>
			</section>
		</section>
		<section class="w-[450px]">
			<aside class="default_border default_mode p-5 flex flex-col gap-5 h-full w-full">
				<!-- Dropzone -->
				<BaseDropzone
					ref="dropZoneRef"
					:is-over-drop-zone="isOverDropZone"
					class="w-full"
					:label="$t('app.audio.pool.demos.upload')"
					:placeholder="$t('app.audio.pool.demos.upload_placeholder')"
					@click="fileInputRef?.click()" />
				<input
					ref="fileInputRef"
					type="file"
					class="hidden"
					accept="audio/*"
					multiple
					@change="onSelectFiles" />
				<small v-if="fileTypeError" class="text-red-500 text-center">
					{{ $t('app.audio.pool.demos.audio_error') }}
				</small>
				<div v-if="selectedAudioFiles.length" class="h-full flex flex-col gap-5 justify-between">
					<small class="text-info text-center">
						{{ $t('app.audio.pool.demos.upload_list_info') }}
					</small>
					<div class="default_border p-5 overflow-y-auto flex-grow max-h-[300px]">
						<BaseList :items="audioItems" @on-remove-item="removeListItem" />
					</div>

					<BaseButton
						:disabled="!selectedAudioFiles"
						:loading="isUploadingAudio"
						:success="!isUploadingAudio && successOnUpload"
						:loading-text="$t('app.audio.pool.demos.uploading')"
						:success-text="$t('app.audio.pool.demos.upload_success')"
						class="w-full"
						variant="stealth"
						color="success"
						@click="onUploadAudioFiles">
						{{ $t('app.audio.pool.demos.confirm_upload') }}
					</BaseButton>
				</div>
			</aside>
		</section>
		<AppMusicPlayer class="absolute bottom-0 left-0 z-50" />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	title: 'Audio Demos',
	description: 'Audio Demos description',
	layout: 'dashboard',
});

const dropZoneRef = ref<HTMLDivElement>();
const fileInputRef = ref<HTMLInputElement | null>(null);

const searchQuery = ref('');
const selectedStyle = ref([]);
const selectedInstrument = ref([]);
const selectedDuration = ref([]);
const selectedTempo = ref([]);
const selectedCreator = ref([]);
const selectedAudioFiles = ref<File[] | []>([]);

const isUploadingAudio = ref(false);
const successOnUpload = ref(false);
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

const audioItems = computed(() => {
	return Array.from(selectedAudioFiles.value).map((file: File) => {
		return {
			text: file.name,
			value: file.name,
			prependIcon: 'music',
			removable: true,
		};
	});
});

const removeListItem = (value: string) => {
	const fileToRemoveIndex = audioItems.value.findIndex((item) => item.value === value);

	selectedAudioFiles.value = selectedAudioFiles.value.filter((_, i) => i !== fileToRemoveIndex);
};

const { isOverDropZone } = useDropZone(dropZoneRef, {
	onDrop,
	dataTypes: ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/aac'],
});

const onSelectFiles = (event: Event) => {
	const target = event.target as HTMLInputElement;
	const files = target.files;

	if (!files) return;

	const filesArray = [...files] as File[];

	try {
		selectedAudioFiles.value = checkAndSetFiles(filesArray) as File[];
	} catch (error) {
		fileTypeError.value = true;
	}
};

function onDrop(files: File[] | null) {
	try {
		selectedAudioFiles.value = checkAndSetFiles(files) as File[];
	} catch (error) {
		fileTypeError.value = true;
	}
}

const onUploadAudioFiles = () => {
	isUploadingAudio.value = true;
	const formData = new FormData();

	Array.from(selectedAudioFiles.value).forEach((file) => {
		formData.append('audio', file);
	});

	// Simulate upload
	setTimeout(() => {
		isUploadingAudio.value = false;
		selectedAudioFiles.value = [];
		successOnUpload.value = true;
		setTimeout(() => {
			successOnUpload.value = false;
		}, 5000);
	}, 2000);
};
</script>
