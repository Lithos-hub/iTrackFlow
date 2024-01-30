import { sign, verify } from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

const JWT_SECRET = process.env.JWT_SECRET as string;

const genToken = async (_id: ObjectId) =>
	await sign({ _id }, JWT_SECRET, {
		expiresIn: 86400,
	});

const verifyToken = async (jwt: string) => await verify(jwt, JWT_SECRET);

export { genToken, verifyToken };
