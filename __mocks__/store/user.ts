import type { User } from '@supabase/supabase-js';

export const userStore = {
	supabaseClient: {
		auth: {
			signInWithPassword: vi.fn(),
			signUp: vi.fn(),
			signOut: vi.fn(),
		},
	},
	supabaseUser: null as User | null,
	login: vi.fn(),
	signUp: vi.fn(),
	logout: vi.fn(),
};
