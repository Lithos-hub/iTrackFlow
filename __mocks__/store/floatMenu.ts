import { FloatMenuOption } from '~/components/App/FloatMenu/FloatMenu.interfaces';

export default {
	clientX: 0,
	clientY: 0,
	isFloatMenuOpened: false,
	floatMenuTarget: null,
	floatMenuOptions: [
		{
			label: 'test 1',
			action: () => {},
		},
		{
			label: 'test 2',
			action: () => {},
		},
		{
			label: 'test 3',
			action: () => {},
		},
	] as FloatMenuOption[],
	setPosition: vi.fn(),
	toggleFloatMenu: vi.fn(),
	setFloatMenuTarget: vi.fn(),
};
