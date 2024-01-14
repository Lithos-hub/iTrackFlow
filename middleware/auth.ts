import { useUserStore } from '~/store/user';

export default defineNuxtRouteMiddleware((_, __) => {
	const { getSession } = useUserStore();

	getSession();
});
