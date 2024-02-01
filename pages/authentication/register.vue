<template>
	<BaseCard class="centered__card">
		<template #title>
			<h2 class="text-secondary">
				{{ $t('authentication.register') }}
			</h2>
		</template>

		<form class="flex flex-col gap-5 w-full" @submit.prevent="onSignup">
			<BaseInput
				v-model="email"
				type="email"
				:placeholder="$t('authentication.email_placeholder')"
				:label="$t('authentication.email')" />
			<BaseInput
				v-model="name"
				:placeholder="$t('authentication.name_placeholder')"
				:label="$t('authentication.name')" />
			<BaseInput
				v-model="lastname"
				:placeholder="$t('authentication.lastname_placeholder')"
				:label="$t('authentication.lastname')" />
			<BaseInput
				v-model="password"
				type="password"
				:placeholder="$t('authentication.password_placeholder')"
				:label="$t('authentication.password')" />
			<BaseInput
				v-model="confirmPassword"
				type="password"
				:placeholder="$t('authentication.confirm_password_placeholder')"
				:label="$t('authentication.confirm_password')" />

			<small class="text-red-500 text-center">{{ errorMessage }}</small>
			<small class="text-green-500 text-center">{{ successMessage }}</small>

			<BaseButton color="primary">
				{{ $t('authentication.register') }}
			</BaseButton>
		</form>

		<template #actions>
			<div class="flex gap-2 items-center">
				<small>
					{{ $t('authentication.already_have_account') }}
				</small>
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
import { useUserStore } from '@/store/user';

definePageMeta({
	name: 'RegisterPage',
	layout: 'centered-card',
	middleware: 'auth',
});

const { signUp } = useUserStore();

const email = ref('');
const name = ref('');
const lastname = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');

const onSignup = async () => {
	const { error, success } = await signUp(email.value, password.value);
	errorMessage.value = error as string;
	successMessage.value = success as string;
};
</script>
