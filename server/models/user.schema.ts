import { UserModel } from './user.interfaces';
import { defineMongooseModel } from '#nuxt/mongoose';

export const UserSchema = defineMongooseModel<UserModel>({
	name: 'User',
	schema: {
		name: {
			required: true,
			type: String,
			trim: true,
		},
		lastname: {
			required: true,
			type: String,
			trim: true,
		},
		email: {
			required: true,
			type: String,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			required: true,
			type: String,
			trim: true,
		},
		role: {
			required: true,
			type: String,
			default: 'anon',
		},
	},
});
