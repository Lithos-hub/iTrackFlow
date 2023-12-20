<template>
	<div class="h-screen">
		<div class="flex flex-col items-center justify-start text-center gap-5 pt-[50px] h-screen">
			<div class="flex flex-col justify-center gap-10">
				<h1 class="text-[130px] gradient__text--primary">iTrackFlow</h1>
				<h2 class="text-[40px] gradient__text--primary">
					The Collaborative Platform for Creative Musicians
				</h2>
				<h3 class="text-[18px]">
					Empower
					<strong>musical creativity with iTrackFlow</strong>
					, the app revolutionizing how musicians and bands
					<strong>collaborate in album production</strong>
					.
					<br />
					Plan and collaborate efficiently at
					<strong>every stage</strong>
					of the creative process in
					<strong>real-time</strong>
					.
				</h3>

				<button>Get started</button>
			</div>
		</div>
		<div class="mx-auto absolute bottom-5 left-1/2 -translate-x-1/2">
			<NuxtImg src="/img/hero.png" class="hero__image w-[800px] bottom-0" />
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero__image {
	-webkit-mask-image: -webkit-gradient(
		linear,
		left top,
		left bottom,
		from(rgba(0, 0, 0, 1)),
		to(rgba(0, 0, 0, 0))
	);
	mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
</style>
