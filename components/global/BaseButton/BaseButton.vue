<template>
	<button
		:disabled="disabled"
		data-testid="iui-button"
		:class="`button button__${computedColor} button__${size} button__radius--${radius} button__${variant}`">
		<slot v-if="!text" class="button__slot"></slot>
		<span v-else>{{ text }}</span>
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Button } from './iui-button.interfaces';

const { color, disabled, variant } = withDefaults(defineProps<Button>(), {
	color: 'primary',
	disabled: false,
	size: 'md',
	radius: 'md',
	variant: 'solid',
	text: '',
});

const computedColor = computed(() => {
	if (disabled) return 'disabled';
	if (variant === 'solid') return color;
	else return 'white';
});
</script>

<style lang="scss" scoped>
.button {
	@apply text-white rounded-md hover:opacity-90 transition-all duration-200 ease-in-out active:scale-90 active:brightness-125;

	&__solid {
		@apply bg-inherit;
	}

	&__outline {
		@apply border-2 border-cyan-500 bg-none;
	}

	&__ghost {
		@apply bg-none border border-primary hover:bg-primary;
	}

	&__neon {
		@apply border hover:bg-white hover:text-dark hover:font-extrabold;

		box-shadow:
			0px 0px 1px white,
			0px 0px 2.5px rgb(191, 250, 255),
			0px 0px 5px rgb(136, 255, 255),
			0px 0px 7px blue,
			0px 0px 10px blue;
		text-shadow:
			0px 0px 1px white,
			0px 0px 2px rgb(191, 250, 255),
			0px 0px 4px rgb(136, 255, 255),
			0px 0px 6px blue,
			0px 0px 7px blue;

		&:hover {
			filter: drop-shadow(0 0 10px #3eb4db);
			text-shadow: none;
		}
	}

	&__stealth {
		@apply bg-primary/10 border-none text-primary hover:bg-primary/20 hover:text-white hover:brightness-125;
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

	&__synth {
		@apply bg-dark transition-all;
		filter: drop-shadow(2px 2px #e11d48) drop-shadow(-2px -2px #06b6d4);

		&:hover {
			filter: drop-shadow(-2.5px -2.5px #e11d48) drop-shadow(2.5px 2.5px #06b6d4);
		}
	}

	&__primary {
		@apply bg-gradient-to-tr from-cyan-500 to-indigo-600;
	}

	&__secondary {
		@apply bg-gradient-to-tr from-rose-500 to-pink-600;
	}

	&__tertiary {
		@apply bg-transparent border border-slate-500;
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
./iui-button.interfaces
