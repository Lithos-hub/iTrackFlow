export default defineNuxtRouteMiddleware(async ({ path }) => {
	const user = useSupabaseUser();
	if (!user.value && !path.includes('authentication')) {
		await navigateTo('/authentication/login');
	} else if (path.includes('authentication')) {
		await navigateTo('/app/dashboard/projects');
	}
});
