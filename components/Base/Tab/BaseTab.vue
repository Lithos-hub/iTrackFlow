<template>
	<div class="flex gap-2.5">
		<small
			v-for="{ label, value } of options"
			:key="value"
			class="tab"
			:class="{
				'bg-[#1Db954]': selectedTab === value,
				'bg-[#242424] hover:bg-[#3a3a3a]': selectedTab !== value,
			}"
			@click="$emit('on-select', value)">
			{{ label }}
		</small>
	</div>
</template>

<script setup lang="ts">
interface Options {
	label: string;
	value: string;
}

defineProps<{
	options: Options[];
	selectedTab: string;
}>();

defineEmits(['on-select']);
</script>

<style scoped>
.tab {
	@apply p-2 rounded-full px-5  cursor-pointer transition-all;
}
</style>
