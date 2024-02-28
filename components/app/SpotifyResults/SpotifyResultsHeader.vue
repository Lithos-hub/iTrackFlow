<template>
	<div class="grid grid-cols-12 text-white/50">
		<small>#</small>
		<small v-for="{ label, styles } of headers" :key="label" class="px-2.5" :class="styles">
			{{ label }}
		</small>
		<small class="col-span-2 px-2.5 text-center">Actions</small>
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
