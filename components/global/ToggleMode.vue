<template>
	<button>
		<BaseIcon v-if="lightMode" icon="moon" color="white" class="w-8 h-8" @click="toggleDarkMode" />
		<BaseIcon v-else icon="sun" color="white" class="w-8 h-8" @click="toggleDarkMode" />
	</button>
</template>

<script setup lang="ts">
import { useScreenStore } from '@/store/screenStore';

const { toggleDarkMode } = useScreenStore();
const { lightMode } = storeToRefs(useScreenStore());
</script>
