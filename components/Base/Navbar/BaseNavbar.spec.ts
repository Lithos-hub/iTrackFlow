import { render } from '@testing-library/vue';
import { createPinia, setActivePinia } from 'pinia';
import type { User } from '@supabase/supabase-js';
import { createTestingPinia } from '@pinia/testing';
import BaseNavbar from './BaseNavbar.vue';
import { piniaMock } from '~/__mocks__/store/pinia';

vi.mock('@/store/screen', () => ({ useScreenStore: () => piniaMock.initialState.screen }));
// vi.mock('@/store/user', () => ({ useUserStore: () => piniaMock.initialState.user }));

const renderWrapper = ({ props = {}, pinia = piniaMock }) =>
	render(BaseNavbar, {
		props,
		global: {
			mocks: {
				pinia: createTestingPinia(pinia),
				stubs: ['BaseButton', 'BaseInput', 'BaseIcon'],
				$t: (key: string) => key,
			},
		},
	});

describe('Given a BaseNavbar component', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	describe('When the component is rendered', () => {
		it('Then should render the title', () => {
			const { getByText } = renderWrapper({});
			getByText('iTrackFlow');
		});

		describe('And the user is not logged in', () => {
			it('Then should render the login button', () => {
				const { getByTestId } = renderWrapper({});

				const loginButton = getByTestId('base-navbar__login-button');

				expect(loginButton).toBeTruthy();
			});
		});

		describe('And the user is logged in', () => {
			it('Then should render the logout button', async () => {
				const { getByTestId } = renderWrapper({
					pinia: {
						initialState: {
							...piniaMock.initialState,
							user: {
								...piniaMock.initialState.user,
								supabaseUser: {} as User,
							},
						},
					},
				});

				await nextTick();

				const logoutButton = getByTestId('base-navbar__logout-button');

				expect(logoutButton).toBeTruthy();
			});
		});
	});
});
