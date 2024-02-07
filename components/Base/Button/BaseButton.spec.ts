import { render } from '@testing-library/vue';
import { setActivePinia, createPinia } from 'pinia';
import BaseButton from './BaseButton.vue';
import { UnitTestButtons } from './BaseButton.const';
import { piniaMock } from '~/__mocks__/store/pinia';

vi.mock('@/store/colorMode', () => ({ useScreenStore: () => piniaMock.screenStore }));

const renderWrapper = ({ props = {} }) =>
	render(BaseButton, {
		global: {
			plugins: [createPinia()],
		},
		props,
	});

describe('Given a BaseButton component', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});
	describe('When it is rendered', () => {
		describe('And no props are passed', () => {
			test('Then should render the button with the default props', () => {
				const { getByTestId } = renderWrapper({});

				const button = getByTestId('base-button');

				const buttonClasses = button.className.split(' ');

				expect(button).toBeTruthy();
				expect(buttonClasses).toContain('button__primary');
				expect(buttonClasses).toContain('button__md');
				expect(buttonClasses).toContain('button__solid');
			});
		});
		describe('And props are passed', () => {
			test.each(UnitTestButtons)(
				'Then it should use the correct classes depending on the props passed',
				(props) => {
					const { getByTestId } = renderWrapper({ props });

					const button = getByTestId('base-button');

					const buttonClasses = button.className.split(' ');

					expect(button).toBeTruthy();
					expect(buttonClasses).toContain(`button__${props.color}`);
					expect(buttonClasses).toContain(`button__${props.size}`);
					expect(buttonClasses).toContain(`button__${props.variant}`);
				},
			);
		});
		describe('And the button is disabled', () => {
			test('Then should render the button with the disabled class', () => {
				const { getByTestId } = renderWrapper({ props: { disabled: true } });

				const button = getByTestId('base-button');

				const buttonClasses = button.className.split(' ');

				expect(button).toBeTruthy();
				expect(buttonClasses).toContain('button__disabled');
			});
		});

		describe('And an icon is passed', () => {
			test('Then should render the button with the icon', () => {
				const { getByTestId } = renderWrapper({ props: { icon: 'icon' } });

				const button = getByTestId('base-button');
				const icon = getByTestId('base-button--center-icon');

				expect(button).toBeTruthy();
				expect(icon).toBeTruthy();
			});
		});

		describe('And the icon is on the left', () => {
			test('Then should render the button with the icon on the left', () => {
				const { getByTestId } = renderWrapper({ props: { icon: 'icon', iconLeft: true } });

				const button = getByTestId('base-button');
				const icon = getByTestId('base-button--left-icon');

				expect(button).toBeTruthy();
				expect(icon).toBeTruthy();
			});
		});

		describe('And the icon is on the right', () => {
			test('Then should render the button with the icon on the right', () => {
				const { getByTestId } = renderWrapper({ props: { icon: 'icon', iconRight: true } });

				const button = getByTestId('base-button');
				const icon = getByTestId('base-button--right-icon');

				expect(button).toBeTruthy();
				expect(icon).toBeTruthy();
			});
		});
	});
});
