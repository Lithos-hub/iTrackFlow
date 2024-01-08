<template>
	<section class="h-[calc(100vh-61px)] w-screen bg-white dark:bg-dark">
		<section class="default_margin flex flex-col gap-5 py-5">
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
					<tr v-for="({ composition, recording, mixing, mastering }, i) of trackList" :key="i">
						<td>
							<BaseInput v-model="trackList[i].trackName" variant="underline" color="primary" />
						</td>
						<td @click="toggleCheck(i, 'composition')">
							<BaseIcon
								class="mx-auto"
								:icon="composition ? 'check' : 'uncheck'"
								:color="composition ? 'green' : 'red'" />
						</td>
						<td @click="toggleCheck(i, 'recording')">
							<BaseIcon
								class="mx-auto"
								:icon="recording ? 'check' : 'uncheck'"
								:color="recording ? 'green' : 'red'" />
						</td>
						<td @click="toggleCheck(i, 'mixing')">
							<BaseIcon
								class="mx-auto"
								:icon="mixing ? 'check' : 'uncheck'"
								:color="mixing ? 'green' : 'red'" />
						</td>
						<td @click="toggleCheck(i, 'mastering')">
							<BaseIcon
								class="mx-auto"
								:icon="mastering ? 'check' : 'uncheck'"
								:color="mastering ? 'green' : 'red'" />
						</td>
						<td>
							<BaseButton icon="play" color="none" variant="default" />
						</td>
						<td>
							<BaseButton icon="trash" color="danger" />
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	</section>
</template>

<script setup lang="ts">
type Column = 'composition' | 'recording' | 'mixing' | 'mastering';

const projectName = 'Project #n';
const tableKey = ref(0);
const trackList = ref([
	{
		id: 1,
		trackName: 'Track name #1',
		composition: true,
		recording: true,
		mixing: false,
		mastering: false,
	},
	{
		id: 2,
		trackName: 'Track name #2',
		composition: true,
		recording: true,
		mixing: true,
		mastering: false,
	},
	{
		id: 3,
		trackName: 'Track name #3',
		composition: true,
		recording: true,
		mixing: true,
		mastering: true,
	},
]);

const toggleCheck = (index: number, column: Column) => {
	trackList.value[index][column] = !trackList.value[index][column];

	// TODO: update in DB

	tableKey.value++;
};

onMounted(async () => {
	const { data } = await useFetch('/api/file-system');
	console.log(data);
});
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
