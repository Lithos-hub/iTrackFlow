// import { render } from '@testing-library/vue';
import { createPinia, setActivePinia } from 'pinia';
// import type { User } from '@supabase/supabase-js';

import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import BaseNavbar from './BaseNavbar.vue';
import { piniaMock } from '~/__mocks__/store/pinia';

vi.mock('@/store/user', () => ({ useUserStore: () => piniaMock.initialState.user }));
vi.mock('@/store/screen', () => ({ useScreenStore: () => piniaMock.initialState.screen }));
vi.mock('@/composables/useColor', () => ({ useColor: () => ({ getTWColor: () => 'color' }) }));

const createWrapper = ({ props = {}, pinia = piniaMock }) =>
	mount(BaseNavbar, {
		props,
		global: {
			plugins: [createTestingPinia(pinia)],
			mocks: {
				stubs: ['BaseButton', 'BaseInput', 'BaseIcon'],
				$t: (key: string) => key,
			},
		},
	});

describe('Given a BaseNavbar component', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
		vi.clearAllMocks();
	});

	afterEach(() => {
		vi.unstubAllGlobals();
	});

	describe('When the component is rendered', () => {
		test('Then should render the title', () => {
			const wrapper = createWrapper({});
			const title = 'iTrackFlow';

			expect(wrapper.text()).toContain(title);
		});

		describe('And the user is not logged in', () => {
			test('Then should render the login button', () => {
				const wrapper = createWrapper({});

				const loginButton = wrapper.find('[data-testid="base-navbar__login-button"]');

				expect(loginButton).toBeTruthy();
			});
		});

		// TODO:

		// describe('And the user is logged in', () => {
		// 	test('Then should render the logout button', async () => {
		// 		vi.stubGlobal('useUserStore', () => ({ supabaseUser: {} as User }));
		// 		const { getByTestId } = createWrapper({});
		// 		await nextTick();

		// 		const logoutButton = getByTestId('base-navbar__logout-button');

		// 		expect(logoutButton).toBeTruthy();
		// 	});
		// });
	});
});
