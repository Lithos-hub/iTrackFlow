import UserModel from '@/server/models/user.schema';

export default defineEventHandler(async (event) => {
	try {
		return await UserModel.findOne({ _id: event.context.params?._id });
	} catch (error) {
		return error;
	}
});
