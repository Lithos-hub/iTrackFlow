import { render } from '@testing-library/vue';
import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils';
import BaseInput from './BaseInput.vue';
import { UnitTestInput } from './BaseInput.const';
import { piniaMock } from '~/__mocks__/store/pinia';

vi.mock('@/store/screen', () => ({ useScreenStore: () => piniaMock.screenStore }));

const renderWrapper = ({ props = {} }) =>
	render(BaseInput, {
		props,
	});

const mountWrapper = ({ props = {} }) =>
	mount(BaseInput, {
		props,
	});

describe('Given a BaseInput component', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});
	describe('When it is rendered', () => {
		describe('And no props are passed', () => {
			test('Then it should render with the default props', () => {
				const { getByTestId } = renderWrapper({
					props: {},
				});
				const input = getByTestId('base-input__default');
				const classes = input.className.split(' ');

				expect(input).toBeTruthy();
				expect(classes).toContain('input__bordered');
			});
		});
		describe.each(UnitTestInput)('And the props are %o', (props) => {
			test('Then it should render with the correct props', () => {
				const { getByTestId } = renderWrapper({ props });
				const input = getByTestId('base-input__default');
				const classes = input.className.split(' ');

				expect(input).toBeTruthy();
				expect(classes).toContain(`input__${props.variant}`);

				if (!props.noOutline) {
					expect(classes).toContain('focus:ring-2');
				}
			});
		});

		describe('And the debounced prop is true', () => {
			test('Then it should render the debounced input', () => {
				const { getByTestId } = renderWrapper({
					props: {
						debounced: true,
					},
				});
				const input = getByTestId('base-input__debounced');
				expect(input).toBeTruthy();
			});

			test('Then it should emit the debounced event afer 1000 milliseconds', async () => {
				const wrapper = mountWrapper({
					props: {
						debounced: true,
					},
				});

				const inputElement = wrapper.find('input');

				vi.useFakeTimers();

				await inputElement.setValue('test');

				vi.runAllTimers();

				expect(wrapper.emitted()['update:modelValue'].length).toBe(1);
			});
		});
	});
});
