import { render } from '@testing-library/vue';
import BaseFeedback from './BaseFeedback.vue';
import { UnitTestFeedback } from './BaseFeedback.cons';

const renderWrapper = ({ props = {} }) =>
	render(BaseFeedback, {
		props,
	});

describe('Given a BaseFeedback component', () => {
	describe('When it is rendered', () => {
		describe('And no props are passed', () => {
			test('Then should render the feedback with default props', () => {
				const { getByTestId } = renderWrapper({});
				const feedback = getByTestId('base-feedback');
				expect(feedback).toBeTruthy();
				expect(feedback.textContent).toContain('');
			});
		});
		describe.each(UnitTestFeedback)('And type and message props are passed', (props) => {
			test('Then should render the feedback the correct styles and message', () => {
				const { getByTestId } = renderWrapper({
					props,
				});
				const feedback = getByTestId('base-feedback');
				expect(feedback.textContent).toContain(props.message);

				switch (props.type) {
					case 'error':
						expect(feedback.className).toContain('text-red-500');
						break;
					case 'success':
						expect(feedback.className).toContain('text-green-500');
						break;
					case 'warning':
						expect(feedback.className).toContain('text-yellow-500');
						break;
					case 'info':
						expect(feedback.className).toContain('text-blue-500');
						break;
				}
			});
		});
	});
});
