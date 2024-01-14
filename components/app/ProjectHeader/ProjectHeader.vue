<template>
	<div class="flex gap-5 items-center">
		<div class="flex w-full justify-start items-center gap-5">
			<h4>
				{{ $t('app.projects.name') }}
			</h4>

			<div class="w-[350px]">
				<BaseInput v-if="isEditingProjectName" v-model="projectName" autofocus color="primary" />
				<h3 v-else class="font-bold">{{ projectNameSplitted }}</h3>
			</div>

			<BaseButton
				:key="editingButtonKey"
				variant="stealth"
				:color="isEditingProjectName ? 'success' : 'primary'"
				:icon="isEditingProjectName ? 'save' : 'pencil'"
				class="my-5"
				@click="toggleIsEditingProjectName" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ProjectHeader } from './ProjectHeader.interfaces';

const { projectId } = defineProps<ProjectHeader>();

const projectName = ref('');

const isEditingProjectName = ref(false);
const editingButtonKey = ref(0);

const projectNameSplitted = computed(() => {
	const splitted = projectName.value.split('');
	if (splitted.length > 50) {
		return splitted.slice(0, 20).join('') + '...';
	}
	return projectName;
});

const toggleIsEditingProjectName = () => {
	// TODO: update the project name in the DB
	if (isEditingProjectName.value) {
		console.log('update the project name in the DB', projectId);
	}
	isEditingProjectName.value = !isEditingProjectName.value;
	editingButtonKey.value++;
};
</script>
