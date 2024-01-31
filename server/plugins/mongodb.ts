import { connect } from '@/utils/database';

export default defineNitroPlugin(async () => {
	try {
		await connect();
	} catch (error) {
		console.error('Error when trying to connect with MongoDB', error);
	}
});
