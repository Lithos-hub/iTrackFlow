<template>
	<ul v-if="data" class="flex flex-col">
		<li
			v-for="(item, i) of data"
			:key="item.id"
			class="result-list__item"
			@click="goTo(item.external_urls.spotify)">
			<!-- INDEX -->
			<small class="text-gray-500 col-span-1">{{ i + 1 }}</small>
			<!-- IMAGE -->
			<img
				v-if="item.images"
				:src="item.images.length ? item.images[0]?.url : 'https://via.placeholder.com/50'"
				alt="Album cover"
				class="col-span-1" />
			<!-- NAME -->
			<div class="flex flex-col col-span-8">
				<small>{{ item.name }}</small>
			</div>
			<!-- ACTIONS -->
			<div class="flex items-center col-span-2">
				<BaseButton flat icon="add" icon-color="green" @click="$emit('on-add', item)" />
				<BaseButton flat icon="trash" icon-color="red" @click="$emit('on-remove', item)" />
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

const goTo = (href: string) => window.open(href, '_blank');
</script>
