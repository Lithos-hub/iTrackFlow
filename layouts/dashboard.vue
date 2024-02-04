<template>
	<div class="flex h-screen">
		<AppSideMenu class="sidemenu">
			<section>
				<div class="px-7">
					<h6 class="my-5">
						{{ $t('app.ui.sidemenu.dashboard') }}
					</h6>
				</div>
				<hr class="sidemenu__separator" />
				<div class="sidemenu__block">
					<label class="sidemenu__label">
						{{ $t('app.ui.sidemenu.projects') }}
					</label>
					<RouterLink to="/app/dashboard/projects" class="sidemenu__link">
						{{ $t('app.ui.sidemenu.all_projects') }}
					</RouterLink>
				</div>
				<hr class="sidemenu__separator" />
				<div class="sidemenu__block">
					<label class="sidemenu__label">
						{{ $t('app.ui.sidemenu.account') }}
					</label>
					<RouterLink to="/app/dashboard/account/preferences" class="sidemenu__link">
						{{ $t('app.ui.sidemenu.preferences') }}
					</RouterLink>
					<RouterLink to="/app/dashboard/account/security" class="sidemenu__link">
						{{ $t('app.ui.sidemenu.security') }}
					</RouterLink>
				</div>
				<hr class="sidemenu__separator" />
				<div class="sidemenu__block">
					<label class="sidemenu__label">
						{{ $t('app.ui.sidemenu.help') }}
					</label>
					<RouterLink to="/app/dashboard/help/guide" class="sidemenu__link">
						{{ $t('app.ui.sidemenu.guide') }}
					</RouterLink>
				</div>
				<hr class="sidemenu__separator" />
				<div class="sidemenu__pseudobutton">
					<BaseIcon icon="logout-arrow" :size="20" color="gray" />
					<div class="sidemenu__link" @click="logout">
						{{ $t('app.ui.sidemenu.logout') }}
					</div>
				</div>
				<hr class="sidemenu__separator" />
			</section>
			<AppSideMenuSidemenuBottomOptions />
		</AppSideMenu>

		<div class="flex-1 grow bg-dark relative">
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
