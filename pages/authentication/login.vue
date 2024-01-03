<template>
	<div class="container rounded-2xl py-10 flex flex-col items-center justify-center gap-10">
		<div class="flex flex-col items-center justify-center gap-5 bg-dark p-10 rounded-2xl w-[500px]">
			<h2 class="text-primary">Login</h2>
			<p>{{ $t('welcome') }}</p>

			<BaseInput type="text" placeholder="Write your email" label="Email" />

			<BaseInput type="password" placeholder="Write your password" label="Password" />

			<BaseButton color="primary">Login</BaseButton>
		</div>

		<div class="flex gap-2 items-center">
			<p>Don't have an account?</p>
			<RouterLink to="/authentication/register">
				<BaseButton variant="stealth" color="secondary">Register</BaseButton>
			</RouterLink>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	name: 'LoginPage',
	layout: 'authentication-default',
});
// TODO: Check if the user has an active session
// If so, redirect to /app/projects
// If not, continue
</script>

<style scoped></style>
