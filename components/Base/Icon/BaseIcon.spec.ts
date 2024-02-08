import { render } from '@testing-library/vue';
import BaseIcon from './BaseIcon.vue';
import { piniaMock } from '~/__mocks__/store/pinia';

vi.mock('@/store/colorMode', () => ({ useScreenStore: () => piniaMock.screenStore }));

const renderWrapper = ({ props = {} }) =>
	render(BaseIcon, {
		props,
	});

describe('Given a BaseIcon component', () => {
	describe('When it is rendered', () => {
		test('Then it should render correctly', () => {
			const { getByTestId } = renderWrapper({
				props: {
					icon: 'icon',
				},
			});
			expect(getByTestId('base-icon')).toBeTruthy();
		});
	});
});
