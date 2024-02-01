import mongoose, { Schema, model, Model } from 'mongoose';
import { UserModel } from './user.interfaces';

export const userSchema = new Schema<UserModel>(
	{
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
		role: {
			required: true,
			type: String,
			default: 'guest',
		},
	},
	{
		timestamps: true,
	},
);

const User: Model<UserModel> = mongoose.models.User || model('User', userSchema);

export default User;
