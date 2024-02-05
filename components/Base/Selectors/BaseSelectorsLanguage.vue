<template>
	<div :key="updateKey">
		<BaseButton :icon="language === 'es' ? 'spain_flag' : 'uk_flag'" flat @click="toggleLanguage" />
	</div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/store/language';

const { language } = storeToRefs(useLanguageStore());
const { toggleLanguage } = useLanguageStore();

const updateKey = ref(0);

watch(language, () => (updateKey.value += 1));
</script>
