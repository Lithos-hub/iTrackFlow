import type { RouterConfig } from '@nuxt/schema';
import { promiseTimeout } from '@vueuse/core';

export default <RouterConfig>{
	async scrollBehavior(_, __, savedPosition) {
		if (savedPosition) {
			await promiseTimeout(50);
			return savedPosition;
		} else {
			return {
				top: 0,
			};
		}
	},
};
