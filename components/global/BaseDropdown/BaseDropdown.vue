<template>
	<div>
		<!-- Overlay to handle open/close actions -->
		<Teleport to="body">
			<div
				v-if="isSelecting"
				class="fixed top-0 left-0 w-full h-full z-0"
				@click="toggleSelecting" />
		</Teleport>
		<!-- Dropdown -->
		<div ref="dropdown" class="flex flex-col w-full">
			<label v-if="label" class="m-2 font-medium">{{ label }}</label>
			<div class="relative cursor-pointer">
				<!-- Dropdown selected options chips -->
				<p v-if="!multiselect" class="absolute top-1/2 left-5 -translate-y-1/2">
					{{ selectedItem?.label }}
				</p>
				<div class="relative">
					<!-- Dropdown input -->
					<BaseInput
						:value="selectedItem?.label"
						:class="{
							dropdown__bordered: bordered,
							dropdown: !bordered,
						}"
						:placeholder="!modelValue.length || multiselect ? placeholder : ''"
						class="cursor-pointer"
						@click="isSelecting = true" />
					<div class="flex gap-1 absolute right-0 px-2 top-1/2 -translate-y-1/2">
						<!-- Remove -->
						<BaseIcon
							v-if="modelValue.length && !multiselect"
							icon="close"
							color="gray"
							class="icon"
							@click="removeItem" />
						<!-- Chevron -->
						<BaseIcon
							icon="chevron"
							color="gray"
							class="duration-200"
							:class="{
								'rotate-180': isSelecting,
							}" />
					</div>
				</div>

				<!-- Chips -->
				<ul v-if="multiselect" class="flex flex-wrap w-auto gap-1 my-2 text-center">
					<li
						v-for="({ label, value }, i) of selectedItems"
						:key="i"
						class="m-1 px-2 py-1 bg-primary text-white rounded-full text-[12px]"
						@click="onItemClick(value)">
						{{ label }}
					</li>
				</ul>

				<!-- Dropdown list -->
				<Transition name="fade">
					<div
						v-if="isSelecting"
						class="z-50 absolute top-[40px] w-full rounded-lg bg-white dark:bg-dark duration-200">
						<ul class="max-h-[200px] overflow-auto rounded-lg border border-gray-300">
							<li
								v-for="({ label, value }, i) of props.data"
								:key="i"
								class="p-2 bg-white dark:bg-dark hover:bg-primary/10 cursor-pointer border-b last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
								@click="onItemClick(value)">
								<div class="flex items-center pl-3">
									<input
										v-if="multiselect"
										v-model="model"
										type="checkbox"
										:value="value"
										class="mr-5 w-4 h-4 cursor-pointer" />
									<div>{{ label }}</div>
								</div>
							</li>
						</ul>
					</div>
				</Transition>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { BaseDropdown } from './BaseDropdown.interfaces';

const props = defineProps<BaseDropdown>();

const model = defineModel({
	type: Array as PropType<unknown[]>,
});

const dropdown = ref();

const isSelecting: Ref<boolean> = ref(false);

const selectedItems = computed(() =>
	props.data.filter(({ value }) => model.value?.includes(value)),
);
const selectedItem = computed(() => props.data.find(({ value }) => model.value?.at(0) === value));

const addOrRemoveItem = (itemValue: unknown) => {
	model.value = model.value?.includes(itemValue)
		? model.value?.filter((value) => value !== itemValue)
		: [...(model.value as unknown[]), itemValue];
};

const onItemClick = (itemValue: unknown) => {
	addOrRemoveItem(itemValue);

	if (!props.multiselect) {
		toggleSelecting();
		model.value = model.value?.includes(itemValue) ? [] : [itemValue];
	}
};

const toggleSelecting = () => {
	isSelecting.value = !isSelecting.value;
};

const removeItem = () => {
	model.value = [];
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
