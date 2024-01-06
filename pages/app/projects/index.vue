<template>
	<section class="flex flex-col gap-5">
		<h2 class="uppercase font-bold">
			{{ $t('app.projects.title') }}
		</h2>
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
	</section>
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
]);
</script>
