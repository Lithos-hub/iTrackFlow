<template>
	<div class="flex flex-col w-full">
		<label v-if="label" class="m-2 font-medium">{{ label }}</label>
		<input
			v-if="!debounced"
			v-bind="$attrs"
			v-model="model"
			:class="`input input__${variant} border-${color}`" />
		<input
			v-else
			v-bind="$attrs"
			:class="`input input__${variant} border-${color}`"
			:value="model"
			@input="onDebouncedInput" />

		<small v-if="!valid && errorMessage" class="text-red-500 ml-3">{{ errorMessage }}</small>
	</div>
</template>

<script setup lang="ts">
import { Input } from './BaseInput.interfaces';

const { debounced } = withDefaults(defineProps<Input>(), {
	modelValue: '',
	variant: 'rounded',
});
const emit = defineEmits(['update:modelValue', 'input', 'change']);
const model = defineModel();

const onDebouncedInput = debounce((event: Event) => {
	emit('update:modelValue', (event.target as HTMLInputElement).value);
}, 1000);

watch(
	() => model.value,
	(value) => {
		emit('input', value);
		emit('change', value);
	},
);
</script>

<style lang="scss" scoped>
.input {
	@apply w-full px-5 py-2 focus:ring-2 focus:ring-primary bg-transparent border duration-75 focus:outline-none;

	&__default {
		@apply text-black dark:text-white bg-white dark:bg-dark;
	}

	&__underline {
		@apply text-black dark:text-white border-0 border-b focus:border-b-2;
	}

	&__bordered {
		@apply text-black dark:text-white border-2;
	}

	&__rounded {
		@apply text-black dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg;
	}

	&__filled {
		@apply text-black dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800;
	}
}
</style>
