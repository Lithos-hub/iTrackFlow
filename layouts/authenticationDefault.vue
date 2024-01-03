<template>
	<div class="flex flex-col flex-grow w-full h-screen">
		<header class="sticky top-5 mx-auto">
			<RouterLink to="/">
				<h2 class="gradient__text--primary">iTrackFlow</h2>
			</RouterLink>
		</header>
		<main class="flex flex-1 justify-center items-center">
			<div class="flex-1 container default_margin mx-auto">
				<slot />
			</div>
		</main>
	</div>
</template>

<script lang="ts">
export default {
	name: 'AuthenticationDefault',
};
</script>
