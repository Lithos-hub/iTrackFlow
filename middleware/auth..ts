export default defineNuxtRouteMiddleware(({ path }) => {
	const user = useSupabaseUser();

	if (!user) {
		navigateTo('/authentication/login');
	} else if (path.includes('authentication') || path === '/') {
		navigateTo('/app/projects');
	}
});
