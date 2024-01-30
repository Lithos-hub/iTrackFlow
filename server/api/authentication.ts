// Authentication

export default defineEventHandler(async (event) => {
	const { request, response } = event;

	// Get the user from the request
	const user = await getUserFromRequest(request);

	// If the user is not logged in, return a 401
	if (!user) {
		return response.status(401).json({ message: 'Unauthorized' });
	}

	// Otherwise, return the user
	return response.json(user);
});
