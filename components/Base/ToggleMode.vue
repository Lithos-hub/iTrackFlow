<template>
	<button>
		<BaseIcon v-if="lightMode" icon="moon" color="white" @click="toggleDarkMode" />
		<BaseIcon v-else icon="sun" color="white" @click="toggleDarkMode" />
	</button>
</template>

<script setup lang="ts">
import { useScreenStore } from '@/store/screen';

const { toggleDarkMode } = useScreenStore();
const { lightMode } = storeToRefs(useScreenStore());
</script>
