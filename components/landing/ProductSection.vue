<template>
	<section
		id="product"
		class="h-screen items-center justify-center grid grid-cols-2 gap-5 default_margin">
		<article>
			<h3 class="text-[100px]">
				{{ $t('landing.product.title_1') }}
			</h3>
			<p class="text-justify">
				{{ $t('landing.product.description_1') }}
			</p>
		</article>
		<article class="border min-h-[250px] p-5">Image 1</article>
		<article class="border min-h-[250px] p-5">Image 2</article>
		<article>
			<h3 class="text-[100px]">
				{{ $t('landing.product.title_2') }}
			</h3>
			<p class="text-justify">
				{{ $t('landing.product.description_2') }}
			</p>
		</article>
	</section>
</template>
