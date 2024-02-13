import screenStore from './colorMode';
import userStore from './user';
import languageStore from './language';
import floatMenuStore from './floatMenu';
import audioStore from './audio';

export const piniaMock = {
	createSpy: vi.fn(),
	initialState: {
		screen: screenStore,
		user: userStore,
		language: languageStore,
		floatMenu: floatMenuStore,
		audio: audioStore,
	},
	stubActions: false,
};
