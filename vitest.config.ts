import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
	test: {
		environment: 'nuxt',
		globals: true,
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			include: [
				'**/utils/**',
				'**/components/**/*.vue',
				'**/layouts/**/*.vue',
				'**/pages/**/*.vue',
				'**/store/**',
				'**/middleware/**',
				'**/plugins/**',
			],
		},
	},
});
