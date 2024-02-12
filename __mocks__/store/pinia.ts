import screenStore from './colorMode';
import userStore from './user';
import languageStore from './language';
import floatMenuStore from './floatMenu';

export const piniaMock = {
	createSpy: vi.fn(),
	initialState: {
		screen: screenStore,
		user: userStore,
		language: languageStore,
		floatMenu: floatMenuStore,
	},
	stubActions: false,
};
