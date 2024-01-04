<template>
	<div class="flex flex-col flex-grow h-screen">
		<header>
			<BaseNavbar />
		</header>

		<div class="flex flex-1 margin_default mx-auto">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Default',
};
</script>
