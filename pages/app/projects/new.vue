<template>
	<div class="relative">
		<BaseCard>
			<template #title>
				<h2 class="text-primary">
					{{ $t('projects.new_project') }}
				</h2>
			</template>

			<form ref="formRef" class="bg-dark p-10 rounded-2xl shadow-xl">
				<BaseInput label="Project name" placeholder="Write the name of your project" />
			</form>

			<template #actions>
				<BaseButton color="primary" @click="submit">
					{{ $t('projects.create') }}
				</BaseButton>
				<BaseDropdown label="Team members" :data="['a', 'b', 'c', 1, 2, 3, 4, 5, 6]" />
			</template>
		</BaseCard>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	name: 'NewProjectPage',
	layout: 'default',
});

const formRef = ref<HTMLFormElement | null>(null);

const submit = () => {
	if (!formRef.value) return;

	formRef.value.submit();
};
</script>

<style scoped></style>
