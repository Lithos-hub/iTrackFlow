<template>
	<div class="flex flex-col flex-grow">
		<header>
			<BaseNavbar />
		</header>

		<div class="flex flex-1 margin_default mx-auto">
			<div
				v-if="!activeSession && $route.path.includes('/app')"
				class="fixed bottom-5 left-5 text-secondary font-bold">
				Demo version
			</div>
			<div class="container margin-default mx-auto">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/userStore';

const { activeSession } = storeToRefs(useUserStore());
</script>

<script lang="ts">
export default {
	name: 'Default',
};
</script>
