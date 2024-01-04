import { useUserStore } from '@/store/userStore';

export default defineNuxtRouteMiddleware((_, __) => {
	const { getSession } = useUserStore();

	getSession();
});
