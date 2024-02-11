<template>
	<div class="flex flex-col w-full">
		<label v-if="label" class="mx-5 my-2 font-medium text-sm">
			{{ label }}
		</label>
		<input
			v-if="!debounced"
			v-bind="$attrs"
			v-model="model"
			data-testid="base-input__default"
			:class="`input input__${variant} ${!noOutline ? 'focus:ring-2' : ''}`"
			:style="{
				borderColor: tailwindColor,
				color: textColor,
				outlineColor: tailwindColor,
			}" />
		<input
			v-else
			v-bind="$attrs"
			data-testid="base-input__debounced"
			:class="`input input__${variant} ${!noOutline && 'focus:ring-2'}`"
			:value="model"
			:style="{
				borderColor: tailwindColor,
				color: textColor,
				outlineColor: tailwindColor,
			}"
			@input="onDebouncedInput" />

		<small v-if="!valid && errorMessage" class="text-red-500 ml-3">{{ errorMessage }}</small>
	</div>
</template>

<script setup lang="ts">
import { BaseInputProps } from './BaseInput.interfaces';
import { useScreenStore } from '@/store/screen';

const { lightMode } = storeToRefs(useScreenStore());

const { debounced, color } = withDefaults(defineProps<BaseInputProps>(), {
	modelValue: '',
	variant: 'bordered',
});

const emit = defineEmits(['update:modelValue', 'input', 'change']);
const model = defineModel<string | number>();

const onDebouncedInput = debounce((event: Event) => {
	emit('update:modelValue', (event.target as HTMLInputElement).value);
}, 1000);

const textColor = computed(() => {
	if (!color) {
		return lightMode?.value ? '#000000' : '#ffffff';
	} else if (color === 'dark') {
		return '#00000090';
	} else if (color === 'light') {
		return '#ffffff90';
	}

	return lightMode?.value ? '#000000' : '#ffffff';
});

const tailwindColor = computed<string>(() => {
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
		case 'dark':
			colorReference = '#00000050';
			break;
		case 'light':
			colorReference = '#ffffff50';
			break;
		default:
			colorReference = lightMode?.value ? '#00000050' : '#ffffff50';
			break;
	}

	if (colorReference.charAt(0) === '#') {
		return colorReference;
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
	@apply w-full px-5 py-2 bg-transparent transition-all duration-75 outline-0 text-sm font-light;

	&__default {
		@apply text-black dark:text-white bg-white dark:bg-dark;
	}

	&__underline {
		@apply text-black dark:text-white border-0 border-b focus:border-none;
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
