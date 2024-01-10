<template>
	<button
		v-bind="$attrs"
		:disabled="disabled"
		data-testid="iui-button"
		:class="`button button__${computedColor} button__${size} button__radius--${radius} button__${variant}`"
		:style="{
			border:
				variant === 'outline' ? `1px solid ${tailwindColor}` : variant === 'stealth' ? 'none' : '',
			background:
				variant === 'outline' ? 'transparent' : variant === 'stealth' ? `${tailwindColor}30` : '',
			color: variant === 'outline' ? tailwindColor : variant === 'stealth' ? tailwindColor : '',
		}">
		<div class="flex items-center justify-center gap-2.5">
			<!-- Left icon -->
			<div v-if="icon && iconLeft" class="pt-1">
				<BaseIcon :icon="icon" :size="24" />
			</div>
			<!-- Center icon (no text) -->
			<div v-else-if="icon && !text && !iconLeft && !iconRight" class="pt-1">
				<BaseIcon :icon="icon" :size="24" />
			</div>
			<!-- Text or slot with whatever -->
			<slot v-if="!text" class="button__slot"></slot>
			<span v-else>{{ text }}</span>
			<!-- Right icon -->
			<div v-if="icon && iconRight" class="pt-1">
				<BaseIcon :icon="icon" :size="24" />
			</div>
		</div>
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Button } from './BaseButton.interfaces';

const { color, disabled, variant } = withDefaults(defineProps<Button>(), {
	color: 'primary',
	disabled: false,
	size: 'md',
	variant: 'solid',
	text: '',
	icon: '',
});

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
			colorReference = 'blue';
			break;
	}

	return getTailwindColor(colorReference);
});

const computedColor = computed(() => {
	if (disabled) return 'disabled';
	return color || 'white';
});
</script>

<style lang="scss" scoped>
.button {
	@apply text-white hover:opacity-50 transition-all duration-200 ease-in-out active:scale-90 active:brightness-125;

	&__default {
		@apply hover:opacity-100;
	}

	&__solid {
		@apply bg-inherit;
	}

	&__outline {
		@apply border-2 bg-opacity-0;
	}

	&__stealth {
		@apply bg-inherit border-none text-primary hover:text-white hover:brightness-125;
	}

	&__cyber {
		@apply relative z-20 border-2 border-transparent hover:brightness-125;
		background:
			linear-gradient(#101010, black) padding-box,
			linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)
				border-box;
		animation: animatedgradient 10s alternate-reverse infinite;
		background-size: 500% 500%;

		@keyframes animatedgradient {
			0% {
				background-position: 0% 100%;
			}
			15% {
				background-position: 10% 20%;
			}
			50% {
				background-position: 100% 50%;
			}
			75% {
				background-position: 80% 0%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
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
