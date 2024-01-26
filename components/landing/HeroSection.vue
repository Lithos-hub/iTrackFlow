<template>
	<section
		id="hero"
		class="h-[calc(100vh-61px)] text-center flex flex-col items-center justify-center text-black dark:text-white">
		<h1
			class="xl:text-[250px] lg:text-[180px] md:text-[200px] text-[80px] text-center gradient__text--primary brightness-110">
			{{ $t('landing.title') }}
		</h1>
		<div class="text-center">
			<h2
				class="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] gradient__text--primary font-semibold">
				{{ $t('landing.secondary_title') }}
			</h2>
			<h3 class="xl:text-[35px] lg:text-[30px] md:text-[18px] text-[10px] my-10">
				{{ $t('landing.subtitle_0') }}
				<strong>{{ $t('landing.subtitle_1') }}</strong>
				{{ $t('landing.subtitle_2') }}
				<strong
					class="xl:text-[45px] lg:text-[40px] md:text-[25px] text-[15px] gradient__text--primary">
					{{ $t('landing.subtitle_3') }}
				</strong>
			</h3>
		</div>

		<RouterLink to="/app/projects">
			<BaseButton class="w-[150px] mx-auto">
				{{ $t('landing.get_started') }}
			</BaseButton>
		</RouterLink>
	</section>
</template>
