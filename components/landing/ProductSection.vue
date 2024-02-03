<template>
	<section
		id="product"
		class="h-screen text-black dark:text-white bg-black px-[10vw] flex flex-col gap-5 py-5">
		<article class="flex gap-5 h-1/2 overflow-hidden">
			<div class="w-1/2 p-5">
				<h3 class="text-[100px] gradient__text--primary">
					{{ $t('landing.product.title_1') }}
				</h3>
				<p class="text-justify">
					{{ $t('landing.product.description_1') }}
				</p>
			</div>
			<img src="/img/product-harmony.jpg" class="w-1/2 h-auto object-none" />
		</article>
		<article class="flex gap-5 h-1/2 overflow-hidden">
			<img src="/img/product-production.jpg" class="w-1/2 h-auto object-none" />
			<div class="w-1/2 p-5">
				<h3 class="text-[100px] gradient__text--primary">
					{{ $t('landing.product.title_2') }}
				</h3>
				<p class="text-justify">
					{{ $t('landing.product.description_2') }}
				</p>
			</div>
		</article>
	</section>
</template>

<script setup lang="ts">
definePageMeta({
	title: 'Landing Page',
	description: 'Landing page for the application',
	layout: 'landing',
});
</script>
