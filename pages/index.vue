<template>
	<div>
		<Head>
			<title>{{ title }}</title>
		</Head>
		<LandingHeroSection ref="heroRef" />
		<LandingProductSection ref="productRef" />
	</div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';

definePageMeta({
	name: 'HomePage',
	layout: 'default',
});

const heroRef = ref<Element>(null!);
const productRef = ref<Element>(null!);

const heroIsVisible = ref(false);
const productIsVisible = ref(false);

useIntersectionObserver(
	heroRef as MaybeRefOrGetter,
	([{ isIntersecting }], _) => (heroIsVisible.value = isIntersecting),
);
useIntersectionObserver(
	productRef as MaybeRefOrGetter,
	([{ isIntersecting }], _) => (productIsVisible.value = isIntersecting),
);

const title = computed(() => {
	if (heroIsVisible.value) return 'iTrackFlow - The collaborative tool for creative musicians';
	if (productIsVisible.value) return 'iTrackFlow - Product section title';
	return 'iTrackFlow - The collaborative tool for creative musicians';
});

useSeoMeta({
	title,
	description: 'iTrackFlow - Empower musical creativity with iTrackFlow',
});
</script>
