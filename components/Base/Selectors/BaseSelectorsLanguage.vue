<template>
	<div :key="updateKey">
		<BaseButton
			data-testid="base-selectors-language__button"
			:icon="lang === 'es' ? 'spain_flag' : 'uk_flag'"
			flat
			@click="toggleLanguage" />
	</div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/store/language';

const { lang } = storeToRefs(useLanguageStore());
const { toggleLanguage } = useLanguageStore();

const updateKey = ref(0);

watch(lang, () => (updateKey.value += 1));
</script>
