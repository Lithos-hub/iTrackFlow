export default defineNuxtRouteMiddleware(({ path }) => {
	// const user = useSupabaseUser();
	const user = true;
	const router = useRouter();

	if (!user) {
		navigateTo('/authentication/login');
	} else if (path.includes('authentication') || path === '/') {
		router.push('/app/projects');
	}
});
