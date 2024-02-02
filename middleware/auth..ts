export default defineNuxtRouteMiddleware(({ path }) => {
	const user = useSupabaseUser();

	if (!user.value) {
		return navigateTo('/authentication/login');
	} else if (path.includes('authentication')) {
		return navigateTo('/app/dashboard/projects');
	}
});
