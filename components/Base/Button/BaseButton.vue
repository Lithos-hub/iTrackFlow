<template>
	<button
		v-bind="$attrs"
		:disabled="disabled"
		data-testid="base-button"
		:class="`button button__${flat ? 'flat' : computedColor} button__${size} button__radius--${radius} button__${variant}`"
		:style="{
			border:
				(variant === 'stealth' || variant === 'outline') && `1px solid ${getTWColor(variant)}`,
			background: !flat && computedBackground,
			color: variant === 'outline' || variant === 'stealth' ? getTWColor(variant) : '',
		}">
		<div v-if="!loading && !success" class="flex items-center justify-center gap-2.5 text-sm">
			<!-- Left icon -->
			<div v-if="icon && iconLeft" class="pt-1">
				<BaseIcon
					data-testid="base-button--left-icon"
					:icon="icon"
					:size="20"
					:color="computedIconColor" />
			</div>
			<!-- Centered icon (no text) -->
			<div v-else-if="icon && !text && !iconLeft && !iconRight" class="pt-1">
				<BaseIcon
					data-testid="base-button--center-icon"
					:icon="icon"
					:size="20"
					:color="computedIconColor" />
			</div>
			<!-- Text or slot with whatever -->
			<slot v-if="!text" class="button__slot"></slot>
			<span v-else>{{ text }}</span>
			<!-- Right icon -->
			<div v-if="icon && iconRight" class="pt-1">
				<BaseIcon
					data-testid="base-button--right-icon"
					:icon="icon"
					:size="20"
					:color="computedIconColor" />
			</div>
		</div>
		<div v-else-if="loading && !success">
			<BaseSpinner
				data-testid="base-button--spinner"
				class="w-7 h-7 mx-auto"
				:color="computedIconColor" />
		</div>
		<div v-else-if="!loading && success" class="flex gap-2.5 justify-center">
			<small>{{ successText }}</small>
			<BaseIcon data-testid="base-button--success-icon" icon="check" :size="20" color="green" />
		</div>
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { BaseButtonProps } from './BaseButton.interfaces';
import { ColorName } from '@/interfaces';

const { iconColor, color, disabled, variant } = withDefaults(defineProps<BaseButtonProps>(), {
	color: 'primary',
	disabled: false,
	size: 'md',
	variant: 'solid',
	text: '',
	icon: '',
});

const { getTWColor } = useColor();

const computedIconColor = computed<ColorName | 'white'>(() => (iconColor as ColorName) || 'white');

const computedColor = computed(() => {
	if (disabled) return 'disabled';
	return color || 'white';
});

const computedBackground = computed(() => {
	if (variant === 'outline' || variant === 'link') return 'transparent';
	if (variant === 'stealth') return `${getTWColor(variant)}30`;
	if (
		['primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'danger'].includes(color)
	) {
		return color;
	}
	return getTWColor(variant);
});
</script>

<style lang="scss" scoped>
.button {
	@apply text-white hover:opacity-50 transition-all duration-200 ease-in-out active:scale-90 active:brightness-125 text-xs;

	&__default {
		@apply hover:opacity-100;
	}

	&__solid {
		@apply bg-inherit;
	}

	&__flat {
		@apply bg-transparent hover:bg-white/10 rounded-full aspect-square hover:opacity-100;
	}

	&__outline {
		@apply border-2 bg-opacity-0;
	}

	&__stealth {
		@apply bg-inherit border-none text-primary hover:text-white hover:brightness-125;
	}

	&__link {
		@apply bg-none border-none text-primary hover:text-white hover:brightness-125 font-bold underline;
	}

	&__primary {
		@apply bg-primary;
	}

	&__secondary {
		@apply bg-secondary;
	}

	&__tertiary {
		@apply bg-tertiary;
	}

	&__success {
		@apply bg-success;
	}

	&__info {
		@apply bg-info;
	}

	&__warning {
		@apply bg-warning;
	}

	&__danger {
		@apply bg-danger;
	}

	&__disabled {
		@apply bg-slate-600 text-slate-400 hover:opacity-100 active:scale-100 active:brightness-100;
	}

	&__xs {
		@apply px-2 py-1 text-xs;
	}

	&__sm {
		@apply px-3 py-1.5 text-sm;
	}

	&__md {
		@apply px-4 py-2 text-base;
	}

	&__lg {
		@apply px-5 py-2.5 text-lg;
	}

	&__xl {
		@apply px-8 py-3 text-lg;
	}

	&__radius--none {
		@apply rounded-none;
	}

	&__radius--sm {
		@apply rounded-[5px];
	}

	&__radius--md {
		@apply rounded-[8px];
	}

	&__radius--lg {
		@apply rounded-[12px];
	}

	&__radius--xl {
		@apply rounded-[16px];
	}

	&__radius--full {
		@apply rounded-full;
	}
}
</style>
