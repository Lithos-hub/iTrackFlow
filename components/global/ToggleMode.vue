<template>
	<button>
		<NuxtImg
			v-if="lightMode"
			src="/icons/moon.svg"
			alt="Toggle dark mode"
			width="40px"
			height="40px"
			@click="toggleMode" />
		<NuxtImg
			v-else
			src="/icons/sun.svg"
			alt="Toggle light mode"
			width="40px"
			height="40px"
			@click="toggleMode" />
	</button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const lightMode = ref(true);

const toggleMode = () => {
	lightMode.value = !lightMode.value;
	colorMode.preference = lightMode.value ? 'light' : 'dark';
};
</script>

<style scoped></style>
