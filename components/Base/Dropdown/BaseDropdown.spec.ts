import { render } from '@testing-library/vue';
import { createPinia, setActivePinia } from 'pinia';
import BaseDropdown from './BaseDropdown.vue';
import { piniaMock } from '~/__mocks__/store/pinia';

vi.mock('@/store/colorMode', () => ({ useScreenStore: () => piniaMock.screenStore }));

vi.mock('@/components/Base/Button/BaseButton.vue');
vi.mock('@/components/Base/Input/BaseInput.vue');

const renderWrapper = ({ props = {} }) =>
	render(BaseDropdown, {
		props,
	});

describe('Given a BaseDropdown component', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	describe('When it is rendered', () => {
		describe('And data prop is passed', () => {
			describe('And the user clicks on the dropdown', () => {
				test('Then it should the dropdown list', async () => {
					const { queryAllByTestId, getByTestId } = renderWrapper({
						props: {
							data: [
								{
									label: 'Option 1',
									value: 'option-1',
								},
								{
									label: 'Option 2',
									value: 'option-2',
								},
							],
						},
					});

					const input = getByTestId('base-dropdown__input');

					await input.click();

					await nextTick();

					const dropdownItem = queryAllByTestId('base-dropdown__list-item');

					expect(dropdownItem).toHaveLength(2);
				});
			});
			describe('And modelValue is passes and noCleanable and multiselect props are false', () => {
				test('Then it should render the close button', () => {
					const { getByTestId } = renderWrapper({
						props: {
							data: [
								{
									label: 'Option 1',
									value: 'option-1',
								},
								{
									label: 'Option 2',
									value: 'option-2',
								},
							],
							modelValue: 'option-1',
							noCleanable: false,
							multiselect: false,
						},
					});

					const closeButton = getByTestId('base-dropdown__close');

					expect(closeButton).toBeTruthy();
				});
			});

			describe('And multiselect is prop true and there are selectedItems', () => {
				test('Then it should render the selected items', () => {
					const { queryAllByTestId } = renderWrapper({
						props: {
							data: [
								{
									label: 'Option 1',
									value: 'option-1',
								},
								{
									label: 'Option 2',
									value: 'option-2',
								},
							],
							modelValue: ['option-1', 'option-2'],
							multiselect: true,
						},
					});

					const selectedItems = queryAllByTestId('base-dropdown__chip');

					expect(selectedItems).toHaveLength(2);
				});
			});
		});
	});
});
