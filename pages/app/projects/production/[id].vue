<template>
	<section class="h-full w-full bg-white dark:bg-dark">
		<div class="default_margin">
			<div class="flex justify-between">
				<BaseButton
					variant="stealth"
					color="secondary"
					icon="chevron-rounded-left"
					icon-left
					class="my-5"
					@click="$router.back()">
					{{ $t('app.ui.go_back') }}
				</BaseButton>
				<BaseButton color="success" icon="add" icon-right class="my-5" @click="addTrack">
					{{ $t('app.projects.add_track') }}
				</BaseButton>
			</div>
			<div class="flex flex-col gap-5">
				<div class="grid grid-cols-5 w-full gap-5">
					<BaseInput v-model="projectName" label="Project name" color="primary" />
					<BaseInput v-model="projectComposer" label="Composer" color="primary" />
					<BaseInput v-model="projectArranger" label="Arranger" color="primary" />
					<BaseInput v-model="projectGenre" label="Genre" color="primary" />
					<BaseInput v-model="projectYear" label="Year" color="primary" />
				</div>

				<table :key="tableKey">
					<thead>
						<tr>
							<th>{{ $t('app.projects.track_name') }}</th>
							<th>{{ $t('app.projects.composition') }}</th>
							<th>{{ $t('app.projects.recording') }}</th>
							<th>{{ $t('app.projects.mixing') }}</th>
							<th>{{ $t('app.projects.mastering') }}</th>
							<th>{{ $t('app.projects.audio') }}</th>
							<th>{{ $t('app.projects.delete') }}</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="({ id, composition, recording, mixing, mastering, audioPath }, i) of trackList"
							:key="i">
							<td>
								<BaseInput
									v-model="trackList[i].trackName"
									:placeholder="
										trackList[i].trackName ? '' : $t('app.projects.track_name_placeholder')
									"
									variant="underline"
									color="primary" />
							</td>
							<td
								@click="toggleCheck(i, 'composition')"
								@contextmenu="($event) => onCellClick({ column: 'composition', id }, $event)">
								<BaseIcon
									class="mx-auto"
									:icon="composition ? 'check' : 'uncheck'"
									:color="composition ? 'green' : 'red'" />
							</td>
							<td
								@click="toggleCheck(i, 'recording')"
								@contextmenu="($event) => onCellClick({ column: 'recording', id }, $event)">
								<BaseIcon
									class="mx-auto"
									:icon="recording ? 'check' : 'uncheck'"
									:color="recording ? 'green' : 'red'" />
							</td>
							<td
								@click="toggleCheck(i, 'mixing')"
								@contextmenu="($event) => onCellClick({ column: 'mixing', id }, $event)">
								<BaseIcon
									class="mx-auto"
									:icon="mixing ? 'check' : 'uncheck'"
									:color="mixing ? 'green' : 'red'" />
							</td>
							<td
								@click="toggleCheck(i, 'mastering')"
								@contextmenu="($event) => onCellClick({ column: 'mastering', id }, $event)">
								<BaseIcon
									class="mx-auto"
									:icon="mastering ? 'check' : 'uncheck'"
									:color="mastering ? 'green' : 'red'" />
							</td>
							<td
								@click="togglePlay(id)"
								@contextmenu="($event) => onCellClick({ column: 'audio', id }, $event)">
								<BaseIcon
									v-if="audioPath"
									:key="currentTrackPlaying"
									class="mx-auto"
									:icon="
										currentTrackPlaying === id && !isPlaying
											? 'pause'
											: currentTrackPlaying === id && isPlaying
												? 'play'
												: 'play'
									"
									:color="lightMode ? 'black' : 'white'" />
								<div v-else class="text-red-400 font-bold">
									{{ $t('app.projects.no_audio') }}
								</div>
							</td>
							<td>
								<BaseButton icon="trash" color="danger" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<!-- Floating menu -->
		<AppFloatMenu v-if="isFloatMenuOpened" :client-x="clientX" :client-y="clientY" />
		<!-- Music player -->
		<AppMusicPlayer />
	</section>
</template>

<script setup lang="ts">
import { FloatMenuTarget } from '@/components/app/FloatMenu/FloatMenu.interfaces';

import { useScreenStore } from '@/store/screen';
import { useFloatMenuStore } from '@/store/floatMenu';
import { useAudioPlayerStore } from '@/store/audioPlayer';

import { Column } from '~/interfaces/production';

const { lightMode } = storeToRefs(useScreenStore());

const { isFloatMenuOpened, clientX, clientY } = storeToRefs(useFloatMenuStore());
const { setFloatMenuTarget, toggleFloatMenu, setPosition } = useFloatMenuStore();

const { setAudioSrc, play, pause } = useAudioPlayerStore();
const { isPlaying } = storeToRefs(useAudioPlayerStore());

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
