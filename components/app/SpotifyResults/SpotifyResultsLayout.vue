<template>
	<ul class="flex flex-col">
		<div v-for="(item, i) of data" :key="item.id" class="flex">
			<a class="flex" :href="item.external_urls.spotify" target="_blank">
				<div class="result-list__item w-full">
					<!-- TODO: Refactor to apply Interface Segregation Interface -->
					<slot :item="item" :i="i" />
				</div>
			</a>
			<!-- ACTIONS -->
			<div class="flex items-center col-span-2 ml-auto">
				<BaseButton flat icon="add" icon-color="green" @click="$emit('on-add', item)" />
				<BaseButton flat icon="trash" icon-color="red" @click="$emit('on-remove', item)" />
			</div>
		</div>
	</ul>
</template>

<script setup lang="ts">
import { AlbumsItem, TracksItem, ArtistsItem } from '@/interfaces';

interface Props {
	data: AlbumsItem[] | TracksItem[] | ArtistsItem[];
}

defineProps<Props>();
defineEmits(['on-add', 'on-remove']);
</script>
