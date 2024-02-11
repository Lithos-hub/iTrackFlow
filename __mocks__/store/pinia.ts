import { screenStore } from './colorMode';
import { userStore } from './user';
import { languageStore } from './language';

export const piniaMock = {
	createSpy: vi.fn(),
	initialState: {
		screen: screenStore,
		user: userStore,
		language: languageStore,
	},
};
