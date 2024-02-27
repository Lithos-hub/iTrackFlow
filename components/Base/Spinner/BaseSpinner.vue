<template>
	<div
		class="spinner"
		:style="{
			width: `${size}px`,
			height: `${size}px`,
		}" />
</template>

<script setup lang="ts">
import { ColorName } from '~/interfaces';

interface SpinnerProps {
	size: number;
	color: ColorName;
}

const { color } = withDefaults(defineProps<SpinnerProps>(), {
	color: 'white',
	size: 20,
});

const computedColor = computed(() => getTailwindColor(color));
</script>

<style lang="scss" scoped>
@import '@/assets/css/utils/variables.scss';

.spinner {
	width: 48px;
	height: 48px;
	border-radius: 50%;
	position: relative;
	animation: rotate 0.75s linear infinite;
}
.spinner::before {
	content: '';
	box-sizing: border-box;
	position: absolute;
	inset: 0px;
	border-radius: 50%;
	border: 2px solid v-bind(computedColor);
	animation: prixClipFix 1.25s linear infinite alternate-reverse;
}

@keyframes rotate {
	100% {
		transform: rotate(360deg);
	}
}

@keyframes prixClipFix {
	0% {
		clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
	}
	25% {
		clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
	}
	50% {
		clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
	}
	75% {
		clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
	}
	100% {
		clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
	}
}
</style>
