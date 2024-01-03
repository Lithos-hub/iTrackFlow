<template>
	<div class="container rounded-2xl py-10 flex flex-col items-center justify-center gap-10">
		<div class="flex flex-col items-center justify-center gap-5 bg-dark p-10 rounded-2xl w-[500px]">
			<h2 class="text-secondary">Register</h2>

			<BaseInput type="text" placeholder="Write your email" label="Email" />

			<BaseInput type="password" placeholder="Write your password" label="Password" />

			<BaseInput type="password" placeholder="Write again your password" label="Password" />

			<BaseButton color="primary">Create account</BaseButton>
		</div>

		<div class="flex gap-2 items-center">
			<p>Do you have an account?</p>
			<RouterLink to="/authentication/login">
				<BaseButton variant="stealth" color="primary">Login</BaseButton>
			</RouterLink>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	name: 'RegisterPage',
	layout: 'authentication-default',
});
</script>

<style scoped></style>
