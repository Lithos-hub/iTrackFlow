<template>
	<article>
		<hr class="sidemenu__separator" />
		<div v-for="{ label, components, styles } of elements" :key="label" class="sidemenu__block">
			<label class="text-white/30 text-sm font-semibold">
				{{ label }}
			</label>
			<div :class="styles">
				<div
					v-for="({ component, vModel, actionType, onAction, ...componentProps }, i) of components"
					:key="i">
					<component
						:is="component"
						v-if="vModel !== 'atonalError'"
						v-model="model[vModel]"
						v-bind="componentProps"
						@click="actionType === 'click' && onAction()"
						@input="
							actionType === 'input' && onAction();
							emit('update:model-value', model[vModel]);
						"
						@change="
							actionType === 'change' && onAction() && emit('update:model-value', model[vModel])
						" />
					<BaseFeedback
						v-else-if="model[vModel]"
						:type="componentProps.type"
						:message="componentProps.message" />
				</div>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { SideMenuFormSectionProps } from './SideMenuFormSection.interfaces';

const props = defineProps<SideMenuFormSectionProps>();

const emit = defineEmits(['update:model-value']);
const model = ref({});

const componentsList = computed(() =>
	props.elements
		.map(({ components }) => components.map((attributes) => ({ ...attributes })))
		.flat(),
);

onMounted(async () => {
	await nextTick();
	componentsList.value.forEach(({ vModel, value }) => {
		if (vModel) model.value[vModel] = value;
	});
});
</script>
