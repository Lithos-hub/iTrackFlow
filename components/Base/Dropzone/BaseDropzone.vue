<template>
	<div
		ref="dropZoneRef"
		data-testid="base-dropzone"
		class="relative h-[200px] w-[200px] rounded-2xl gap-5 items-center cursor-pointer flex flex-col justify-center items-center"
		:class="{
			'bg-success/10 selected__border-success': isOverDropZone,
			'bg-none border-2 border-dashed border-gray-500 dark:border-white/10': !isOverDropZone,
		}">
		<div :key="updateKey">
			<BaseIcon icon="upload" :color="lightMode ? 'black' : 'white'" :size="30" />
		</div>
		<small>{{ placeholder }}</small>
	</div>
</template>

<script setup lang="ts">
import { BaseDropzoneProps } from './BaseDropzone.interfaces';
import { useScreenStore } from '@/store/colorMode';

defineProps<BaseDropzoneProps>();

const { lightMode } = storeToRefs(useScreenStore());

const updateKey = ref(Math.random());

watch(lightMode, () => (updateKey.value = Math.random()));
</script>
