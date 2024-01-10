<template>
	<BaseCard
		class="flex flex-col items-center justify-center gap-5 bg-dark p-10 rounded-2xl w-[500px] text-white">
		<template #title>
			<h2 class="text-secondary">
				{{ $t('authentication.register') }}
			</h2>
		</template>

		<BaseInput
			type="email"
			:placeholder="$t('authentication.email_placeholder')"
			:label="$t('authentication.email')" />

		<BaseInput
			type="password"
			:placeholder="$t('authentication.password_placeholder')"
			:label="$t('authentication.password')" />

		<BaseInput
			type="password"
			:placeholder="$t('authentication.confirm_password_placeholder')"
			:label="$t('authentication.confirm_password')" />

		<BaseButton color="primary">
			{{ $t('authentication.register') }}
		</BaseButton>

		<template #actions>
			<div class="flex gap-2 items-center">
				<p>
					{{ $t('authentication.already_have_account') }}
				</p>
				<RouterLink to="/authentication/login">
					<BaseButton variant="stealth" color="primary">
						{{ $t('authentication.login') }}
					</BaseButton>
				</RouterLink>
			</div>
		</template>
	</BaseCard>
</template>

<script setup lang="ts">
definePageMeta({
	name: 'RegisterPage',
	layout: 'centered-card',
});
</script>
