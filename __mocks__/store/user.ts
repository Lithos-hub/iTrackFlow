import type { User } from '@supabase/supabase-js';

export const userStore = {
	supabaseClient: vi.fn(),
	supabaseUser: null as User | null,
	login: vi.fn(),
	signUp: vi.fn(),
	logout: vi.fn(),
};
