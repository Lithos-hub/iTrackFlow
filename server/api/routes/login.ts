import { onVerifyPassword } from '@/utils/bcrypt';
import { genToken } from '@/utils/jwt.handle';

export default defineEventHandler(async (event) => {
	try {
		const { email: bodyEmail, password: bodyPassword } = await readBody(event);

		const userExists = await UserSchema.findOne({ bodyEmail });

		if (!userExists) {
			return {
				status: 404,
				body: {
					message: 'USER_NOT_FOUND',
				},
			};
		}

		const isVerified = await onVerifyPassword(bodyPassword, userExists.password);

		if (!isVerified) {
			return {
				status: 401,
				body: {
					message: 'INVALID_AUTH',
				},
			};
		}

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...rest } = userExists;

		return {
			status: 200,
			body: {
				token: genToken(rest._id),
				message: 'SUCCESS',
				user: rest,
			},
		};
	} catch (error) {
		return error;
	}
});
