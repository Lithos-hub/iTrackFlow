<template>
	<button>
		<BaseIcon v-if="lightMode" icon="moon" :size="19" color="white" @click="toggleDarkMode" />
		<BaseIcon v-else icon="sun" color="white" :size="19" @click="toggleDarkMode" />
	</button>
</template>

<script setup lang="ts">
import { useScreenStore } from '@/store/colorMode';

const { toggleDarkMode } = useScreenStore();
const { lightMode } = storeToRefs(useScreenStore());
</script>
