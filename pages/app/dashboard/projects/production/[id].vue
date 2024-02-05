<template>
	<ClientOnly>
		<section class="flex flex-col gap-5 pb-5">
			<BaseButton color="success" icon="add" icon-right class="self-end" @click="addTrack">
				{{ $t('app.production.add_track') }}
			</BaseButton>

			<div class="flex flex-col gap-5">
				<div class="grid grid-cols-5 w-full gap-5 p-2 dark:bg-softdark default_border">
					<BaseInput v-model="projectName" label="Project name" color="white" />
					<BaseInput v-model="projectComposer" label="Composer" color="white" />
					<BaseInput v-model="projectArranger" label="Arranger" color="white" />
					<BaseInput v-model="projectGenre" label="Genre" color="white" />
					<BaseInput v-model="projectYear" label="Year" color="white" />
				</div>
				<AppDataTable :key="tableKey" :data-list="trackList" :headers="headersList">
					<template #table:trackName="{ id }">
						<BaseInput
							v-model="trackList[id - 1].trackName"
							:placeholder="
								trackList[id - 1].trackName ? '' : $t('app.production.track_name_placeholder')
							"
							variant="underline"
							class="px-5" />
					</template>
					<template #table:composition="{ composition, id }">
						<BaseIcon
							class="mx-auto cursor-pointer"
							:icon="composition ? 'check' : 'uncheck'"
							:color="composition ? 'green' : 'red'"
							@click="toggleCheck(id - 1, 'composition')"
							@contextmenu="($event) => onCellClick({ column: 'composition', id }, $event)" />
					</template>
					<template #table:recording="{ recording, id }">
						<BaseIcon
							class="mx-auto cursor-pointer"
							:icon="recording ? 'check' : 'uncheck'"
							:color="recording ? 'green' : 'red'"
							@click="toggleCheck(id - 1, 'recording')"
							@contextmenu="($event) => onCellClick({ column: 'recording', id }, $event)" />
					</template>
					<template #table:mixing="{ mixing, id }">
						<BaseIcon
							class="mx-auto cursor-pointer"
							:icon="mixing ? 'check' : 'uncheck'"
							:color="mixing ? 'green' : 'red'"
							@click="toggleCheck(id - 1, 'mixing')"
							@contextmenu="($event) => onCellClick({ column: 'mixing', id }, $event)" />
					</template>
					<template #table:mastering="{ mastering, id }">
						<BaseIcon
							class="mx-auto cursor-pointer"
							:icon="mastering ? 'check' : 'uncheck'"
							:color="mastering ? 'green' : 'red'"
							@click="toggleCheck(id - 1, 'mastering')"
							@contextmenu="($event) => onCellClick({ column: 'mastering', id }, $event)" />
					</template>
					<template #table:audioPath="{ audioPath, id }">
						<div>
							<BaseIcon
								v-if="audioPath"
								:key="currentTrackPlaying"
								class="mx-auto cursor-pointer"
								:icon="
									currentTrackPlaying === id && !isPlaying
										? 'pause'
										: currentTrackPlaying === id && isPlaying
											? 'play'
											: 'play'
								"
								:color="lightMode ? 'black' : 'white'"
								@click="audioPath && togglePlay(id)"
								@contextmenu="($event) => onCellClick({ column: 'audio', id }, $event)" />
							<div v-else class="text-red-400 font-bold">
								{{ $t('app.production.no_audio') }}
							</div>
						</div>
					</template>
					<template #table:delete="{ id }">
						<BaseButton icon="trash" icon-color="red" flat @click="onRowDelete(id)" />
					</template>
				</AppDataTable>
			</div>
			<!-- Floating menu -->
			<AppFloatMenu v-if="isFloatMenuOpened" :client-x="clientX" :client-y="clientY" />
			<!-- Music player -->
			<AppMusicPlayer />
			<!-- Alert modal -->
			<BaseModalAlert
				v-if="showModal"
				v-bind="modalProps"
				@on-action="onConfirmDelete"
				@close="showModal = false" />
		</section>
	</ClientOnly>
</template>

<script setup lang="ts">
import { FloatMenuTarget } from '@/components/App/FloatMenu/FloatMenu.interfaces';

