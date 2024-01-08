<template>
	<NuxtSvgIcon :font-size="25" :name="icon" :fill="iconColor" />
</template>

<script setup lang="ts">
import { Icon } from './BaseIcon.interfaces';

const { icon, color } = withDefaults(defineProps<Icon>(), {
	color: 'white',
	viewBox: '0 0 24 24',
});

const iconColor = computed(() => getTailwindColor(color));
</script>
