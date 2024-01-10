<template>
	<div class="flex flex-col flex-grow">
		<header class="sticky top-0 left-0">
			<BaseNavbar />
		</header>

		<div class="flex flex-1">
			<div
				class="container relative h-[calc(100vh-61px)] flex flex-col justify-center items-center">
				<slot />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'CenteredCard',
};
</script>
