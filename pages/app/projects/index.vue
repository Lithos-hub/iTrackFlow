<template>
	<div class="flex flex-col gap-5">
		<h1 class="uppercase font-bold">My projects</h1>
		<ul class="flex gap-10">
			<li v-for="{ category, id, ...rest } of projects" :key="id">
				<RouterLink :to="`/app/projects/${category}/${id}`">
					<AppProjectCard :project="{ category, id, ...rest }" />
				</RouterLink>
			</li>
			<li>
				<AppProjectCard :project="null" new-card />
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { Project } from '@/interfaces';

definePageMeta({
	layout: 'app-default',
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
]);
</script>
