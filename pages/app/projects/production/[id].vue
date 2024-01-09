<template>
	<section class="h-[calc(100vh-61px)] w-screen bg-white dark:bg-dark">
		<section class="default_margin py-5">
			<BaseButton
				variant="stealth"
				color="secondary"
				icon="chevron-rounded-left"
				icon-left
				class="my-5"
				@click="$router.back()">
				Go back
			</BaseButton>
			<div class="flex flex-col gap-5">
				<h3>
					Project name:
					<span class="font-bold">{{ projectName }}</span>
				</h3>

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
								<BaseInput v-model="trackList[i].trackName" variant="underline" color="primary" />
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
									:key="trackPlaying"
									class="mx-auto"
									:icon="trackPlaying === id ? 'pause' : 'play'"
									:color="lightMode ? 'black' : 'white'" />
								<div v-else class="text-red-400 font-bold">No audio available</div>
							</td>
							<td>
								<BaseButton icon="trash" color="danger" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
		<!-- Floating menu -->
		<AppFloatMenu v-if="isFloatMenuOpened" :client-x="clientX" :client-y="clientY" />
	</section>
</template>

<script setup lang="ts">
import { FloatMenuTarget } from '@/components/app/FloatMenu/FloatMenu.interfaces';

import { useScreenStore } from '@/store/screenStore';
import { useFloatMenuStore } from '@/store/floatMenuStore';

type Column = 'composition' | 'recording' | 'mixing' | 'mastering';

const projectName = 'Project #n';

const { lightMode } = storeToRefs(useScreenStore());

const { isFloatMenuOpened, clientX, clientY } = storeToRefs(useFloatMenuStore());
const { setFloatMenuTarget, toggleFloatMenu, setPosition } = useFloatMenuStore();

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
		audioPath: 'path',
	},
	{
		id: 3,
		trackName: 'Track name #3',
		composition: true,
		recording: true,
		mixing: true,
		mastering: true,
		audioPath: 'path',
	},
]);
const trackPlaying = ref<number | undefined>(undefined);

const toggleCheck = (index: number, column: Column) => {
	trackList.value[index][column] = !trackList.value[index][column];

	// TODO: update in DB
	tableKey.value++;
};

const togglePlay = (index: number) => {
	if (trackPlaying.value === index) {
		trackPlaying.value = 0;
	} else {
		trackPlaying.value = index;
	}
};

const onCellClick = ({ column, id }: FloatMenuTarget, event) => {
	event.preventDefault();
	setFloatMenuTarget({ column, id });
	setPosition(event.clientX, event.clientY);
	toggleFloatMenu();
};

watch(lightMode, () => tableKey.value++);
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
