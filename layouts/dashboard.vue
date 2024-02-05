<template>
	<div class="flex h-screen">
		<AppSideMenu class="sidemenu">
			<section>
				<div class="px-7">
					<h6 class="my-5">
						{{ $t('app.ui.sidemenu.dashboard') }}
					</h6>
				</div>
				<AppSideMenuLinksSection
					v-for="{ label, links, submenus } of menuItems"
					:key="label"
					:label="label"
					:links="links"
					:submenus="submenus" />
				<hr class="sidemenu__separator" />
				<div class="sidemenu__pseudobutton">
					<BaseIcon icon="logout-arrow" :size="20" color="gray" />
					<div class="sidemenu__link" @click="logout">
						{{ $t('app.ui.sidemenu.logout') }}
					</div>
				</div>
				<hr class="sidemenu__separator" />
			</section>
			<BaseSelectorsWrapper />
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
const { t } = useI18n();

const menuItems = computed(() => [
	{
		label: t('app.ui.sidemenu.projects'),
		links: [
			{
				label: t('app.ui.sidemenu.all_projects'),
				to: '/app/dashboard/projects',
			},
		],
	},
	{
		label: t('app.ui.sidemenu.account'),
		links: [
			{
				label: t('app.ui.sidemenu.preferences'),
				to: '/app/dashboard/account/preferences',
			},
			{
				label: t('app.ui.sidemenu.security'),
				to: '/app/dashboard/account/security',
			},
		],
	},
	{
		label: t('app.ui.sidemenu.audio'),
		links: [
			{
				label: t('app.ui.sidemenu.meta'),
				to: '/app/dashboard/audio/meta',
			},
		],
		submenus: [
			{
				label: t('app.ui.sidemenu.pool'),
				links: [
					{
						label: t('app.ui.sidemenu.references'),
						to: '/app/dashboard/audio/pool/references',
					},
					{
						label: t('app.ui.sidemenu.demos'),
						to: '/app/dashboard/audio/pool/demos',
					},
				],
			},
		],
	},
	{
		label: t('app.ui.sidemenu.help'),
		links: [
			{
				label: t('app.ui.sidemenu.guide'),
				to: '/app/dashboard/help/guide',
			},
		],
	},
]);
</script>
