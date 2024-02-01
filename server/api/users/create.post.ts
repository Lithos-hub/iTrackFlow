import UserModel from '@/server/models/user.schema';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	try {
		return await new UserModel(body).save();
	} catch (error) {
		return error;
	}
});
