<template>
	<div
		class="relative border border-dark/10 text-center p-5 min-h-[150px] hover:bg-black/10 cursor-pointer duration-100"
		:class="{
			selected__bordered: isActive,
			'bg-white': !isActive,
		}">
		<small class="absolute top-0 left-1 text-primary">{{ index }}</small>
		<h4 class="text-black font-bold">{{ chord }}</h4>
		<h5 class="text-black">{{ romanNumber }}</h5>
	</div>
</template>

<script setup lang="ts">
import { MusicStaffProps } from './MusicStaff.interfaces';

const { chord, romanNumber, index } = defineProps<MusicStaffProps>();
</script>
