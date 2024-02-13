import { getRandomNumberId } from './numbers';

describe('Given getRandomNumberId method', () => {
	describe('When it is called', () => {
		test('Then it should return a string', () => {
			const result = getRandomNumberId();
			expect(typeof result).toBe('string');
		});

		test('Then it should return a valid UUID', () => {
			const result = getRandomNumberId();
			const uuidRegex =
				/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
			expect(result).toMatch(uuidRegex);
		});

		test('Then it should return an unique UUID each time', () => {
			const result1 = getRandomNumberId();
			const result2 = getRandomNumberId();
			expect(result1).not.toBe(result2);
		});
	});
});
