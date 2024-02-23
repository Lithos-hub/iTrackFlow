<template>
	<div class="flex flex-wrap gap-5 text-white">
		<ul class="flex flex-col gap-5">
			<li v-for="(item, i) of data" :key="item.id" class="flex">
				<!-- INDEX -->
				<p class="w-[40px]">{{ i + 1 }}</p>
				<!-- NAME + ARTISTS -->
				<slot name="name-artists" v-bind="item"></slot>
				<!-- DURATION -->
				<slot name="duration" v-bind="item"></slot>
				<!-- NAME -->
				<slot name="name" v-bind="item"></slot>
				<!-- ALBUM -->
				<slot name="album" v-bind="item"></slot>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { AlbumElement, ArtistsItem, TracksItem } from '@/interfaces';

interface Props {
	data: AlbumElement[] | TracksItem[] | ArtistsItem[];
}

defineProps<Props>();
</script>

<style scoped></style>
