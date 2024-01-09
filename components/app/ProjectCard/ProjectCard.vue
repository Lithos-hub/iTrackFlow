<template>
	<article
		class="projectCard__wrapper"
		:class="{
			'bg-success/50 border-green-500 dark:bg-success/20 border dark:border-green-500/50': !project,
			'border border-dark/10 text-dark bg-white dark:text-white dark:bg-dark/90 dark:border-white/10':
				project,
		}">
		<div v-if="project" class="projectCard__card relative">
			<img src="/img/hero-2.png" alt="Project image" />
			<h3>{{ project?.name }}</h3>
			<small
				v-if="project.category === 'harmony'"
				class="absolute top-0 left-0 bg-secondary/80 dark:bg-secondary/50 border border-secondary-500 p-2 rounded-tl-2xl rounded-br-2xl">
				{{ $t('app.projects.harmony') }}
			</small>
			<small
				v-if="project.category === 'production'"
				class="absolute top-0 left-0 bg-primary/80 dark:bg-primary/50 border border-primary-500 p-2 rounded-tl-2xl rounded-br-2xl">
				{{ $t('app.projects.production') }}
			</small>
		</div>
		<div v-else class="projectCard__card text-dark dark:text-white">
			<p class="text-center w-full font-bold">
				{{ $t('app.projects.create') }}
			</p>
		</div>
	</article>
</template>

<script setup lang="ts">
import { ProjectCard } from './ProjectCard.interfaces';

defineProps<ProjectCard>();
</script>

<style lang="scss" scoped>
.projectCard__wrapper {
	@apply rounded-2xl h-full shadow-xl hover:scale-105 duration-200 text-white;
}

.projectCard__card {
	@apply flex flex-col justify-center items-center h-full w-auto p-5 hover:opacity-50 cursor-pointer;
}
</style>
