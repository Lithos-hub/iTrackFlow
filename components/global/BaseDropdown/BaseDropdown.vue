<template>
	<div>
		<!-- Overlay to handle open/close actions -->
		<Teleport to="body">
			<div
				v-if="isSelecting"
				class="fixed top-0 left-0 w-full h-full z-0"
				@click="isSelecting = false" />
		</Teleport>
		<!-- Dropdown -->
		<div ref="dropdown" class="flex flex-col w-full">
			<label v-if="label" class="m-2 font-medium">{{ label }}</label>
			<div
				class="relative cursor-pointer"
				@click="isSelecting = true"
				@onmouseover="isHovering = true"
				@onmouseleave="isHovering = false">
				<!-- Dropdown selected options chips -->
				<ul
					class="flex flex-wrap w-2/3 gap-1 text-center absolute top-1/2 left-1 -translate-y-1/2 overflow-y-scroll max-h-[35px]">
					<li
						v-for="({ label, value }, i) of selectedItems"
						:key="i"
						class="m-1 px-2 py-1 bg-primary text-white rounded-full text-[12px]"
						@click="onItemClick(value)">
						{{ label }}
					</li>
				</ul>
				<!-- Dropdown input -->
				<BaseInput
					:value="modelValue"
					:class="{
						dropdown__bordered: bordered,
						dropdown: !bordered,
					}"
					:placeholder="!modelValue.length ? placeholder : ''"
					class="cursor-pointer" />
				<!-- <i ></i> -->
				<BaseIcon
					icon="chevron"
					class="absolute right-5 top-1/2 -translate-y-1/2 text-[12px] duration-200 h-7 w-7"
					:class="{
						'rotate-180': isSelecting,
					}" />
				<!-- Dropdown list -->
				<div v-if="isSelecting" class="z-50 absolute top-[60px] w-full rounded-lg bg-dark">
					<ul class="max-h-[200px] overflow-auto rounded-lg border border-gray-300">
						<li
							v-for="({ label, value }, i) of props.data"
							:key="i"
							class="p-2 bg-dark hover:bg-primary/10 cursor-pointer border-b last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
							@click="onItemClick(value)">
							<div class="flex items-center pl-3">
								<input
									v-model="model"
									type="checkbox"
									:value="value"
									class="mr-5 w-4 h-4 cursor-pointer" />
								<div>{{ label }}</div>
							</div>
						</li>
					</ul>
				</div>
				<!-- Dropdown tooltip -->
				<div v-if="isHovering" class="absolute top-[60px] w-full rounded-lg bg-dark">
					<ul>
						<li v-for="(item, i) of modelValue" :key="i">
							{{ item }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { BaseDropdown } from './BaseDropdown.interfaces';

const props = defineProps<BaseDropdown>();

const model = defineModel();

const dropdown = ref();

const isSelecting: Ref<boolean> = ref(false);
const isHovering: Ref<boolean> = ref(false);

const selectedItems = computed(() => {
	return props.data.filter((item) => model.value.includes(item.value));
});

const onItemClick = (itemValue: unknown) => {
	if (model.value.includes(itemValue)) {
		model.value.splice(model.value.indexOf(itemValue), 1);
	} else {
		model.value.push(itemValue);
	}
};
</script>

<style lang="scss" scoped>
select {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	text-indent: 1px;
	text-overflow: '';
}

.dropdown {
	@apply rounded-lg hover:shadow-lg focus:outline-none w-full text-transparent cursor-pointer;

	&__bordered {
		@apply border border-gray-300;
	}
}
</style>
