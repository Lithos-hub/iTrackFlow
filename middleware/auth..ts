export default defineNuxtRouteMiddleware(({ path }) => {
	const user = useSupabaseUser();
	// const user = ref(false);
	if (!user.value) {
		navigateTo('/authentication/login');
	} else if (path.includes('authentication')) {
		navigateTo('/app/dashboard/projects');
	}
});
