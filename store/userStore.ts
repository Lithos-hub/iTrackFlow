import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
	const user = ref<'user' | null>(null);
	const router = useRouter();

	const login = () => {
		user.value = 'user';
	};

	const logout = () => {
		user.value = null;
		router.push('/');
		localStorage.clear();
	};

	return { user, login, logout };
});
