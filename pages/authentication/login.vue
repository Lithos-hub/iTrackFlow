<template>
	<section class="flex bg-white dark:bg-dark w-full h-screen">
		<div class="relative w-2/3 flex flex-col justify-center items-center h-full">
			<h1 class="gradient__text--primary font-bold">iTrackFlow</h1>
		</div>
		<article
			class="relative bg-softdark w-1/3 border-l border-gray-500/20 p-10 gap-5 justify-center items-center mx-auto">
			<div class="flex justify-between w-full">
				<RouterLink to="/">
					<BaseIcon icon="chevron-left" class="icon__clickable" />
				</RouterLink>
				<BaseLanguageSelector />
			</div>

			<div class="flex flex-col gap-5 w-full h-full justify-center text-white">
				<div>
					<h2 class="font-bold text-primary">
						{{ $t('authentication.welcome') }}
					</h2>
					<h3 class="text-sm">
						{{ $t('authentication.login') }}
					</h3>
				</div>

				<form class="flex flex-col gap-2.5 w-full" @submit.prevent="onLogin">
					<div class="flex gap-1 items-center">
						<BaseIcon icon="info" color="cyan" :size="20" />
						<small class="text-cyan-500 text-center text-xs">
							{{ $t('authentication.login_disclamer') }}
						</small>
					</div>
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

					<BaseButton color="primary" variant="stealth">
						{{ $t('authentication.signin') }}
					</BaseButton>
					<small class="text-red-500 text-center">{{ errorMessage }}</small>
				</form>

				<div class="flex gap-2 mt-5 items-center mx-auto">
					<span class="text-sm">
						{{ $t('authentication.dont_have_account') }}
					</span>
					<RouterLink to="/authentication/register">
						<BaseButton variant="link" color="secondary">
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
