<template>
	<ul v-if="data" class="flex flex-col">
		<li
			v-for="({ id, images, name, artists, release_date }, i) of data"
			:key="id"
			class="result-list__item">
			<!-- INDEX -->
			<small class="text-gray-500 col-span-1">{{ i + 1 }}</small>
			<!-- IMAGE -->
			<img v-if="images" :src="images[0].url" alt="Album cover" class="col-span-1" />
			<!-- NAME -->
			<div class="flex flex-col col-span-6">
				<small>{{ name }}</small>
				<!-- ARTISTS -->
				<small class="text-xs text-gray-500">{{ artists[0].name }}</small>
			</div>
			<!-- RELEASE DATE -->
			<small class="text-gray-500 col-span-2">
				{{ release_date }}
			</small>
			<!-- ACTIONS -->
			<div class="flex items-center col-span-2">
				<BaseButton flat icon="add" icon-color="green" @click="$emit('on-add', id)" />
				<BaseButton flat icon="trash" icon-color="red" @click="$emit('on-remove', id)" />
			</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { AlbumElement } from '@/interfaces';

interface Props {
	data: AlbumElement[];
}

defineProps<Props>();
defineEmits(['on-add', 'on-remove']);
</script>
