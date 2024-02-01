<template>
	<section class="flex bg-dark w-full h-screen">
		<div class="relative w-2/3 flex flex-col justify-center items-center h-full">
			<h1 class="gradient__text--primary font-bold">iTrackFlow</h1>
		</div>
		<article
			class="relative bg-[#202020] w-1/3 border-l border-gray-500/20 p-10 gap-5 justify-center items-center mx-auto text-black dark:text-white">
			<div class="flex justify-between w-full">
				<RouterLink to="/">
					<BaseIcon icon="chevron-left" class="icon__clickable" />
				</RouterLink>
				<BaseLanguageSelector />
			</div>

			<div class="flex flex-col gap-5 w-full h-full justify-center items-center">
				<h2 class="text-primary">
					{{ $t('authentication.login') }}
				</h2>

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
		</article>
	</section>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';

definePageMeta({
	name: 'LoginPage',
	middleware: 'auth',
	layout: 'authentication',
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
