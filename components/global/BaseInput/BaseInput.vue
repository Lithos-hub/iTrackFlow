<template>
	<div class="flex flex-col w-full">
		<label v-if="label" class="m-2 font-medium">{{ label }}</label>
		<input
			v-bind="$attrs"
			class="input"
			:value="modelValue"
			@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
		<small v-if="!valid && errorMessage" class="text-red-500 ml-3">{{ errorMessage }}</small>
	</div>
</template>

<script setup lang="ts">
import { Input } from './BaseInput.interfaces';

defineEmits(['update:modelValue']);
withDefaults(defineProps<Input>(), {
	modelValue: '',
});
</script>

<style lang="scss" scoped>
.input {
	@apply w-full rounded-lg border border-gray-300 px-5 py-2 outline-none focus:ring-2 focus:ring-primary bg-transparent;
}
</style>
