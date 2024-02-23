<template>
	<div class="flex">
		<small class="w-[40px]">#</small>
		<small
			v-for="{ label, width } of headers"
			:key="label"
			:style="{
				width: `${width}px`,
			}">
			{{ label }}
		</small>
	</div>
</template>

<script setup lang="ts">
interface Headers {
	label: string;
	width: number;
}

interface Props {
	headers: Headers[];
}
defineProps<Props>();
</script>
