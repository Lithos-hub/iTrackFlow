<template>
	<Teleport to="body">
		<div
			class="modal__alert fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center p-10 w-auto h-auto">
			<div class="flex w-full justify-end items-center">
				<BaseIcon icon="close" class="icon__clickable" @click="toggleModal" />
			</div>
			<BaseIcon :icon="iconAndColor.icon" :color="iconAndColor.color" :size="100" />
			<h2
				:style="{
					color: getTailwindColor(iconAndColor.color),
				}">
				{{ title }}
			</h2>
			<hr />
			<p>{{ message }}</p>
			<BaseButton v-if="type === 'warning'" color="warning" @click="$emit('on-action', type)">
				Yes, continue
			</BaseButton>
			<BaseButton v-if="type === 'info'" color="warning">Understood!</BaseButton>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
import { BaseModalAlertProps, IconAndColor } from './BaseModalAlert.interfaces';
const { type } = defineProps<BaseModalAlertProps>();
defineEmits(['close', 'on-action']);

const { toggleModal } = useModal();

const iconAndColor = computed<IconAndColor>(() => {
	return {
		warning: {
			icon: 'warning',
			color: 'yellow',
		},
		error: {
			icon: 'error',
			color: 'red',
		},
		success: {
			icon: 'check',
			color: 'green',
		},
		info: {
			icon: 'info',
			color: 'blue',
		},
	}[type] as IconAndColor;
});
</script>

<style lang="scss" scoped>
.modal__alert {
	@apply text-black dark:text-white bg-white border border-dark/10 dark:bg-dark dark:border-white/10 shadow-xl p-10 rounded-2xl flex flex-col gap-5 justify-center items-center;
}
</style>
