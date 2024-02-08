import { test } from 'vitest';

import { render } from '@testing-library/vue';
import DataTable from './DataTable.vue';

const createWrapper = ({ props = {} }) => {
	return render(DataTable, {
		props,
	});
};

const headers = ['header1', 'header2'];

const dataList = [
	{
		id: 1,
		name: 'project 1',
	},
	{
		id: 2,
		name: 'project 2',
	},
];

test('Given DataTable component', () => {
	describe('When mounted', () => {
		test('Then it should render correctly', () => {
			const { getByTestId } = createWrapper({
				props: {
					tableKey: 1,
					headers,
					dataList,
				},
			});
			expect(getByTestId('DataTable')).toBeTruthy();
		});
	});
});
