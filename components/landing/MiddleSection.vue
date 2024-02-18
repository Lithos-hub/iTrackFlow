<template>
	<section
		:id="id"
		class="relative h-screen text-black dark:text-white flex flex-col justify-center items-center px-[2.5vw] lg:px-[10vw] lg:flex-row lg:justify-start">
		<article class="w-full text-center lg:text-left lg:w-[40vw] flex flex-col gap-10">
			<div>
				<h2 class="text-[70px] md:text-[100px] xl:text-[125px] font-bold gradient__text--primary">
					{{ title }}
				</h2>
				<div class="lg:w-[30vw]">
					<p>
						{{ description }}
					</p>
				</div>
			</div>
			<div
				class="w-full mx-auto lg:w-full lg:h-[80vh] lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 shadow-xl rounded-2xl overflow-hidden"
				:class="`shadow-${color}/10`">
				<div class="relative">
					<div
						class="bg-gradient-to-bl to-transparent opacity-20 w-full h-full lg:h-[80vh] absolute top-0 left-0"
						:class="`from-${color}`" />
					<img :src="image" class="w-full lg:h-[80vh] object-cover" />
				</div>
			</div>
		</article>
	</section>
</template>

<script setup lang="ts">
import { MiddleSectionProps } from './MiddleSection.interfaces';

withDefaults(defineProps<MiddleSectionProps>(), {
	color: 'primary',
});
</script>
