<template>
	<div class="card__wrapper dark:text-white text-black">
		<!-- Title slot -->
		<slot name="title"></slot>

		<!-- Content slot -->
		<slot></slot>

		<!-- Actions slot -->
		<slot name="actions"></slot>
	</div>
</template>

<style lang="scss" scoped>
.card__wrapper {
	@apply bg-white default_border dark:bg-softdark shadow-xl p-10 rounded-2xl flex flex-col gap-5 justify-center items-center;
}
</style>
