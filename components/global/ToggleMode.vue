<template>
	<button>
		<NuxtImg
			v-if="lightMode"
			src="/icons/moon.svg"
			alt="Toggle dark mode"
			width="30px"
			height="30px"
			@click="toggleDarkMode" />
		<NuxtImg
			v-else
			src="/icons/sun.svg"
			alt="Toggle light mode"
			width="35px"
			height="35px"
			@click="toggleDarkMode" />
	</button>
</template>

<script setup lang="ts">
import { useScreenStore } from '@/store/screenStore';

const { toggleDarkMode } = useScreenStore();
const { lightMode } = storeToRefs(useScreenStore());
</script>
