<template>
	<div class="cursor-pointer duration-200 hover:scale-110" @click="toggleLanguage">
		<BaseIcon v-if="language === 'es'" icon="spain_flag" view-box="0 0 38 38" />
		<BaseIcon v-else icon="uk_flag" view-box="0 0 38 38" />
	</div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/store/language';

const { language } = storeToRefs(useLanguageStore());
const { toggleLanguage } = useLanguageStore();
</script>

<style scoped></style>
