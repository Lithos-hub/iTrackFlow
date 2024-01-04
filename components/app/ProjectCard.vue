<template>
	<div
		class="projectCard__wrapper"
		:class="{
			'bg-success': newCard,
			'bg-[#202020]': !newCard,
		}">
		<div v-if="!newCard" class="projectCard__card">
			<img src="/img/hero-2.png" alt="Project image" />
			<h3>{{ project?.name }}</h3>
		</div>
		<div v-else class="projectCard__card">
			<div class="text-[60px]">+</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ProjectCard } from './ProjectCard.interfaces';

defineProps<ProjectCard>();
</script>

<style lang="scss" scoped>
.projectCard__wrapper {
	@apply border border-white/10 rounded-2xl h-full min-w-[100px];
}

.projectCard__card {
	@apply flex flex-col justify-center items-center h-full p-5 w-[250px] hover:opacity-50 cursor-pointer;
}
</style>
