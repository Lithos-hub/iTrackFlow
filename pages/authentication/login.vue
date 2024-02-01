<template>
	<BaseCard class="centered__card">
		<template #title>
			<h2 class="text-primary">
				{{ $t('authentication.login') }}
			</h2>
		</template>

		<form class="flex flex-col gap-5 w-full" @submit.prevent="onLogin">
			<small class="text-primary text-center">
				{{ $t('authentication.login_disclamer') }}
			</small>
			<BaseInput
				v-model="email"
				type="email"
				:placeholder="$t('authentication.email_placeholder')"
				:label="$t('authentication.email')" />

			<BaseInput
				v-model="password"
				type="password"
				:placeholder="$t('authentication.password_placeholder')"
				:label="$t('authentication.password')" />

			<BaseButton color="primary">
				{{ $t('authentication.login') }}
			</BaseButton>
		</form>

		<small class="text-red-500">{{ errorMessage }}</small>

		<template #actions>
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
		</template>
	</BaseCard>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';
definePageMeta({
	name: 'LoginPage',
	middleware: 'auth',
});

const { login } = useUserStore();

const email = ref('johndoe@itrackflow.com');
const password = ref('johndoe1234%');

const errorMessage = ref('');

const onLogin = async () => {
	const { error } = await login(email.value, password.value);
	errorMessage.value = error as string;
};
</script>
