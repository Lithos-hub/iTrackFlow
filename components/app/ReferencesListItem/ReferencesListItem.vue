<template>
	<ul class="flex flex-col max-h-[500px] overflow-y-auto">
		<li class="flex justify-between items-center gap-20">
			<div class="flex gap-5 items-center">
				<small
					:class="{
						'text-green-500 bg-green-500/10 border-green-500/50 reference__list--item':
							item.type === 'album',
						'text-blue-500 bg-blue-500/10 border-blue-500/50 reference__list--item':
							item.type === 'artist',
						'text-yellow-500 bg-yellow-500/10 border-yellow-500/50 reference__list--item':
							item.type === 'track',
					}">
					{{ item.type }}
				</small>
				<div class="text-sm flex flex-col min-w-[475px]">
					<strong>{{ item.name }}</strong>
					<small v-if="(item as AlbumsItem).artists">
						{{ (item as AlbumsItem).artists[0].name }}
					</small>
				</div>
			</div>
			<BaseButton icon="trash" flat icon-color="red" @click="$emit('on-remove', item.id)" />
		</li>
	</ul>
</template>

<script setup lang="ts">
import { ReferencesListProps } from './ReferencesListItem.interfaces';
import { AlbumsItem } from '@/interfaces';
defineProps<ReferencesListProps>();
defineEmits(['on-remove']);
</script>

<style lang="scss" scoped>
.reference__list--item {
	@apply flex flex-col justify-center items-center px-5 uppercase py-1 text-xs rounded-full border;
}
</style>
