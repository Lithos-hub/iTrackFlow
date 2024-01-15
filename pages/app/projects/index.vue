<template>
	<section class="flex flex-col gap-5 default_margin">
		<h2 class="uppercase font-bold">
			{{ $t('app.projects.title') }}
		</h2>
		<div class="flex justify-between">
			<BaseButton
				variant="stealth"
				color="secondary"
				icon="chevron-rounded-left"
				icon-left
				class="my-5"
				@click="$router.back()">
				{{ $t('app.ui.go_back') }}
			</BaseButton>
			<RouterLink to="/app/projects/new">
				<BaseButton color="success" icon="add" icon-right class="my-5">
					{{ $t('app.projects.add_project') }}
				</BaseButton>
			</RouterLink>
		</div>
		<ul class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
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
