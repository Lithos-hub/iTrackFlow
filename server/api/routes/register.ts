import { onEncryptPassword } from '@/utils/bcrypt';
import { genToken } from '@/utils/jwt.handle';

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);

		const userExists = await UserSchema.findOne({ email: body.email });

		if (userExists) {
			return {
				status: 409,
				body: {
					message: 'USER_ALREADY_EXISTS',
				},
			};
		}

		const encryptedPass = await onEncryptPassword(body.password);

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...rest } = await new UserSchema({ ...body, password: encryptedPass }).save();

		return {
			status: 200,
			body: {
				message: 'SUCCESS',
				token: genToken(rest._id),
				user: rest,
			},
		};
	} catch (error) {
		return error;
	}
});
