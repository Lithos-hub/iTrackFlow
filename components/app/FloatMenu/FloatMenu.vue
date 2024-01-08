<template>
	<Teleport to="body">
		<div
			class="fixed z-50 w-[350px] bg-dark rounded border"
			:style="{
				top: `${clientY}px`,
				left: `${clientX}px`,
			}">
			<ul v-if="floatMenuOptions.length" class="rounded overflow-hidden">
				<li v-for="({ label, action }, index) in floatMenuOptions" :key="index" @click="action">
					<small>{{ label }}</small>
				</li>
			</ul>
		</div>
		<div class="fixed top-0 left-0 w-full h-full z-0" @click="toggleFloatMenu" />
	</Teleport>
</template>

<script setup lang="ts">
import { FloatMenu } from './FloatMenu.interfaces';
import { useFloatMenuStore } from '@/store/floatMenuStore';

defineProps<FloatMenu>();

const { floatMenuOptions } = storeToRefs(useFloatMenuStore());
const { toggleFloatMenu } = useFloatMenuStore();
</script>

<style lang="scss" scoped>
li {
	@apply hover:bg-primary/50 cursor-pointer p-2 duration-200;
}
</style>
