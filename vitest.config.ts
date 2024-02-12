import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
	test: {
		environment: 'jsdom',
		globals: true,
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			include: [
				'**/utils/**',
				'**/components/**/*.vue',
				'**/layouts/**/*.vue',
				'**/pages/**/*.vue',
				'**/store/*.ts',
				'**/plugins/**',
			],
			exclude: ['**/index.ts'],
		},
	},
});
