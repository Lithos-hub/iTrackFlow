<template>
	<div class="container rounded-2xl py-10 flex flex-col items-center justify-center gap-10">
		<div class="flex flex-col items-center justify-center gap-5 bg-dark p-10 rounded-2xl w-[500px]">
			<h2 class="text-primary">
				{{ $t('authentication.login') }}
			</h2>

			<BaseInput
				type="email"
				:placeholder="$t('authentication.email_placeholder')"
				:label="$t('authentication.email')" />

			<BaseInput
				type="password"
				:placeholder="$t('authentication.password_placeholder')"
				:label="$t('authentication.password')" />

			<BaseButton color="primary">
				{{ $t('authentication.login') }}
			</BaseButton>
		</div>

		<div class="flex gap-2 items-center">
			<p>
				{{ $t('authentication.dont_have_account') }}
			</p>
			<RouterLink to="/authentication/register">
				<BaseButton variant="stealth" color="secondary">
					{{ $t('authentication.register') }}
				</BaseButton>
			</RouterLink>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	name: 'LoginPage',
	layout: 'default',
});
// TODO: Check if the user has an active session
// If so, redirect to /app/projects
// If not, continue
</script>

<style scoped></style>
