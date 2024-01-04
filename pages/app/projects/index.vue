<template>
	<div class="flex flex-col gap-5">
		<h1 class="uppercase font-bold">
			{{ $t('app.projects.title') }}
		</h1>
		<ul class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pb-10">
			<li>
				<RouterLink to="/app/projects/new">
					<AppProjectCard />
				</RouterLink>
			</li>
			<li v-for="{ category, id, ...rest } of projects" :key="id">
				<RouterLink :to="`/app/projects/${category}/${id}`">
					<AppProjectCard :project="{ category, id, ...rest }" />
				</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { Project } from '@/components/app/ProjectCard.interfaces';

definePageMeta({
	layout: 'default',
	middleware: 'auth',
});

const projects = ref<Project[]>([
	{
		id: 1,
		name: 'Project 1',
		category: 'harmony',
	},
	{
		id: 2,
		name: 'Project 2',
		category: 'production',
	},
	{
		id: 3,
		name: 'Project 3',
		category: 'production',
	},
	{
		id: 4,
		name: 'Project 4',
		category: 'harmony',
	},
	{
		id: 5,
		name: 'Project 5',
		category: 'harmony',
	},
	{
		id: 6,
		name: 'Project 6',
		category: 'production',
	},
	{
		id: 7,
		name: 'Project 7',
		category: 'harmony',
	},
	{
		id: 8,
		name: 'Project 8',
		category: 'production',
	},
	{
		id: 9,
		name: 'Project 9',
		category: 'harmony',
	},
	{
		id: 10,
		name: 'Project 10',
		category: 'production',
	},
	{
		id: 11,
		name: 'Project 11',
		category: 'harmony',
	},
	{
		id: 12,
		name: 'Project 12',
		category: 'production',
	},
	{
		id: 13,
		name: 'Project 13',
		category: 'harmony',
	},
	{
		id: 14,
		name: 'Project 14',
		category: 'production',
	},
	{
		id: 15,
		name: 'Project 15',
		category: 'harmony',
	},
	{
		id: 16,
		name: 'Project 16',
		category: 'production',
	},
	{
		id: 17,
		name: 'Project 17',
		category: 'harmony',
	},
	{
		id: 18,
		name: 'Project 18',
		category: 'production',
	},
	{
		id: 19,
		name: 'Project 19',
		category: 'harmony',
	},
	{
		id: 20,
		name: 'Project 20',
		category: 'production',
	},
	{
		id: 21,
		name: 'Project 21',
		category: 'harmony',
	},
	{
		id: 22,
		name: 'Project 22',
		category: 'production',
	},
	{
		id: 23,
		name: 'Project 23',
		category: 'harmony',
	},
]);
</script>
