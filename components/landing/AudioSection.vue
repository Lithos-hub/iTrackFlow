<template>
	<section
		id="audio"
		class="relative h-screen text-black dark:text-white bg-gradient-to-b from-white dark:from-black to-white/50 dark:to-softdark px-[10vw] flex items-center">
		<article class="w-[40vw]">
			<div>
				<h2 class="text-[125px] font-bold gradient__text--primary">
					{{ $t('landing.audio.title') }}
				</h2>
				<div class="w-[30vw]">
					<p>
						{{ $t('landing.audio.description') }}
					</p>
				</div>
			</div>
			<div
				class="w-full h-[80vh] absolute top-1/2 left-1/2 -translate-y-1/2 shadow-xl shadow-primary/10 rounded-2xl overflow-hidden">
				<div class="relative">
					<div
						class="bg-gradient-to-bl from-primary to-transparent opacity-20 backdrop-blur w-full h-[80vh] absolute top-0 left-0" />
					<img src="/img/audio-capture.jpg" class="w-auto h-[80vh] opacity-100" />
				</div>
			</div>
		</article>
	</section>
</template>
