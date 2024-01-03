<template>
	<nav class="fixed top-0 left-0 w-full py-2 backdrop-blur-lg">
		<div class="default_margin flex justify-between items-center">
			<h3 class="gradient__text--primary">iTrackFlow</h3>
			<ul class="flex gap-5">
				<li>
					<RouterLink to="/app/projects">
						<BaseButton variant="stealth">Home</BaseButton>
					</RouterLink>
				</li>
				<li>
					<RouterLink to="/">
						<BaseButton color="danger" class="flex gap-2" icon="logout" icon-right>
							Logout
						</BaseButton>
					</RouterLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
