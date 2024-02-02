<template>
	<nav class="w-full backdrop-blur-lg bg-transparent z-50 shadow-xl">
		<div class="flex justify-between p-2 px-5">
			<RouterLink to="/">
				<h4 class="gradient__text--primary font-bold">iTrackFlow</h4>
			</RouterLink>

			<div class="flex gap-5 items-center">
				<RouterLink v-if="!user" to="/authentication/login">
					<BaseButton variant="stealth" color="primary">
						{{ $t('authentication.signin') }}
					</BaseButton>
				</RouterLink>
				<BaseButton
					v-else
					color="danger"
					class="flex gap-2"
					icon="logout"
					icon-color="white"
					icon-right
					@click="logout">
					Logout
				</BaseButton>
				<BaseLanguageSelector />
				<BaseToggleMode />
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';

const { user } = storeToRefs(useUserStore());
const { logout } = useUserStore();
</script>
