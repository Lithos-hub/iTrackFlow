<template>
	<button>
		<BaseIcon v-if="lightMode" icon="moon" color="gray" @click="toggleDarkMode" />
		<BaseIcon v-else icon="sun" color="yellow" @click="toggleDarkMode" />
	</button>
</template>

<script setup lang="ts">
import { useScreenStore } from '@/store/screen';

const { toggleDarkMode } = useScreenStore();
const { lightMode } = storeToRefs(useScreenStore());
</script>
~/store/screen
