<template>
	<AppSpotifyResultsLayout :data="data">
		<template #default="{ item, i }">
			<!-- INDEX -->
			<small class="text-gray-500 col-span-1">{{ i + 1 }}</small>
			<!-- IMAGE -->
			<img
				v-if="(item as AlbumsItem).images"
				:src="(item as AlbumsItem).images[0].url"
				alt="Album cover"
				class="col-span-2" />
			<!-- NAME -->
			<div class="flex flex-col col-span-5">
				<small>{{ item.name }}</small>
				<!-- ARTISTS -->
				<small class="text-xs text-gray-500">{{ (item as AlbumsItem).artists[0].name }}</small>
			</div>
			<!-- RELEASE DATE -->
			<small class="text-gray-500 col-span-2">
				{{ (item as AlbumsItem).release_date }}
			</small>
		</template>
	</AppSpotifyResultsLayout>
</template>

<script setup lang="ts">
import { AlbumsItem } from '@/interfaces';

interface Props {
	data: AlbumsItem[];
}

defineProps<Props>();
</script>
