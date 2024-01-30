import { hash, compare } from 'bcrypt';

const onEncryptPassword = async (pass: string) => await hash(pass, 10);

const onVerifyPassword = async (pass: string, encryptedPass: string) =>
	await compare(pass, encryptedPass);

export { onEncryptPassword, onVerifyPassword };
