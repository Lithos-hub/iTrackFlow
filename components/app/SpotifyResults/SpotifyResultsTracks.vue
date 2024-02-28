<template>
	<ul v-if="data" class="flex flex-col">
		<li v-for="(item, i) of data" :key="item.id" class="result-list__item">
			<!-- INDEX -->
			<small class="text-gray-500 col-span-1">{{ i + 1 }}</small>
			<!-- NAME -->
			<div class="flex flex-col col-span-4">
				<small>{{ item.name }}</small>
				<!-- ARTISTS -->
				<small class="text-xs text-gray-500">{{ item.artists[0].name }}</small>
			</div>
			<!-- ALBUM -->
			<small class="text-gray-500 col-span-4">
				{{ item.album.name }}
			</small>
			<!-- DURATION -->
			<small class="text-gray-500 col-span-1">
				{{ formatDuration(item.duration_ms) }}
			</small>
			<!-- ACTIONS -->
			<div class="flex items-center col-span-2">
				<BaseButton flat icon="add" icon-color="green" @click="$emit('on-add', item)" />
				<BaseButton flat icon="trash" icon-color="red" @click="$emit('on-remove', item)" />
			</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { TracksItem } from '@/interfaces';

interface Props {
	data: TracksItem[];
}

defineProps<Props>();
defineEmits(['on-add', 'on-remove']);

const formatDuration = (ms: number) => {
	const minutes = Math.floor(ms / 60000);
	const seconds = ((ms % 60000) / 1000).toFixed(0);
	return `${minutes}:${parseInt(seconds) < 10 ? '0' : ''}${seconds}`;
};
</script>
