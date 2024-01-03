export default defineEventHandler((event) => {
	// MongoDB GET call
	if (event.method === 'GET') {
		return {
			result: event,
		};
	}
});
