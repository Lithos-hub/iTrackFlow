import UserModel from '@/server/models/user.schema';

export default defineEventHandler(async ({ context }) => {
	try {
		return await UserModel.findOneAndDelete({ _id: context.params?._id });
	} catch (error) {
		return error;
	}
});
