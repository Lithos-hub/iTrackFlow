<template>
	<div>
		<!-- Overlay to handle open/close actions -->
		<Teleport to="body">
			<div
				v-if="isSelecting"
				class="fixed top-0 left-0 w-full h-full z-10"
				@click="isSelecting = false" />
		</Teleport>
		<!-- Dropdown -->
		<div ref="dropdown" data-testid="base-dropdown" class="flex flex-col w-full">
			<label v-if="label" class="default_label">{{ label }}</label>
			<div class="relative cursor-pointer">
				<!-- Dropdown selected options chips -->
				<p v-if="!multiselect && !inputValue" class="absolute top-1/2 left-5 -translate-y-1/2">
					{{ selectedItem?.label }}
				</p>
				<div class="relative">
					<!-- Dropdown input -->
					<div data-testid="base-dropdown__input" @click="isSelecting = true">
						<BaseInput
							v-model="inputValue"
							:class="{
								dropdown__bordered: bordered,
								dropdown: !bordered,
							}"
							:placeholder="!modelValue?.length || multiselect ? placeholder : ''"
							class="cursor-pointer"
							:color="color" />
					</div>
					<div class="flex gap-1 absolute right-0 px-2 top-1/2 -translate-y-1/2">
						<!-- Remove -->
						<div
							v-if="modelValue?.length && !multiselect && !noCleanable"
							data-testid="base-dropdown__close"
							@click="removeItem">
							<BaseIcon icon="close" color="gray" class="icon" />
						</div>
						<!-- Chevron -->
						<BaseIcon
							icon="chevron-dropdown"
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
						data-testid="base-dropdown__chip"
						@close="addOrRemoveItem(value)">
						<BaseChip variant="primary" :content="label" closable />
					</li>
				</ul>

				<!-- Dropdown list -->
				<Transition name="fade">
					<div
						v-if="isSelecting"
						data-testid="base-dropdown__list"
						class="z-50 absolute top-[50px] w-full rounded bg-white dark:bg-dark duration-200 shadow-xl">
						<ul
							class="max-h-[200px] overflow-auto rounded border border-dark/10 dark:border-white/10">
							<li
								v-for="({ label, value }, i) of dropdownData"
								:key="i"
								data-testid="base-dropdown__list-item"
								class="p-2 bg-white dark:bg-dark hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer border-b border-black/10 dark:border-white/10 last:border-b-0 first:rounded-t last:rounded-b cursor-pointer transition-all duration-200 ease-in-out"
								@click="onItemClick(value)">
								<div class="flex items-center ps-3">
									<input
										v-if="multiselect"
										v-model="model"
										type="checkbox"
										:value="value"
										class="w-4 h-4 text-blue-600 bg-dark border-dark rounded dark:ring-offset-gray-700 dark:bg-softdark dark:border-softdark" />

									<label
										class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
										{{ label }}
									</label>
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

const props = withDefaults(defineProps<BaseDropdown>(), {});

const model = defineModel({
	type: Array as PropType<string[]>,
	default: [],
});

const emit = defineEmits(['input', 'change']);
const dropdown = ref();

const isSelecting: Ref<boolean> = ref(false);
const inputValue = ref<string>('');

const dropdownData = computed(() => {
	return props.data.filter(({ label }) =>
		label.toLowerCase().includes(inputValue.value.toLowerCase()),
	);
});

const selectedItems = computed(() =>
	props.data.filter(({ value }) => model.value?.includes(value)),
);
const selectedItem = computed(() =>
	props.data.find(({ value }) => model.value && model.value[0] === value),
);

const addOrRemoveItem = (itemValue: string) => {
	model.value = model.value?.includes(itemValue)
		? model.value?.filter((value) => value !== itemValue)
		: [...(model.value as string[]), itemValue];
};

const onItemClick = (itemValue: string) => {
	if (props.multiselect) {
		addOrRemoveItem(itemValue);
	} else {
		model.value[0] = itemValue;
		toggleSelecting();
	}
	emit('input', model.value);
	emit('change', model.value);
	inputValue.value = '';
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
