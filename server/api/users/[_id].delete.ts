export default defineEventHandler(async ({ context }) => {
	try {
		return await UserSchema.findOneAndDelete({ _id: context.params?._id });
	} catch (error) {
		return error;
	}
});
