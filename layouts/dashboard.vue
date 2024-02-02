<template>
	<div class="flex h-screen">
		<AppSideMenu class="font-light min-w-[300px] flex flex-col justify-between">
			<div>
				<div class="px-7">
					<h6 class="my-5">
						{{ $t('app.ui.sidemenu.dashboard') }}
					</h6>
				</div>
				<hr class="my-3 border-white/10" />
				<div class="flex flex-col gap-5 px-7 py-3 text-sm">
					<label class="text-white/30 text-sm font-semibold">
						{{ $t('app.ui.sidemenu.projects') }}
					</label>
					<RouterLink to="/app/dashboard/projects" class="menu__link">
						{{ $t('app.ui.sidemenu.all_projects') }}
					</RouterLink>
				</div>
				<hr class="my-3 border-white/10" />
				<div class="flex flex-col gap-5 px-7 py-3 text-sm">
					<label class="text-white/30 text-sm font-semibold">
						{{ $t('app.ui.sidemenu.account') }}
					</label>
					<RouterLink to="/app/dashboard/account/preferences" class="menu__link">
						{{ $t('app.ui.sidemenu.preferences') }}
					</RouterLink>
					<RouterLink to="/app/dashboard/account/security" class="menu__link">
						{{ $t('app.ui.sidemenu.security') }}
					</RouterLink>
				</div>
				<hr class="my-3 border-white/10" />
				<div class="flex flex-col gap-5 px-7 py-3 text-sm">
					<label class="text-white/30 text-sm font-semibold">
						{{ $t('app.ui.sidemenu.help') }}
					</label>
					<RouterLink to="/app/dashboard/help/guide" class="menu__link">
						{{ $t('app.ui.sidemenu.guide') }}
					</RouterLink>
				</div>
				<hr class="my-3 border-white/10" />
				<div class="flex gap-2.5 px-7 py-3 text-sm">
					<BaseIcon icon="logout-arrow" :size="20" color="gray" />
					<div class="menu__link cursor-pointer" @click="logout">
						{{ $t('app.ui.sidemenu.logout') }}
					</div>
				</div>
				<hr class="my-3 border-white/10" />
			</div>
			<div class="flex px-7 py-3 gap-5">
				<BaseLanguageSelector />
				<BaseToggleMode />
			</div>
		</AppSideMenu>

		<div class="flex-1 grow bg-dark">
			<div class="px-7 h-[63.5px] flex flex-col justify-center border-b border-b-white/10">
				<small class="text-white/50">
					{{ $t('app.projects.title') }}
				</small>
			</div>
			<div
				class="p-10 text-black dark:text-white bg-white dark:bg-dark h-[calc(100vh-63.5px)] overflow-y-auto">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user';

const { logout } = useUserStore();
</script>
