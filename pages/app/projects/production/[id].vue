<template>
	<section class="h-[calc(100vh-61px)] w-screen bg-white dark:bg-dark">
		<div class="default_margin flex flex-col gap-5">
			<h2>{{ projectName }}</h2>
			<table>
				<thead>
					<tr>
						<th>Track name</th>
						<th>Composition</th>
						<th>Recording</th>
						<th>Mixing</th>
						<th>Mastering</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="{ id, trackName, composition, recording, mixing, mastering } in trackList"
						:key="id">
						<td>{{ trackName }}</td>
						<td>{{ composition }}</td>
						<td>{{ recording }}</td>
						<td>{{ mixing }}</td>
						<td>{{ mastering }}</td>
						<td>
							<BaseButton icon="remove" color="danger" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

<script setup lang="ts">
const projectName = 'Project name';

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
</script>

<style lang="scss" scoped>
table {
	width: 100%;
	border-collapse: collapse;

	& thead {
		@apply bg-primary dark:bg-primary/10 dark:border dark:border-primary;

		& th {
			@apply text-white;
			padding: 1rem;
			text-align: left;
		}
	}

	& tbody {
		& tr {
			& td {
				@apply p-5 border-b border-primary/10;
			}
		}
	}
}
</style>
