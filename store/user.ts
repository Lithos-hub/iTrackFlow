import { defineStore } from 'pinia';
import { AuthenticationResponse } from './user.interfaces';

export const useUserStore = defineStore('user', () => {
	const router = useRouter();

	const { auth } = useSupabaseClient();
	const user = useSupabaseUser();
	// const user = true;

	const login = async (email: string, password: string): Promise<AuthenticationResponse> => {
		try {
			const { error } = await auth.signInWithPassword({
				email,
				password,
			});
			if (error) throw error;
			router.push('/app/dashboard/projects');
			return {
				success: 'Logged in!',
			};
		} catch (error: unknown) {
			return {
				error: (error as unknown as Error).message,
			};
		}
	};

	const signUp = async (email: string, password: string): Promise<AuthenticationResponse> => {
		try {
			const { data, error } = await auth.signUp({
				email,
				password,
			});
			if (error) throw error;
			return {
				success: 'Check your email for confirmation!',
				data,
			};
		} catch (error: unknown) {
			return {
				error: (error as unknown as Error).message,
			};
		}
	};

	const logout = async (): Promise<AuthenticationResponse> => {
		try {
			const { error } = await auth.signOut();
			if (error) throw error;
			location.reload();
			return {
				success: 'Logged out!',
			};
		} catch (error: unknown) {
			return {
				error: (error as unknown as Error).message,
			};
		}
	};

	return { user, login, signUp, logout };
});
