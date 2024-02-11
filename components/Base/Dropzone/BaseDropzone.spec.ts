import { render } from '@testing-library/vue';
import { createPinia, setActivePinia } from 'pinia';
import BaseDropzone from './BaseDropzone.vue';
import { UnitTestDropzone } from './BaseDropzone.const';
import { piniaMock } from '~/__mocks__/store/pinia';

vi.mock('@/store/screen', () => ({ useScreenStore: () => piniaMock.screenStore }));

describe('Given a BaseDropzone component', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});
	describe.each(UnitTestDropzone)('When the component is rendered', (props) => {
		describe(`And the isOverDropZone is ${props.isOverDropZone}`, () => {
			test('Then should render the component with the correct styles', () => {
				const { getByTestId } = render(BaseDropzone, {
					props: {
						isOverDropZone: props.isOverDropZone,
					},
				});

				const dropzone = getByTestId('base-dropzone');

				const classes = dropzone.className;

				const expectedClasses = props.isOverDropZone
					? ['bg-success/10', 'selected__border-success']
					: ['bg-none', 'border-dashed', 'border-gray-500'];

				expectedClasses.forEach((expectedClass) => {
					expect(classes).toContain(expectedClass);
				});
			});
		});
	});
});
