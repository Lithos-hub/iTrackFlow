<template>
	<section
		id="hero"
		class="h-screen text-center flex flex-col items-center justify-center text-black dark:text-white">
		<div class="text-center">
			<h1
				class="xl:text-[100px] lg:text-[80px] md:text-[60px] text-[40px] gradient__text--primary font-bold">
				{{ $t('landing.secondary_title') }}
			</h1>
			<h3 class="xl:text-[25px] lg:text-[20px] md:text-[15px] text-[14px] my-10">
				{{ $t('landing.subtitle_0') }}
				<strong>{{ $t('landing.subtitle_1') }}</strong>
				{{ $t('landing.subtitle_2') }}
				<strong
					class="xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] gradient__text--primary">
					{{ $t('landing.subtitle_3') }}
				</strong>
			</h3>
		</div>

		<RouterLink to="/app/dashboard/projects">
			<BaseButton class="w-[150px] mx-auto">
				{{ $t('landing.get_started') }}
			</BaseButton>
		</RouterLink>
	</section>
</template>
