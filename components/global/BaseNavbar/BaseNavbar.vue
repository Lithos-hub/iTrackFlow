<template>
	<nav class="w-full backdrop-blur-lg bg-transparent shadow">
		<div class="flex justify-between p-2 px-5">
			<RouterLink to="/">
				<h4 class="gradient__text--primary font-bold">iTrackFlow</h4>
			</RouterLink>

			<div class="flex gap-5 items-center">
				<RouterLink
					v-if="!user && !$route.path.includes('/authentication')"
					to="/authentication/login">
					<BaseButton variant="stealth" color="primary">
						{{ $t('authentication.login') }}
					</BaseButton>
				</RouterLink>
				<BaseButton
					v-else-if="user"
					color="danger"
					class="flex gap-2"
					icon="logout"
					icon-right
					@click="logout">
					Logout
				</BaseButton>
				<div class="cursor-pointer duration-200 hover:scale-110" @click="toggleLanguage">
					<BaseIcon v-if="language === 'es'" icon="spain_flag" view-box="0 0 38 38" />
					<BaseIcon v-else icon="uk_flag" view-box="0 0 38 38" />
				</div>
				<ToggleMode />
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/store/language';
import { useUserStore } from '@/store/user';

const { language } = storeToRefs(useLanguageStore());
const { user } = storeToRefs(useUserStore());

const { toggleLanguage } = useLanguageStore();
const { logout } = useUserStore();
</script>
