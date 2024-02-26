<template>
	<div class="flex gap-5 text-white">
		<ul v-if="data" class="flex flex-col gap-5">
			<li
				v-for="({ id, images, name, artists, release_date }, i) of data"
				:key="id"
				class="result-list__item">
				<!-- INDEX -->
				<small class="text-gray-500">{{ i + 1 }}</small>
				<!-- IMAGE -->
				<img v-if="images" :src="images[0].url" alt="Album cover" class="h-[50px]" />
				<!-- NAME -->
				<div class="flex flex-col w-full">
					<small>{{ name }}</small>
					<!-- ARTISTS -->
					<small class="text-xs text-gray-500 w-full">{{ artists[0].name }}</small>
				</div>
				<!-- RELEASE DATE -->
				<small class="text-gray-500 ml-auto w-[200px] text-right">
					{{ release_date }}
				</small>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { AlbumElement } from '@/interfaces';

interface Props {
	data: AlbumElement[];
}

defineProps<Props>();
</script>

<style scoped>
.result-list__item {
	@apply flex justify-between items-center gap-5 p-2 hover:bg-white/10;
}
</style>