import { useScreenStore } from '@/store/colorMode';
import { useFloatMenuStore } from '@/store/floatMenu';
import { useAudioPlayerStore } from '@/store/audioPlayer';

import { Column } from '@/interfaces';
import BaseModalAlert from '@/components/Base/Modal/Alert/BaseModalAlert.vue';

definePageMeta({
	middleware: 'auth',
	layout: 'dashboard',
});

const { t } = useI18n();

// Pinia
const { isFloatMenuOpened, clientX, clientY } = storeToRefs(useFloatMenuStore());
const { setFloatMenuTarget, toggleFloatMenu, setPosition } = useFloatMenuStore();
const { lightMode } = storeToRefs(useScreenStore());
const { setAudioSrc, play, pause } = useAudioPlayerStore();
const { isPlaying } = storeToRefs(useAudioPlayerStore());

// Composables
const { showModal, modalProps } = useModal();

const projectName = ref("Project's name");
const projectComposer = ref("Project's composer");
const projectArranger = ref("Project's arranger");
const projectGenre = ref("Project's genre");
const projectYear = ref("Project's year");

const tableKey = ref(0);

const trackList = ref([
	{
		id: 1,
		trackName: 'Track name #1',
		composition: true,
		recording: false,
		mixing: false,
		mastering: false,
		audioPath: null,
	},
	{
		id: 2,
		trackName: 'Track name #2',
		composition: true,
		recording: true,
		mixing: true,
		mastering: false,
		audioPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
	},
	{
		id: 3,
		trackName: 'Track name #3',
		composition: true,
		recording: true,
		mixing: true,
		mastering: true,
		audioPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
	},
]);

const headersList = computed(() =>
	Object.keys(trackList.value[0])
		.filter((key) => key !== 'id')
		.map((key) => ({
			label: t(`app.dataTable.${key}`),
			key,
		}))
		.concat({ label: t('app.dataTable.delete'), key: 'delete' }),
);

const currentTrackPlaying = ref<number | undefined>(undefined);

const toggleCheck = (index: number, column: Column) => {
	trackList.value[index][column] = !trackList.value[index][column];

	// TODO: update in DB
	tableKey.value++;
};

const togglePlay = (trackId: number) => {
	const index = trackList.value.findIndex((track) => track.id === trackId);
	setAudioSrc(trackList.value[index].audioPath as string);
	currentTrackPlaying.value = trackId;
	if (isPlaying) {
		setTimeout(() => pause(), 500);
	} else {
		setTimeout(() => play(), 500);
	}
	tableKey.value++;
};

const onCellClick = ({ column, id }: FloatMenuTarget, event) => {
	event.preventDefault();
	setFloatMenuTarget({ column, id });
	setPosition(event.clientX, event.clientY);
	toggleFloatMenu();
};

const onRowDelete = (_: number) => {
	modalProps.value = {
		type: 'warning',
		title: t('app.production.delete_track'),
		message: t('app.production.delete_track_message'),
	};
	showModal.value = true;
};

const onConfirmDelete = () => {
	showModal.value = false;
	alert('Deleting project');
};
const addTrack = () => {
	trackList.value.push({
		id: trackList.value.length + 1,
		trackName: '',
		composition: false,
		recording: false,
		mixing: false,
		mastering: false,
		audioPath: null,
	});
};

watch(lightMode, () => tableKey.value++);

const getProject = async () => {
	const { data } = await useFetch('/api/projects', {
		method: 'GET',
	});
	console.log(data);
};

onMounted(() => getProject());
</script>

<style lang="scss" scoped>
table {
	width: 100%;
	border-collapse: collapse;

	& thead {
		@apply dark:border dark:border-primary;

		& th {
			@apply text-center p-5 text-black dark:text-white border border-dark/10 dark:border-primary;

			&:first-child {
				@apply bg-primary dark:bg-primary/50 text-white dark:text-white;
			}
		}
	}

	& tbody {
		& tr {
			& td {
				&:first-child {
					@apply font-bold text-primary;
				}
				@apply p-5 border border-primary/10 text-center [&:not(:first-child)]:hover:bg-dark/10 [&:not(:first-child)]:hover:dark:bg-primary/20 cursor-pointer;
			}
		}
	}
}
</style>
