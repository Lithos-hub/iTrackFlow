import { render } from '@testing-library/vue';
import BaseCard from './BaseCard.vue';

describe('Given a BaseCard component', () => {
	describe('When it is rendered', () => {
		describe('And a text is provided', () => {
			test('Then should render the card with default slot', () => {
				const { getByTestId } = render(BaseCard, {
					slots: {
						default: 'Card content',
					},
				});
				const card = getByTestId('base-card');
				expect(card).toBeTruthy();
				expect(card.textContent).toContain('Card content');
			});
		});
		describe('And a title slot is provided', () => {
			test('Then should render the card with title slot', () => {
				const { getByTestId } = render(BaseCard, {
					slots: {
						title: 'Card title',
					},
				});
				const card = getByTestId('base-card');
				expect(card).toBeTruthy();
				expect(card.textContent).toContain('Card title');
			});
		});
		describe('And an actions slot is provided', () => {
			test('Then should render the card with actions slot', () => {
				const { getByTestId } = render(BaseCard, {
					slots: {
						actions: 'Card actions',
					},
				});
				const card = getByTestId('base-card');
				expect(card).toBeTruthy();
				expect(card.textContent).toContain('Card actions');
			});
		});
	});
});
