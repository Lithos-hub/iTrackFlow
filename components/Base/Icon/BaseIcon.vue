<template>
	<div
		:key="renderScreenKey"
		data-testid="base-icon"
		:class="{
			'cursor-pointer hover:scale-105': clickable,
		}">
		<NuxtSvgIcon :font-size="size" :name="icon" :fill="iconColor" />
	</div>
</template>

<script setup lang="ts">
import { IconProps } from './BaseIcon.interfaces';
import { useScreenStore } from '@/store/screen';

const { icon, color } = withDefaults(defineProps<IconProps>(), {
	color: 'white',
	viewBox: '0 0 24 24',
	size: 25,
});

const iconColor = computed(() => getTailwindColor(color));

const { renderScreenKey } = storeToRefs(useScreenStore());
</script>
