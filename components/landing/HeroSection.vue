<template>
	<section
		id="hero"
		class="h-screen text-center default_margin flex flex-col items-center justify-center">
		<h1
			class="xl:text-[300px] lg:text-[180px] md:text-[200px] text-[80px] text-center gradient__text--primary brightness-110">
			iTrackFlow
		</h1>
		<div class="text-center">
			<h2
				class="xl:text-[70px] lg:text-[40px] md:text-[30px] text-[20px] gradient__text--primary font-semibold">
				The collaborative tool for creative musicians
			</h2>
			<h3 class="xl:text-[40px] lg:text-[30px] md:text-[18px] text-[10px] my-10">
				Empower
				<strong>musical creativity</strong>
				with
				<strong
					class="xl:text-[50px] lg:text-[40px] md:text-[25px] text-[15px] gradient__text--primary">
					iTrackFlow
				</strong>
			</h3>
		</div>

		<RouterLink to="/app/projects">
			<BaseButton class="w-[150px] mx-auto">Get started</BaseButton>
		</RouterLink>
	</section>
</template>
