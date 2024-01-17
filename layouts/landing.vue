<template>
	<div class="flex flex-col flex-grow">
		<header class="sticky top-0 left-0">
			<BaseNavbar />
		</header>

		<div class="flex flex-1">
			<div class="default_margin">
				<slot />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Landing',
};
</script>
