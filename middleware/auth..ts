export default defineNuxtRouteMiddleware(({ path }) => {
	const user = useSupabaseUser();
	const router = useRouter();

	if (!user) {
		navigateTo('/authentication/login');
	}
	if (user && (path.includes('authentication') || path === '/')) {
		router.push('/app/projects');
	}
});
