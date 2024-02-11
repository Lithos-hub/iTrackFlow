import { screenStore } from './colorMode';
import { userStore } from './userStore';

export const piniaMock = {
	initialState: {
		screen: screenStore,
		user: userStore,
	},
};
