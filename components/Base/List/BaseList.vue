<template>
	<ul class="flex flex-col gap-5">
		<li v-for="{ text, value, prependIcon, removable } of items" :key="value" class="base-list">
			<div
				class="base-list__item"
				:class="{
					'bg-dark/50 text-white dark:bg-primary/10 border border-black dark:border-primary':
						value === selectedItem,
					'border border-transparent hover:bg-white/10': value !== selectedItem,
				}"
				@click="$emit('on-select-item', value)">
				<div class="flex gap-2.5">
					<BaseIcon
						v-if="prependIcon"
						:key="renderScreenKey"
						:icon="prependIcon"
						:size="20"
						:color="lightMode ? 'black' : 'white'" />
					<small>
						{{ text }}
					</small>
				</div>
			</div>
			<BaseIcon
				v-if="removable"
				flat
				clickable
				icon="trash"
				:size="20"
				color="red"
				@click="$emit('on-remove-item', value)" />
		</li>
	</ul>
</template>

<script setup lang="ts">
import { BaseListProps } from './BaseList.interfaces';
import { useScreenStore } from '~/store/screen';

defineProps<BaseListProps>();
defineEmits(['on-remove-item', 'on-select-item']);

const { lightMode, renderScreenKey } = storeToRefs(useScreenStore());
</script>

<style scoped>
.base-list {
	@apply flex justify-between gap-5 items-center;

	&__item {
		@apply p-2 cursor-pointer flex items-center justify-between w-full;
	}
}
</style>
