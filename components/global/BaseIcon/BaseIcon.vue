<template>
	<NuxtSvgIcon :font-size="size" :name="icon" :fill="iconColor" />
</template>

<script setup lang="ts">
import { Icon } from './BaseIcon.interfaces';

const { icon, color } = withDefaults(defineProps<Icon>(), {
	color: 'white',
	viewBox: '0 0 24 24',
	size: 25,
});

const iconColor = computed(() => getTailwindColor(color));
</script>
