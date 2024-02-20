<template>
	<div class="flex grow gap-5 h-full">
		<section class="flex w-full gap-5">
			<div class="flex flex-col w-1/2 gap-5 flex-grow">
				<BaseDropzone
					ref="dropZoneRef"
					:is-over-drop-zone="isOverDropZone"
					class="w-full"
					:label="$t('app.audio.metadata.upload')"
					:placeholder="$t('app.audio.pool.demos.upload_placeholder')"
					@click="fileInputRef?.click()" />
				<input
					ref="fileInputRef"
					type="file"
					class="hidden"
					accept="audio/mp3"
					multiple
					@change="onSelectFiles" />
				<div class="flex gap-2.5">
					<BaseIcon icon="info" :size="20" color="blue" />
					<small>
						{{ $t('app.audio.metadata.info') }}
					</small>
				</div>
				<article v-if="selectedAudioFiles.length" class="default_border p-5 overflow-y-auto h-full">
					<BaseList
						:items="[...audioItems]"
						:selected-item="selectedListItem"
						@on-select-item="onSelectListItem"
						@on-remove-item="removeListItem" />
					<small v-if="fileTypeError" class="text-red-500 text-center">
						{{ $t('app.audio.metadata.audio_error') }}
					</small>
				</article>
			</div>
			<aside class="default_border w-1/2 p-5 h-full relative">
				<strong
					v-if="!selectedListItem"
					class="text-info absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
					{{ $t('app.audio.metadata.select_a_file') }}
				</strong>
				<div v-if="processedFileMetadataInfo" class="flex flex-col gap-5">
					<label>
						{{ $t('app.audio.metadata.cover') }}
					</label>
					<img
						v-if="processedFileMetadataInfo?.cover"
						:src="'data:image/jpeg;base64,' + processedFileMetadataInfo?.cover"
						:alt="processedFileMetadataInfo?.title"
						class="w-[200px] h-[200px] mx-auto aspect-square border default_border" />

					<BaseInput
						v-if="processedFileMetadataInfo?.title"
						v-model="processedFileMetadataInfo.title"
						:label="$t('app.audio.metadata.title')"
						class="w-full" />

					<BaseInput
						v-if="processedFileMetadataInfo?.artist"
						v-model="processedFileMetadataInfo.artist"
						:label="$t('app.audio.metadata.artist')"
						class="w-full" />

					<BaseInput
						v-if="processedFileMetadataInfo?.album"
						v-model="processedFileMetadataInfo.album"
						:label="$t('app.audio.metadata.album')"
						class="w-full" />

					<BaseInput
						v-if="processedFileMetadataInfo?.year"
						v-model="processedFileMetadataInfo.year"
						:label="$t('app.audio.metadata.year')"
						class="w-full" />

					<BaseInput
						v-if="processedFileMetadataInfo?.genre"
						v-model="processedFileMetadataInfo.genre"
						:label="$t('app.audio.metadata.genre')"
						class="w-full" />

					<BaseInput
						v-if="processedFileMetadataInfo?.track"
						v-model="processedFileMetadataInfo.track"
						:label="$t('app.audio.metadata.track')"
						class="w-full" />
				</div>
			</aside>
		</section>
	</div>
</template>

<script setup lang="ts">
import Mp3Tag from 'mp3tag.js';
import { MetadataTag } from '@/interfaces/audio';

definePageMeta({
	title: 'Audio Meta',
	description: 'Audio Meta description',
	layout: 'dashboard',
});

const dropZoneRef = ref<HTMLDivElement>();
const fileInputRef = ref<HTMLInputElement | null>(null);

const { isOverDropZone } = useDropZone(dropZoneRef, {
	onDrop,
	dataTypes: ['audio/mp3'],
});

const selectedAudioFiles = ref<File[] | []>([]);
const fileTypeError = ref(false);
const selectedListItem = ref<string>('');
const selectedFile = ref<File | null>(null);
const filesMetadata = ref<Record<string, unknown>>({});

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

const processedFileMetadataInfo = computed(() => {
	if (!selectedFile.value) return;

	const selectedFileIndex = selectedAudioFiles.value.findIndex(
		(file) => file.name === selectedFile.value?.name,
	);

	const { v1, v1Details, v2, v2Details } = filesMetadata.value[selectedFileIndex] as MetadataTag;

	// ID3v1 tags
	const { album, artist, comment, genre, title, track, year } = v1;
	// ID3v1 details
	const { size, version } = v1Details;
	// ID3v2 tags
	const { APIC } = v2;
	const imageBuffer = APIC[0].data;
	const base64String = btoa(
		new Uint8Array(imageBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''),
	);
	// ID3v2 details
	const { flags, size: v2Size, version: v2Version } = v2Details;

	return {
		album,
		artist,
		comment,
		genre,
		title,
		track,
		year,
		size,
		version,
		cover: base64String,
		flags,
		v2Size,
		v2Version,
	};
});

const onSelectFiles = (event: Event) => {
	const target = event.target as HTMLInputElement;
	const files = target.files;

	if (!files) return;

	const filesArray = [...files] as File[];

	filesArray.forEach((_, i) => {
		const reader = new FileReader();
		reader.onload = (event) => {
			const result = event.target?.result;
			const mp3 = new Mp3Tag(result as ArrayBuffer);
			const tags = mp3.read();
			filesMetadata.value[i] = tags;
		};
		reader.readAsArrayBuffer(files[i]);
	});

	try {
		selectedAudioFiles.value = checkAndSetFiles(filesArray, ['audio/mpeg', 'audio/mp3']) as File[];
	} catch (error) {
		fileTypeError.value = true;
	}
};

function onDrop(files: File[] | null) {
	try {
		selectedAudioFiles.value = checkAndSetFiles(files, ['audio/mpeg', 'audio/mp3']) as File[];
	} catch (error) {
		fileTypeError.value = true;
	}
}

const onSelectListItem = (value: string) => {
	selectedListItem.value = value;
	selectedFile.value = selectedAudioFiles.value.find((file) => file.name === value) as File;
};

const removeListItem = (value: string) => {
	const fileToRemoveIndex = audioItems.value.findIndex((item) => item.value === value);
	selectedAudioFiles.value = (selectedAudioFiles.value as File[]).filter(
		(_, i) => i !== fileToRemoveIndex,
	);
};
</script>
