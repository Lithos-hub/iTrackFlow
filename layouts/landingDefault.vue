<template>
	<div>
		<div class="fixed top-5 right-5 z-50">
			<ToggleMode />
		</div>
		<div class="px-[15vw]">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'LandingDefault',
};
</script>
