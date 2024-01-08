<template>
	<div class="relative h-[calc(100vh-61px)] flex flex-col justify-center items-center">
		<BaseCard class="max-w-[500px]">
			<template #title>
				<h2 class="text-primary">
					{{ $t('app.projects.create') }}
				</h2>
			</template>

			<form ref="formRef" class="bg-white dark:bg-dark rounded-2xl w-full flex flex-col gap-5">
				<BaseInput
					:label="$t('app.projects.project_name')"
					:placeholder="$t('app.projects.project_name_placeholder')" />
				<BaseDropdown
					v-model="selectedTeamMembers"
					:label="$t('app.projects.project_team_members')"
					:placeholder="$t('app.projects.project_team_members_placeholder')"
					multiselect
					:data="teamMembers" />
				<BaseDropdown
					v-model="selectedCategory"
					:label="$t('app.projects.project_category')"
					:placeholder="$t('app.projects.project_category_placeholder')"
					:data="categories" />
			</form>

			<template #actions>
				<BaseButton color="primary" @click="submit">
					{{ $t('app.projects.project_create_submit') }}
				</BaseButton>
			</template>
		</BaseCard>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	name: 'NewProjectPage',
	layout: 'default',
});

const { t } = useI18n();

const formRef = ref<HTMLFormElement | null>(null);

const selectedTeamMembers = ref<unknown[]>([]);
const selectedCategory = ref<unknown[]>([]);

const teamMembers = [
	{
		label: 'John Doe',
		value: 1,
	},
	{
		label: 'Jane Doe',
		value: 2,
	},
	{
		label: 'John Smith',
		value: 3,
	},
];

const categories = [
	{
		label: t('app.projects.production'),
		value: 'production',
	},
	{
		label: t('app.projects.harmony'),
		value: 'harmony',
	},
];

const submit = () => {
	if (!formRef.value) return;

	formRef.value.submit();
};
</script>
