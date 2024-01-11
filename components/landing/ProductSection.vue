<template>
	<section id="product" class="h-screen default_margin">
		<article class="flex gap-10">
			<div class="w-1/2 p-5">
				<h3 class="text-[100px]">
					{{ $t('landing.product.title_1') }}
				</h3>
				<p class="text-justify">
					{{ $t('landing.product.description_1') }}
				</p>
			</div>
			<img src="/img/product-harmony.jpg" class="w-1/2 p-5" />
		</article>
		<article class="flex gap-10">
			<img src="/img/product-production.jpg" class="w-1/2 p-5" />
			<div class="w-1/2 p-5">
				<h3 class="text-[100px]">
					{{ $t('landing.product.title_2') }}
				</h3>
				<p class="text-justify">
					{{ $t('landing.product.description_2') }}
				</p>
			</div>
		</article>
	</section>
</template>
