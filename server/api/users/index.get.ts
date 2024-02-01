import UserModel from '@/server/models/user.schema';

export default defineEventHandler(async (_) => {
	try {
		return await UserModel.find({});
	} catch (error) {
		return error;
	}
});
