<template>
	<div>
		<div
			class="fixed h-screen w-auto flex flex-col justify-between items-end p-5 top-0 right-0 z-50 gap-5">
			<RouterLink to="/authentication/login">
				<BaseButton variant="outline" color="success">
					{{ $t('authentication.login') }}
				</BaseButton>
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
