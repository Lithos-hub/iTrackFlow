<template>
	<div class="flex h-screen">
		<AppSideMenu class="font-light min-w-[300px] flex flex-col justify-between">
			<div>
				<div class="px-7">
					<h6 class="my-5">Dashboard</h6>
				</div>
				<hr class="my-3 border-white/10" />
				<div class="flex flex-col gap-5 px-7 py-3 text-sm">
					<label class="text-white/30 text-sm font-semibold">Projects</label>
					<RouterLink to="/app/dashboard/projects" class="menu__link">All projects</RouterLink>
				</div>
				<hr class="my-3 border-white/10" />
				<div class="flex flex-col gap-5 px-7 py-3 text-sm">
					<label class="text-white/30 text-sm font-semibold">Account</label>
					<RouterLink to="/app/dashboard/account/preferences" class="menu__link">
						Preferences
					</RouterLink>
					<RouterLink to="/app/dashboard/account/security" class="menu__link">Security</RouterLink>
				</div>
				<hr class="my-3 border-white/10" />
				<div class="flex flex-col gap-5 px-7 py-3 text-sm">
					<label class="text-white/30 text-sm font-semibold">Help</label>
					<RouterLink to="/app/dashboard/help/guide" class="menu__link">Guide</RouterLink>
				</div>
				<hr class="my-3 border-white/10" />
				<div class="flex flex-col gap-5 px-7 py-3 text-sm">
					<div class="menu__link" @click="logout">Logout</div>
				</div>
				<hr class="my-3 border-white/10" />
			</div>
			<div class="flex px-7 py-3 gap-10">
				<BaseLanguageSelector />
				<BaseToggleMode />
			</div>
		</AppSideMenu>

		<div class="bg-white dark:bg-dark flex-1 grow">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user';

const { logout } = useUserStore();
</script>
