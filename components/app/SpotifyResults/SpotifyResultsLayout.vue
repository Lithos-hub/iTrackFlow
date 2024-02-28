<template>
	<ul class="flex flex-col">
		<li v-for="(item, i) of data" :key="item.id" class="flex">
			<div class="result-list__item w-full" @click="goTo(item.external_urls.spotify)">
				<!-- INDEX -->
				<slot :item="item" :i="i" />
			</div>
			<!-- ACTIONS -->
			<div class="flex items-center col-span-2 ml-auto">
				<BaseButton flat icon="add" icon-color="green" @click="$emit('on-add', item)" />
				<BaseButton flat icon="trash" icon-color="red" @click="$emit('on-remove', item)" />
			</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { AlbumsItem, TracksItem, ArtistsItem } from '@/interfaces';

interface Props {
	data: AlbumsItem[] | TracksItem[] | ArtistsItem[];
}

defineProps<Props>();
defineEmits(['on-add', 'on-remove']);

const goTo = (href: string) => window.open(href, '_blank');
</script>
