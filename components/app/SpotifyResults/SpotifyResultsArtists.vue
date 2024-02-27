<template>
	<ul v-if="data" class="flex flex-col">
		<li v-for="({ id, images, name }, i) of data" :key="id" class="result-list__item">
			<!-- INDEX -->
			<small class="text-gray-500 col-span-1">{{ i + 1 }}</small>
			<!-- IMAGE -->
			<img
				v-if="images"
				:src="images.length ? images[0]?.url : 'https://via.placeholder.com/50'"
				alt="Album cover"
				class="col-span-1" />
			<!-- NAME -->
			<div class="flex flex-col col-span-8">
				<small>{{ name }}</small>
			</div>
			<!-- ACTIONS -->
			<div class="flex items-center col-span-2">
				<BaseButton flat icon="add" icon-color="green" @click="$emit('on-add', id)" />
				<BaseButton flat icon="trash" icon-color="red" @click="$emit('on-remove', id)" />
			</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { ArtistsItem } from '@/interfaces';

interface Props {
	data: ArtistsItem[];
}

defineProps<Props>();
defineEmits(['on-add', 'on-remove']);
</script>
