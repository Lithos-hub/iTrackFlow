import { checkFileType } from './file';

describe('Given checkFileType method', () => {
	describe('When it is called', () => {
		describe('And the file type is image and it cheks is an image', () => {
			test('Then it should return true for image type', () => {
				expect(checkFileType({ type: 'image/png' } as File, 'image')).toBe(true);
			});
		});

		describe('And the file type is audio and it cheks is an audio', () => {
			test('Then it should return true for audio type', () => {
				expect(checkFileType({ type: 'audio/mpeg' } as File, 'audio')).toBe(true);
			});
		});

		describe('And the file type is a PDF and it cheks is an image', () => {
			test('Then it should return false for invalid type', () => {
				expect(checkFileType({ type: 'application/pdf' } as File, 'image')).toBe(false);
			});
		});

		describe('And the file type is a PDF and it cheks is an audio', () => {
			test('Then it should return false for invalid type', () => {
				expect(checkFileType({ type: 'application/pdf' } as File, 'audio')).toBe(false);
			});
		});
	});
});
