<template>
	<AppSpotifyResultsLayout :data="data">
		<template #default="{ item, i }">
			<!-- INDEX -->
			<small class="text-gray-500 col-span-1 text-center">{{ i + 1 }}</small>
			<!-- IMAGE -->
			<img
				:src="
					(item as ArtistsItem).images.length
						? (item as ArtistsItem).images[0]?.url
						: 'https://via.placeholder.com/50'
				"
				alt="Album cover"
				class="col-span-1" />
			<!-- NAME -->
			<div class="flex flex-col col-span-8">
				<small>{{ item.name }}</small>
			</div>
		</template>
	</AppSpotifyResultsLayout>
</template>

<script setup lang="ts">
import { ArtistsItem } from '@/interfaces';

interface Props {
	data: ArtistsItem[];
}

defineProps<Props>();
</script>
