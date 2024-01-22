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
	layout: 'landing',
});

const { locale } = useI18n();

const seoTexts = computed(() => {
	if (locale.value === 'es') {
		return {
			hero_title: 'iTrackFlow - La herramienta colaborativa para músicos creativos',
			product_title:
				'iTrackFlow - Gestiona tu creación musical desde la armonía hasta la producción',
			description:
				'iTrackFlow es la plataforma esencial para músicos, bandas y compositores que buscan llevar su creatividad al siguiente nivel. Organiza, gestiona y potencia tu proceso creativo con herramientas especializadas en la composición, producción y colaboración musical. ¡Regístrate ahora y descubre un nuevo mundo de posibilidades musicales!',
		};
	} else {
		return {
			hero_title: 'iTrackFlow - The collaborative tool for creative musicians',
			product_title: 'iTrackFlow - Manage your musical creation from harmony to production',
			description:
				'iTrackFlow is the essential platform for musicians, bands and composers looking to take their creativity to the next level. Organize, manage and power your creative process with tools specialized in music composition, production and collaboration. Sign up now and discover a new world of musical possibilities!',
		};
	}
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
	if (heroIsVisible.value) return seoTexts.value.hero_title;
	if (productIsVisible.value) return seoTexts.value.product_title;
	return 'iTrackFlow';
});

useSeoMeta({
	title,
	description: seoTexts.value.description,
});

onMounted(() => {
	if (process.server) return;

	window.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		e.stopImmediatePropagation();
	});
});
</script>
