export default defineEventHandler(async (_) => {
	try {
		return await UserSchema.find({});
	} catch (error) {
		return error;
	}
});
