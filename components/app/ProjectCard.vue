<template>
	<article
		class="projectCard__wrapper"
		:class="{
			'bg-success/20 border border-green-500/50': !project,
			'bg-dark/50 border border-white/10': project,
		}">
		<div v-if="project" class="projectCard__card">
			<img src="/img/hero-2.png" alt="Project image" />
			<h3>{{ project?.name }}</h3>
		</div>
		<div v-else class="projectCard__card">
			<div class="text-[60px]">+</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { ProjectCard } from './ProjectCard.interfaces';

defineProps<ProjectCard>();
</script>

<style lang="scss" scoped>
.projectCard__wrapper {
	@apply rounded-2xl h-full min-w-[100px] shadow-xl hover:scale-105 duration-200;
}

.projectCard__card {
	@apply flex flex-col justify-center items-center h-full p-5 w-[250px] hover:opacity-50 cursor-pointer;
}
</style>
