<template>
	<div class="flex grow gap-5 h-[calc(100%-7.5vh)]">
		<div class="flex w-full h-full gap-5">
			<section class="flex flex-col w-1/2 gap-5">
				<h3 class="text-primary font-bold">Upload audio</h3>
				<BaseDropzone
					ref="dropZoneRef"
					:is-over-drop-zone="isOverDropZone"
					class="w-full"
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
						:items="audioItems"
						:selected-item="selectedListItem"
						@on-select-item="onSelectListItem"
						@on-remove-item="removeListItem" />
					<small v-if="fileTypeError" class="text-red-500 text-center">
						{{ $t('app.audio.metadata.audio_error') }}
					</small>
				</article>
			</section>
			<section class="flex flex-col w-1/2 gap-5 relative">
				<h3 class="text-primary font-bold">Visualize or edit the metadata</h3>
				<small
					v-if="!selectedListItem"
					class="text-info absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
					{{ $t('app.audio.metadata.select_a_file') }}
				</small>
				<div v-if="processedFileMetadataInfo" class="flex flex-col justify-between gap-5 h-full">
					<div class="overflow-y-auto default_border p-5 max-h-[63vh] grow">
						<div class="flex justify-between w-full items-center">
							<label class="default_label">
								{{ $t('app.audio.metadata.cover') }}
							</label>
							<img
								v-if="processedFileMetadataInfo?.cover"
								:src="'data:image/jpeg;base64,' + processedFileMetadataInfo?.cover"
								:alt="processedFileMetadataInfo?.title"
								class="w-[200px] h-[200px] aspect-square border default_border" />
						</div>

						<div
							v-for="field in ['title', 'artist', 'album', 'year', 'genre', 'track']"
							:key="field">
							<BaseInput
								v-model="processedFileMetadataInfo[field]"
								:label="$t(`app.audio.metadata.${field}`)"
								class="w-full" />
						</div>
					</div>

					<BaseButton
						v-if="processedFileMetadataInfo"
						color="success"
						variant="stealth"
						class="w-full"
						@click="onSave">
						{{ $t('app.audio.metadata.save') }}
					</BaseButton>
				</div>
			</section>
		</div>
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
const mp3Tag = ref<Mp3Tag | null>(null);

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

	// ID3v2 tags
	const imageBuffer = v2 ? v2.APIC[0].data : [0];
	const base64String = btoa(
		new Uint8Array(imageBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''),
	);
	return {
		album: v1?.album || '',
		artist: v1?.artist || '',
		comment: v1?.comment || '',
		genre: v1?.genre || '',
		title: v1?.title || '',
		track: v1?.track || '',
		year: v1?.year || '',
		size: v1Details?.size || 0,
		version: v1Details?.version || 0,
		cover: base64String || '',
		// ID3v2 details
		flags: v2Details?.flags || {},
		v2Size: v2Details?.size || 0,
		v2Version: v2Details?.version || 0,
	};
});

const onSelectFiles = (event: Event) => {
	selectedListItem.value = '';
	fileTypeError.value = false;
	filesMetadata.value = {};
	selectedAudioFiles.value = [];
	selectedFile.value = null;

	const target = event.target as HTMLInputElement;
	const files = target.files;

	if (!files) return;

	const filesArray = [...files] as File[];

	filesArray.forEach((_, i) => {
		const reader = new FileReader();
		reader.onload = (event) => {
			const result = event.target?.result;
			const mp3 = new Mp3Tag(result as ArrayBuffer);
			mp3Tag.value = mp3;
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

const onSave = () => {
	if (!mp3Tag.value || !processedFileMetadataInfo.value) return;

	mp3Tag.value.read();

	mp3Tag.value.tags.title = processedFileMetadataInfo.value.title;
	mp3Tag.value.tags.artist = processedFileMetadataInfo.value.artist;
	mp3Tag.value.tags.album = processedFileMetadataInfo.value.album;
	mp3Tag.value.tags.year = processedFileMetadataInfo.value.year;
	mp3Tag.value.tags.genre = processedFileMetadataInfo.value.genre;
	mp3Tag.value.tags.track = processedFileMetadataInfo.value.track;

	mp3Tag.value.save();

	// Get the mp3 file with the new tags with selectedFile.value
	if (!selectedFile.value) return;
	const blob = new Blob([mp3Tag.value.buffer], { type: 'audio/mp3' });

	const url = URL.createObjectURL(blob);

	const a = document.createElement('a');
	a.href = url;
	a.download = processedFileMetadataInfo.value.title;
	a.click();
	URL.revokeObjectURL(url);
};
</script>
