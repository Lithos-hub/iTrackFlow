<template>
	<div class="flex flex-col flex-grow h-screen">
		<header class="sticky top-0 left-0">
			<BaseNavbar />
		</header>

		<div class="flex flex-1">
			<div
				v-if="!activeSession && $route.path.includes('/app')"
				class="fixed bottom-5 left-5 text-secondary font-bold">
				Demo version
			</div>
			<div
				class="container bg-white dark:bg-dark h-full py-10 flex flex-col justify-center items-center">
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
	name: 'Default',
};
</script>
~/store/user
