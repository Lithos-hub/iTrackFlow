<template>
	<nav data-testid="base-navbar" class="w-full backdrop-blur-lg bg-transparent z-50 shadow-xl">
		<div class="flex justify-between p-2 px-5">
			<RouterLink to="/">
				<h4 class="gradient__text--primary font-bold">iTrackFlow</h4>
			</RouterLink>

			<div class="flex gap-5 items-center">
				<RouterLink v-if="!supabaseUser" to="/authentication/login">
					<div data-testid="base-navbar__login-button">
						<BaseButton variant="stealth" color="primary">
							{{ $t('authentication.signin') }}
						</BaseButton>
					</div>
				</RouterLink>
				<div v-else data-testid="base-navbar__logout-button">
					<BaseButton
						color="danger"
						class="flex gap-2"
						icon="logout-user"
						icon-color="white"
						icon-right
						@click="logout">
						{{ $t('authentication.logout') }}
					</BaseButton>
				</div>
				<BaseLanguageSelector />
				<BaseSelectorsMode />
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';

const { supabaseUser } = storeToRefs(useUserStore());
const { logout } = useUserStore();
</script>
