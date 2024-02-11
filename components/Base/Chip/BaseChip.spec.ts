import { render } from '@testing-library/vue';
import { createPinia, setActivePinia } from 'pinia';
import BaseChip from './BaseChip.vue';
import { UnitTestChips } from './BaseChip.const';
import { piniaMock } from '~/__mocks__/store/pinia';

vi.mock('@/store/screen', () => ({ useScreenStore: () => piniaMock.initialState.screen }));

const renderWrapper = ({ props = {}, slots = {} }) =>
	render(BaseChip, {
		props,
		slots,
	});

describe('Given a BaseChip component', () => {
	let wrapper;

	beforeEach(() => {
		setActivePinia(createPinia());
	});

	describe('When it is rendered', () => {
		describe('And no prop is provided', () => {
			test('Then should render the chip with default slot', () => {
				const { getByTestId } = renderWrapper({
					slots: {
						default: 'Chip content',
					},
				});
				const chip = getByTestId('base-chip');
				expect(chip).toBeTruthy();
				expect(chip.textContent).toContain('Chip content');
			});
		});

		describe('And closable prop is passed', () => {
			test('Then should render the chip with close button', () => {
				const { getByTestId } = renderWrapper({
					props: {
						closable: true,
					},
				});
				const chip = getByTestId('base-chip');
				const closeIcon = getByTestId('base-chip__close');
				expect(chip).toBeTruthy();
				expect(closeIcon).toBeTruthy();
			});
		});

		describe('And variant prop is passed', () => {
			test.each(UnitTestChips)(
				'Then it should the correct class depending on the variant',
				(props) => {
					wrapper = renderWrapper({
						props,
					});

					const chipElement = wrapper.getByTestId('base-chip');

					const classes = chipElement.className.split(' ');

					expect(classes).toContain(`chip__${props.variant}`);
				},
			);
		});
	});
});
