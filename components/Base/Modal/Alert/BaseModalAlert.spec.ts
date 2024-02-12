import { render } from '@testing-library/vue';
import BaseModalAlert from './BaseModalAlert.vue';
import { unitTestModalAlert } from './BaseModalAlert.const';

const renderWrapper = ({ props = {} }) =>
	render(BaseModalAlert, {
		props,
		global: {
			stubs: ['BaseIcon'],
			mocks: {
				$t: () => {},
			},
		},
	});

describe('Given a BaseModalAlert component', () => {
	describe('When it is rendered', () => {
		describe('And a title prop is passed', () => {
			test('Then should render the title', () => {
				const title = 'Title';
				const { getByText } = renderWrapper({ props: { title } });
				expect(getByText(title)).toBeTruthy();
			});
		});
		describe.each(unitTestModalAlert)('And the type is %s', (props) => {
			test('Then should render the correct icon with the correct color and the correct buttons', async () => {
				const { getByTestId } = renderWrapper({ props });
				const icon = getByTestId('base-modal-alert__icon');
				expect(icon).toBeTruthy();
				const colorAttribute = icon.getAttribute('color');
				const iconAttribute = icon.getAttribute('icon');

				await nextTick();

				switch (props.type) {
					case 'success':
						expect(iconAttribute).toBe('check');
						expect(colorAttribute).toBe('green');
						break;
					case 'error':
						expect(iconAttribute).toBe('error');
						expect(colorAttribute).toBe('red');
						break;
					case 'warning':
						expect(getByTestId('base-modal-alert__confirm-button')).toBeTruthy();
						expect(iconAttribute).toBe('warning');
						expect(colorAttribute).toBe('yellow');
						break;
					case 'info':
						expect(getByTestId('base-modal-alert__understood-button')).toBeTruthy();
						expect(iconAttribute).toBe('info');
						expect(colorAttribute).toBe('blue');
						break;
				}
			});
		});
	});
});
