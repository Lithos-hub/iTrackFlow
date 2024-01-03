<template>
	<div class="flex flex-col flex-grow w-full h-screen">
		<header class="sticky top-0 w-full z-50">
			<BaseNavbar />
		</header>
		<main class="flex flex-1 bg-dark/50">
			<div class="flex-1 container py-10 pt-[75px] default_margin relative">
				<slot />
			</div>
		</main>
	</div>
</template>

<script lang="ts">
export default {
	name: 'AppDefault',
};
</script>
