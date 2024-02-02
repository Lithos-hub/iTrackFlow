export default defineNuxtRouteMiddleware(({ path }) => {
	// const user = useSupabaseUser();
	const user = ref(true);

	if (!user.value) {
		return navigateTo('/authentication/login');
	} else if (path.includes('authentication')) {
		return navigateTo('/app/dashboard/projects');
	}
});
