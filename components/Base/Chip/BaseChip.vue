<template>
	<div
		data-testid="base-chip"
		:class="`chip chip__${variant} ${closable && 'active:scale-110'}`"
		:style="{
			borderColor: getTWColor(variant),
		}">
		<BaseIcon v-if="prependIcon" :icon="prependIcon" :color="getColor(variant)" class="h-6 w-6" />
		<small>
			<slot v-if="!content" />
			<span v-else>{{ content }}</span>
		</small>
		<BaseIcon
			v-if="appendIcon && !closable"
			:icon="appendIcon"
			:color="getColor(variant)"
			class="h-6 w-6" />
		<BaseIcon
			v-if="closable"
			data-testid="base-chip__close"
			icon="cross"
			:size="16"
			class="h-5 w-5 cursor-pointer rounded-full hover:bg-white/10 transition-all ml-2"
			@click="$emit('close')" />
	</div>
</template>

<script script setup lang="ts">
import { ChipProps } from './BaseChip.interfaces';
import { useColor } from '@/composables/useColor';

const { variant } = withDefaults(defineProps<ChipProps>(), {
	variant: 'default',
	closable: false,
	prependIcon: undefined,
	appendIcon: undefined,
	content: '',
});

defineEmits(['close']);

const { getColor, getTWColor } = useColor();
</script>

<style scoped lang="scss">
.chip {
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
