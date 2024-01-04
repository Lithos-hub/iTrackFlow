<template>
	<div class="flex flex-col">
		<header>
			<BaseNavbar />
		</header>

		<div class="margin_default">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Default',
};
</script>
