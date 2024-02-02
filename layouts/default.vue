<template>
	<div class="flex flex-col h-screen">
		<header class="sticky top-0 left-0">
			<BaseNavbar />
		</header>
		<div class="bg-white dark:bg-dark h-full flex-1">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
