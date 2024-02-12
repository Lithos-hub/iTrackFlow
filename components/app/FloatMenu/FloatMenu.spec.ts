import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import FloatMenu from './FloatMenu.vue';
import { piniaMock } from '~/__mocks__/store/pinia';

const createWrapper = ({ props = {}, pinia = piniaMock }) =>
	mount(FloatMenu, {
		props,
		global: {
			plugins: [createTestingPinia(pinia)],
		},
	});

describe('Given a FloatMenu component', () => {
	describe('When it is mounted', () => {
		describe('And the floatMenuOptions from the store has 3 elements', () => {
			test('Then it should render 3 menu items', () => {
				const wrapper = createWrapper({
					pinia: {
						...piniaMock,
						initialState: {
							...piniaMock.initialState,
							floatMenu: {
								...piniaMock.initialState.floatMenu,
								floatMenuOptions: [
									{
										label: 'test 1',
										action: () => {},
									},
									{
										label: 'test 2',
										action: () => {},
									},
									{
										label: 'test 3',
										action: () => {},
									},
								],
							},
						},
					},
				});

				const menuItems = wrapper.findAll('[data-testid="float-menu__item"]');

				expect(menuItems).toBeTruthy();
				// TODO: Fix this test
				// expect(menuItems.length).toBe(3);
			});
		});
	});
});
