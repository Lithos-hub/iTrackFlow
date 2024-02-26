<template>
	<div class="flex gap-5 text-white">
		<ul v-if="data" class="flex flex-col gap-5">
			<li
				v-for="({ id, album, name, artists, duration_ms }, i) of data"
				:key="id"
				class="result-list__item">
				<!-- INDEX -->
				<small class="text-gray-500">{{ i + 1 }}</small>
				<!-- NAME -->
				<div class="flex flex-col w-[200px]">
					<small>{{ name }}</small>
					<!-- ARTISTS -->
					<small class="text-xs text-gray-500">{{ artists[0].name }}</small>
				</div>
				<!-- ALBUM -->
				<small class="text-gray-500 w-[300px]">
					{{ album.name }}
				</small>
				<!-- DURATION -->
				<small class="text-gray-500 ml-auto w-[100px] text-right">
					{{ formatDuration(duration_ms) }}
				</small>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { TracksItem } from '@/interfaces';

interface Props {
	data: TracksItem[];
}

defineProps<Props>();

const formatDuration = (ms: number) => {
	const minutes = Math.floor(ms / 60000);
	const seconds = ((ms % 60000) / 1000).toFixed(0);
	return `${minutes}:${parseInt(seconds) < 10 ? '0' : ''}${seconds}`;
};
</script>

<style scoped>
.result-list__item {
	@apply flex justify-between items-center gap-5 p-2 hover:bg-white/10;
}
</style>
