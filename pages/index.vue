<template>
	<div>
		<LandingHeroSection ref="heroRef" />
		<LandingProductSection ref="productRef" />
	</div>
</template>

<script lang="ts">
export default {
	name: 'PageHomepage',
};

definePageMeta({
	layout: 'landing-default',
});

const { setObserver } = useIntersectionObserver({
	threshold: 0.5,
	root: null,
	rootMargin: '50px 50px 50px 50px',
});
const { isIntersecting } = storeToRefs(useIntersectionObserver());

const heroRef = ref<HTMLElement | null>(null);
const productRef = ref<HTMLElement | null>(null);

const heroIsVisible = computed(() => setObserver('#hero'));
const productIsVisible = computed(() => setObserver('#product'));

const title = computed(() => {
	if (heroIsVisible.value) {
		return 'Hero is visible';
	}
	if (productIsVisible.value) {
		return 'Product is visible';
	}
	return 'Nothing is visible';
});

onMounted(() => {
	setObserver('#product');
});
</script>
