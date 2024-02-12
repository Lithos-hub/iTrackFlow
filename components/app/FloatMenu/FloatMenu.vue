<template>
	<Teleport to="body">
		<div
			data-testid="float-menu"
			class="fixed z-50 w-[350px] bg-dark rounded border text-black dark:text-white"
			:style="{
				top: `${clientY}px`,
				left: `${clientX}px`,
			}">
			<ul v-if="floatMenuOptions?.length" class="rounded overflow-hidden">
				<li
					v-for="({ label, action }, index) in floatMenuOptions"
					:key="index"
					data-testid="float-menu__item"
					@click="action">
					<small>{{ label }}</small>
				</li>
			</ul>
		</div>
		<div class="fixed top-0 left-0 w-full h-full z-0" @click="toggleFloatMenu" />
	</Teleport>
</template>

<script setup lang="ts">
import { useFloatMenuStore } from '@/store/floatMenu';

const { floatMenuOptions, clientX, clientY } = storeToRefs(useFloatMenuStore());
const { toggleFloatMenu } = useFloatMenuStore();

onMounted(() => {
	console.log(floatMenuOptions.value);
});
</script>

<style lang="scss" scoped>
li {
	@apply hover:bg-primary/50 cursor-pointer p-2 duration-200;
}
</style>
