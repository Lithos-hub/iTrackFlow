<template>
	<div class="flex flex-col gap-5">
		<label v-if="label">{{ label }}</label>
		<div
			ref="dropZoneRef"
			data-testid="base-dropzone"
			class="relative h-[200px] border-2 border-dark w-full rounded-2xl gap-5 items-center cursor-pointer flex flex-col justify-center hover:opacity-50 duration-200"
			:class="{
				'bg-success/10 selected__border-success': isOverDropZone,
				'bg-none border-2 border-dashed border-gray-500 dark:border-white/10': !isOverDropZone,
			}">
			<BaseIcon
				:key="renderScreenKey"
				icon="upload"
				:color="lightMode ? 'black' : 'white'"
				:size="30" />
			<small>{{ placeholder }}</small>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BaseDropzoneProps } from './BaseDropzone.interfaces';
import { useScreenStore } from '@/store/screen';

defineProps<BaseDropzoneProps>();

const { lightMode, renderScreenKey } = storeToRefs(useScreenStore());
</script>
