import { getTailwindColor } from './color';

describe('Given getTailwindColor method', () => {
	describe('When it is called', () => {
		describe('And the color is black', () => {
			test('Then it should return black color code when color is black', () => {
				const result = getTailwindColor('black');
				expect(result).toBe('#000000');
			});
		});

		describe('And the color is white', () => {
			test('Then it should return white color code when color is white', () => {
				const result = getTailwindColor('white');
				expect(result).toBe('#ffffff');
			});
		});

		describe('And the color is transparent', () => {
			test('Then it should return transparent when color is transparent', () => {
				const result = getTailwindColor('transparent');
				expect(result).toBe('transparent');
			});
		});

		describe('And the color is red with shade of 600', () => {
			test('Then it should return color code for given color and shade', () => {
				const result = getTailwindColor('red', '600');
				expect(result).toBe('#dc2626');
			});
		});

		describe('And the color is blue with no shade', () => {
			test('Then it should return color code for given color and default shade when shade is not provided', () => {
				const result = getTailwindColor('blue');
				expect(result).toBe('#3b82f6');
			});
		});
	});
});
