<template>
	<div>
		<div class="fixed top-5 right-5 z-50 flex gap-5">
			<RouterLink to="/authentication/login">
				<BaseButton variant="outline" color="success">Login</BaseButton>
			</RouterLink>
			<ToggleMode />
		</div>
		<div>
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'LandingDefault',
};
</script>
