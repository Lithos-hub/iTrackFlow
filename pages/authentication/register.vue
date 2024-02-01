<template>
	<section class="flex bg-dark w-full h-screen">
		<div class="relative w-2/3 flex flex-col justify-center items-center h-full">
			<h1 class="gradient__text--primary font-bold">iTrackFlow</h1>
		</div>
		<article
			class="relative bg-[#202020] w-1/3 border-l border-gray-500/20 p-10 flex flex-col gap-5 justify-center items-center mx-auto text-black dark:text-white">
			<div class="flex justify-between w-full">
				<RouterLink to="/">
					<BaseIcon icon="chevron-left" class="icon__clickable" />
				</RouterLink>
				<BaseLanguageSelector />
			</div>

			<div class="flex flex-col gap-5 w-full h-full justify-center items-center">
				<h2 class="text-secondary">
					{{ $t('authentication.register') }}
				</h2>

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
			</div>
		</article>
	</section>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';

definePageMeta({
	name: 'RegisterPage',
	middleware: 'auth',
	layout: 'authentication',
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
