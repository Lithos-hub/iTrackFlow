<template>
	<div :key="updateKey" class="bg-dark rounded-full">
		<BaseButton :icon="lightMode ? 'moon' : 'sun'" color="white" flat @click="toggleDarkMode" />
	</div>
</template>

<script setup lang="ts">
import { useScreenStore } from '@/store/screen';

const { toggleDarkMode } = useScreenStore();
const { lightMode } = storeToRefs(useScreenStore());

const updateKey = ref(0);

watch(lightMode, () => (updateKey.value += 1));
</script>
