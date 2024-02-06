<template>
	<small
		:class="{
			'text-green-500': type === 'success',
			'text-red-500': type === 'error',
			'text-yellow-500': type === 'warning',
			'text-blue-500': type === 'info',
		}"
		class="text-xs font-semibold">
		{{ message }}
	</small>
</template>

<script setup lang="ts">
import { BaseFeedbackProps } from './BaseFeedback.interfaces';
defineProps<BaseFeedbackProps>();
</script>
