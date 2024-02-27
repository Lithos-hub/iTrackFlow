<template>
	<div class="p-2 grid grid-cols-12 gap-5 text-white/50">
		<small>#</small>
		<small v-for="{ label, styles } of headers" :key="label" :class="styles">
			{{ label }}
		</small>
	</div>
</template>

<script setup lang="ts">
interface Headers {
	label: string;
	styles?: string;
}

interface Props {
	headers: Headers[];
}
defineProps<Props>();
</script>
