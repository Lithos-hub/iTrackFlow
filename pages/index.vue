<template>
	<div>
		<Head>
			<title>{{ title }}</title>
		</Head>
		<LandingHeroSection ref="heroRef" />
		<LandingMiddleSection
			id="harmony"
			color="primary"
			image="/img/harmony-capture.jpg"
			:title="$t('landing.harmony.title')"
			:description="$t('landing.harmony.description')"
			class="bg-gradient-to-b from-transparent to-white dark:to-black" />
		<LandingMiddleSection
			id="production"
			color="secondary"
			image="/img/production-capture.jpg"
			:title="$t('landing.production.title')"
			:description="$t('landing.production.description')"
			class="bg-gradient-to-b from-white dark:from-black to-white/50 dark:to-primary/10" />
		<LandingMiddleSection
			id="audio"
			color="primary"
			image="/img/audio-capture.jpg"
			:title="$t('landing.audio.title')"
			class="bg-gradient-to-b from-white/50 dark:from-primary/10 to-white dark:to-secondary/40">
			<ul class="flex flex-col gap-5">
				<li class="flex flex-col gap-2.5">
					<strong class="text-xl">Metadata</strong>
					<p>
						{{ $t('landing.audio.metadata') }}
					</p>
				</li>
				<li class="flex flex-col gap-2.5">
					<strong class="text-xl">Pool (References and demos)</strong>
					<p>
						{{ $t('landing.audio.references_and_demos') }}
					</p>
				</li>
			</ul>
		</LandingMiddleSection>
	</div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';

definePageMeta({
	name: 'HomePage',
	middleware: 'auth',
	layout: 'landing',
});

const { locale } = useI18n();

const seoTexts = computed(() => {
	if (locale.value === 'es') {
		return {
			hero_title: 'iTrackFlow - La herramienta colaborativa para músicos creativos',
			harmony_title: 'iTrackFlow - Lleva tu creatividad al siguiente nivel',
			product_title:
				'iTrackFlow - Gestiona tu creación musical desde la composición hasta el mastering',
			audioTitle: 'iTrackFlow - Almacena, gestiona y comparte tus pistas de audio',
			description:
				'iTrackFlow es la plataforma esencial para músicos, bandas y compositores que buscan llevar su creatividad al siguiente nivel. Organiza, gestiona y potencia tu proceso creativo con herramientas especializadas en la composición, producción y colaboración musical. ¡Regístrate ahora y descubre un nuevo mundo de posibilidades musicales!',
		};
	} else {
		return {
			hero_title: 'iTrackFlow - The collaborative tool for creative musicians',
			harmony_title: 'iTrackFlow - Take your creativity to the next level',
			product_title: 'iTrackFlow - Manage your musical creation from composition to mastering',
			audioTitle: 'iTrackFlow - Store, manage and share your audio tracks',
			description:
				'iTrackFlow is the essential platform for musicians, bands and composers looking to take their creativity to the next level. Organize, manage and power your creative process with tools specialized in music composition, production and collaboration. Sign up now and discover a new world of musical possibilities!',
		};
	}
});

const heroRef = ref<Element>(null!);
const harmonyRef = ref<Element>(null!);
const productionRef = ref<Element>(null!);
const audioRef = ref<Element>(null!);

const heroIsVisible = ref(false);
const harmonyIsVisible = ref(false);
const productionIsVisible = ref(false);
const audioIsVisible = ref(false);

useIntersectionObserver(
	heroRef as MaybeRefOrGetter,
	([{ isIntersecting }], _) => (heroIsVisible.value = isIntersecting),
	{ threshold: 0.5, root: null, rootMargin: '50px 50px 50px 50px' },
);
useIntersectionObserver(
	harmonyRef as MaybeRefOrGetter,
	([{ isIntersecting }], _) => (harmonyIsVisible.value = isIntersecting),
	{ threshold: 0.5, root: null, rootMargin: '50px 50px 50px 50px' },
);
useIntersectionObserver(
	productionRef as MaybeRefOrGetter,
	([{ isIntersecting }], _) => (productionIsVisible.value = isIntersecting),
	{ threshold: 0.5, root: null, rootMargin: '50px 50px 50px 50px' },
);
useIntersectionObserver(
	audioRef as MaybeRefOrGetter,
	([{ isIntersecting }], _) => (audioIsVisible.value = isIntersecting),
	{ threshold: 0.5, root: null, rootMargin: '50px 50px 50px 50px' },
);

const title = computed(() => {
	if (heroIsVisible.value) return seoTexts.value.hero_title;
	if (harmonyIsVisible.value) return seoTexts.value.harmony_title;
	if (productionIsVisible.value) return seoTexts.value.product_title;
	if (audioIsVisible.value) return seoTexts.value.audioTitle;
	return 'iTrackFlow';
});

useSeoMeta({
	title,
	description: seoTexts.value.description,
});

onMounted(() => {
	window.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		e.stopImmediatePropagation();
	});
});
</script>
