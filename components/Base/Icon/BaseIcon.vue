<template>
	<div :key="updateKey">
		<NuxtSvgIcon :font-size="size" :name="icon" :fill="iconColor" />
	</div>
</template>

<script setup lang="ts">
import { IconProps } from './BaseIcon.interfaces';
import { useScreenStore } from '@/store/colorMode';

const { icon, color } = withDefaults(defineProps<IconProps>(), {
	color: 'white',
	viewBox: '0 0 24 24',
	size: 25,
});

const iconColor = computed(() => getTailwindColor(color));

const { lightMode } = storeToRefs(useScreenStore());

const updateKey = ref(Math.random());

watch(lightMode, () => (updateKey.value = Math.random()));
</script>
