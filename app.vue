<template>
	<NuxtLayout>
		<Html lang="en" :data-route-path="$route?.path">
			<Head>
				<Title>iTrackFlow</Title>
				<Meta name="language" content="en" />
				<Meta
					property="og:title"
					content="iTrackFlow - The Collaborative Platform for Creative Musicians" />
				<Meta
					name="twitter:title"
					content="iTrackFlow - The Collaborative Platform for Creative Musicians" />
				<Meta name="description" content="Template" />
				<Meta property="og:description" content="Template" />
				<Meta name="twitter:description" content="Template" />
				<Meta property="og:image" content="/favicon.png" />
				<Meta name="twitter:image" content="/favicon.png" />
				<Meta property="og:site_name" content="/favicon.png" />
				<Meta name="twitter:site" content="/favicon.png" />
				<Meta name="url" :content="`${nuxtApp?.$app_origin}${$route?.path}`" />
				<Meta property="og:url" :content="`${nuxtApp?.$app_origin}${$route?.path}`" />
				<Link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<Link rel="apple-touch-icon" type="image/png" href="/favicon.png" />
				<Link rel="apple-touch-startup-image" href="/favicon.png" />
			</Head>
		</Html>
		<div class="bg-1 fixed object-none" />
		<div class="bg-2 fixed object-none" />
		<div class="bg-3 fixed object-none" />
		<NuxtPage />
	</NuxtLayout>
</template>

<script lang="ts" setup>
const nuxtApp = useNuxtApp();
</script>

<style lang="scss">
body {
	@apply h-screen bg-white dark:bg-black dark:text-gray-200;
}

.bg-1 {
	background: radial-gradient(rgb(146, 31, 228), transparent);
	animation: motion1 12s ease-out infinite;
	border-radius: 50%;
	mix-blend-mode: exclusion;
	z-index: -1;
	opacity: 0.25;
	filter: blur(200px);
}
.bg-2 {
	background: radial-gradient(rgb(191, 23, 118), transparent);
	animation: motion2 15s ease-in infinite alternate;
	border-radius: 50%;
	mix-blend-mode: color-dodge;
	z-index: -1;
	opacity: 0.25;
	filter: blur(200px);
}
.bg-3 {
	background: radial-gradient(rgb(23, 176, 214), transparent);
	animation: motion3 12s ease infinite alternate;
	border-radius: 50%;
	mix-blend-mode: screen;
	z-index: -1;
	opacity: 0.25;
	filter: blur(200px);
}

@keyframes motion1 {
	0% {
		opacity: 0.25;
		transform: translate(0%, 0%);
		width: 100%;
		height: 100%;
	}
	25% {
		opacity: 0.25;
		transform: translate(-25%, 25%);
		width: 80%;
		height: 80%;
	}
	50% {
		opacity: 0.4;
		transform: translate(0%, 50%);
		width: 75%;
		height: 75%;
	}
	75% {
		opacity: 0.5;
		transform: translate(25%, 25%);
		width: 80%;
		height: 80%;
	}
	100% {
		opacity: 0.25;
		transform: translate(0%, 0%);
		width: 100%;
		height: 100%;
	}
}

@keyframes motion2 {
	0% {
		opacity: 0.25;
		transform: translate(0%, 80%);
		width: 80%;
		height: 90%;
	}
	25% {
		opacity: 0.25;
		transform: translate(-20%, 60%);
		width: 70%;
		height: 70%;
	}
	50% {
		opacity: 0.4;
		transform: translate(0%, 40%);
		width: 80%;
		height: 80%;
	}
	75% {
		opacity: 0.5;
		transform: translate(25%, 80%);
		width: 60%;
		height: 60%;
	}
	100% {
		opacity: 0.25;
		transform: translate(0%, 80%);
		width: 80%;
		height: 90%;
	}
}

@keyframes motion3 {
	0% {
		opacity: 0.25;
		transform: translate(50%, 10%);
		width: 30%;
		height: 30%;
	}
	25% {
		opacity: 0.25;
		transform: translate(70%, 0%);
		width: 50%;
		height: 50%;
	}
	50% {
		opacity: 0.4;
		transform: translate(80%, -10%);
		width: 30%;
		height: 30%;
	}
	75% {
		opacity: 0.5;
		transform: translate(70%, 0%);
		width: 50%;
		height: 50%;
	}
	100% {
		opacity: 0.25;
		transform: translate(50%, 0%);
		width: 70%;
		height: 70%;
	}
}
</style>
```
