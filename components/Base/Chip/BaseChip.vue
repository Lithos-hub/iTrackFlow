<template>
	<div>
		<div
			data-testid="base-chip"
			:class="`Chip Chip__${variant} ${closable && 'active:scale-110'}`"
			:style="{
				borderColor: tailwindColor,
			}">
			<BaseIcon
				v-if="prependIcon"
				:icon="prependIcon"
				:color="computedVariantColor"
				class="h-6 w-6" />
			<small>
				<slot v-if="!content" />
				<span v-else>{{ content }}</span>
			</small>
			<BaseIcon
				v-if="appendIcon && !closable"
				:icon="appendIcon"
				:color="computedVariantColor"
				class="h-6 w-6" />
			<BaseIcon
				v-if="closable"
				data-testid="base-chip__close"
				icon="cross"
				class="h-5 w-5 p-1 cursor-pointer rounded-full hover:bg-white/10 transition-all"
				@click="$emit('close')" />
		</div>
	</div>
</template>

<script script setup lang="ts">
import { computed, ComputedRef } from 'vue';

import { Chip } from './BaseChip.interfaces';
import { ColorName } from '@/interfaces';

const { variant } = withDefaults(defineProps<Chip>(), {
	variant: 'default',
	closable: false,
	prependIcon: undefined,
	appendIcon: undefined,
	content: '',
});

defineEmits(['close']);

const computedVariantColor: ComputedRef<ColorName> = computed(() => {
	switch (variant) {
		case 'default':
			return 'warmGray';
		case 'primary':
			return 'blue';
		case 'secondary':
			return 'rose';
		case 'success':
			return 'green';
		case 'danger':
			return 'red';
		case 'warning':
			return 'orange';
		case 'info':
			return 'indigo';
		case 'light':
			return 'white';
		case 'dark':
			return 'black';
		default:
			return 'warmGray';
	}
});

const tailwindColor = computed(() => getTailwindColor(computedVariantColor.value));
</script>

<style scoped lang="scss">
.Chip {
	@apply rounded-full px-3 min-w-[70px] border py-1 flex justify-center items-center gap-1 brightness-125 transition-all;

	&__default {
		@apply bg-slate-50/10 text-slate-50;
	}

	&__primary {
		@apply bg-primary/10 text-primary;
	}

	&__secondary {
		@apply bg-secondary/10 text-secondary;
	}

	&__success {
		@apply bg-success/10 text-success;
	}

	&__danger {
		@apply bg-danger/10 text-danger;
	}

	&__warning {
		@apply bg-warning/10 text-warning;
	}

	&__info {
		@apply bg-info/10 text-info;
	}

	&__light {
		@apply bg-white text-black font-bold;
	}

	&__dark {
		@apply bg-dark/50 text-white border border-slate-50/10;
	}
}
</style>
