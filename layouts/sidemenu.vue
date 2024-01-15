<template>
	<div class="flex flex-col h-screen w-full">
		<header class="sticky top-0 left-0">
			<BaseNavbar />
		</header>

		<AppSideMenu />

		<div class="flex flex-1 flex-grow">
			<div class="p-10 w-full">
				<div
					v-if="!activeSession && $route.path.includes('/app')"
					class="fixed bottom-5 left-5 text-secondary font-bold">
					Demo version
				</div>
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';

const { activeSession } = storeToRefs(useUserStore());
</script>

<script lang="ts">
export default {
	name: 'Sidemenu',
};
</script>
