<template>
	<div>
		<small class="absolute top-0 left-1 text-black">{{ label }}</small>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	label: string;
}>();
</script>
