import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
	const user = ref<'user' | null>(null);
	const activeSession = ref<boolean>(false);

	const router = useRouter();

	const login = () => {
		user.value = 'user';
		localStorage.setItem('token', 'token');
		activeSession.value = true;
	};

	const logout = () => {
		user.value = null;
		router.push('/');
		localStorage.clear();
		activeSession.value = false;
	};

	const getSession = () => {
		if (process.client && localStorage.getItem('token')) {
			user.value = 'user';
			login();
		} else {
			activeSession.value = false;
		}
	};

	return { user, login, logout, getSession, activeSession };
});
