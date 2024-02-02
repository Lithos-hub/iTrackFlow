<template>
	<div class="flex flex-col w-full">
		<client-only>
			<label v-if="label" class="mx-5 my-2 font-medium text-sm">{{ label }}</label>
			<input
				v-if="!debounced"
				v-bind="$attrs"
				v-model="model"
				:class="`input input__${variant} ${!noOutline ? 'focus:ring-2' : ''}`"
				:style="{
					borderColor: tailwindColor,
					color: tailwindColor,
					outlineColor: tailwindColor,
				}" />
			<input
				v-else
				v-bind="$attrs"
				:class="`input input__${variant} ${!noOutline && 'focus:ring-2'}`"
				:value="model"
				:style="{
					borderColor: tailwindColor,
					color: tailwindColor,
					outlineColor: tailwindColor,
				}"
				@input="onDebouncedInput" />

			<small v-if="!valid && errorMessage" class="text-red-500 ml-3">{{ errorMessage }}</small>
		</client-only>
	</div>
</template>

<script setup lang="ts">
import { Input } from './BaseInput.interfaces';
import { useScreenStore } from '~/store/screen';

const { lightMode } = storeToRefs(useScreenStore());

const { debounced, color } = withDefaults(defineProps<Input>(), {
	modelValue: '',
	variant: 'bordered',
});

const emit = defineEmits(['update:modelValue', 'input', 'change']);
const model = defineModel<string | number>();

const onDebouncedInput = debounce((event: Event) => {
	emit('update:modelValue', (event.target as HTMLInputElement).value);
}, 1000);

const tailwindColor = computed(() => {
	let colorReference;

	switch (color) {
		case 'primary':
			colorReference = 'blue';
			break;
		case 'secondary':
			colorReference = 'pink';
			break;
		case 'tertiary':
			colorReference = 'orange';
			break;
		case 'success':
			colorReference = 'green';
			break;
		case 'info':
			colorReference = 'blue';
			break;
		case 'warning':
			colorReference = 'orange';
			break;
		case 'danger':
			colorReference = 'red';
			break;
		case 'none':
			colorReference = 'transparent';
			break;
		default:
			colorReference = lightMode.value ? 'black' : 'white';
			break;
	}

	return getTailwindColor(colorReference);
});

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
	@apply w-full px-5 py-2 bg-transparent duration-75 outline-0;

	&__default {
		@apply text-black dark:text-white bg-white dark:bg-dark;
	}

	&__underline {
		@apply text-black dark:text-white border-0 border-b focus:border-b-2;
	}

	&__bordered {
		@apply text-black dark:text-white border;
	}

	&__rounded {
		@apply text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg;
	}

	&__filled {
		@apply text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800;
	}
}
</style>
