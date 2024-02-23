<template>
	<div class="p-2 flex items-center gap-5 text-gray-500">
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
