<template>
	<div class="card__wrapper">
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
	@apply bg-dark p-10 rounded-2xl flex flex-col gap-5 justify-center items-center;
}
</style>
