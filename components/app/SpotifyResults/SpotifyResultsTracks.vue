<template>
	<AppSpotifyResultsLayout :data="data">
		<template #default="{ item, i }">
			<!-- INDEX -->
			<small class="text-gray-500 col-span-1">{{ i + 1 }}</small>
			<!-- NAME -->
			<div class="flex flex-col col-span-2">
				<small>{{ (item as TracksItem).name }}</small>
				<!-- ARTISTS -->
				<small class="text-xs text-gray-500">{{ (item as TracksItem).artists[0].name }}</small>
			</div>
			<!-- ALBUM -->
			<small class="text-gray-500 col-span-6">
				{{ (item as TracksItem).album.name }}
			</small>
			<!-- DURATION -->
			<small class="text-gray-500 col-span-1">
				{{ formatMillisToMinutesAndSeconds((item as TracksItem).duration_ms) }}
			</small>
		</template>
	</AppSpotifyResultsLayout>
</template>

<script setup lang="ts">
import { TracksItem } from '~/interfaces';

interface Props {
	data: TracksItem[];
}

defineProps<Props>();
</script>
