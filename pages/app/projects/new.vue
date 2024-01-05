<template>
	<div class="relative">
		<BaseCard>
			<template #title>
				<h2 class="text-primary">
					{{ $t('app.projects.create') }}
				</h2>
			</template>

			<form ref="formRef" class="bg-dark rounded-2xl shadow-xl w-full">
				<BaseInput
					:label="$t('app.projects.project_name')"
					:placeholder="$t('app.projects.project_name_placeholder')" />
				<BaseDropdown
					v-model="selectedTeamMembers"
					:label="$t('app.projects.project_team_members')"
					:placeholder="$t('app.projects.project_team_members_placeholder')"
					:data="teamMembers" />
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

const formRef = ref<HTMLFormElement | null>(null);

const selectedTeamMembers = ref<any[]>([]);

const teamMembers = ref<any[]>([
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
	{
		label: 'Jane Smith',
		value: 4,
	},
]);

const submit = () => {
	if (!formRef.value) return;

	formRef.value.submit();
};
</script>
