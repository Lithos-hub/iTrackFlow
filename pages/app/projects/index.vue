<template>
	<section class="flex flex-col gap-5 default_margin">
		<h2 class="uppercase font-bold">
			{{ $t('app.projects.title') }}
		</h2>
		<ul class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
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
import projects from '@/__mocks__/projects';

definePageMeta({
	layout: 'default',
	middleware: 'auth',
});
</script>
