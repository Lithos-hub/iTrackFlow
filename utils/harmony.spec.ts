import { getScaleNotes } from './harmony';

import {
	C_AUGMENTED_POSITIONS,
	C_DIMINISHED_POSITIONS,
	C_DORIAN_POSITIONS,
	C_HARMONIC_MINOR_POSITIONS,
	C_LOCRIAN_POSITIONS,
	C_LYDIAN_POSITIONS,
	C_MAJOR_BLUES_POSITIONS,
	C_MAJOR_POSITIONS,
	C_MELODIC_MINOR_POSITIONS,
	C_MINOR_BLUES_POSITIONS,
	C_MINOR_POSITIONS,
	C_MIXOLYDIAN_POSITIONS,
	C_PENTATONIC_MAJOR_POSITIONS,
	C_PENTATONIC_MINOR_POSITIONS,
	C_PHRYGIAN_POSITIONS,
	C_WHOLE_TONE_POSITIONS,
} from '~/constants';

describe('Given getScaleNotes method', () => {
	describe('When it is called', () => {
		test('Then it should return correct positions for major scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'major' })).toEqual(C_MAJOR_POSITIONS);
		});

		test('Then it should return correct positions for minor scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'minor' })).toEqual(C_MINOR_POSITIONS);
		});

		test('Then it should return correct positions for harmonic minor scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'harmonic_minor' })).toEqual(
				C_HARMONIC_MINOR_POSITIONS,
			);
		});

		test('Then it should return correct positions for melodic minor scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'melodic_minor' })).toEqual(
				C_MELODIC_MINOR_POSITIONS,
			);
		});

		test('Then it should return correct positions for pentatonic major scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'pentatonic_major' })).toEqual(
				C_PENTATONIC_MAJOR_POSITIONS,
			);
		});

		test('Then it should return correct positions for pentatonic minor scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'pentatonic_minor' })).toEqual(
				C_PENTATONIC_MINOR_POSITIONS,
			);
		});

		test('Then it should return correct positions for blues scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'blues_major' })).toEqual(
				C_MAJOR_BLUES_POSITIONS,
			);
		});

		test('Then it should return correct positions for whole tone scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'blues_minor' })).toEqual(
				C_MINOR_BLUES_POSITIONS,
			);
		});

		test('Then it should return correct positions for whole tone scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'whole_tone' })).toEqual(
				C_WHOLE_TONE_POSITIONS,
			);
		});

		test('Then it should return correct positions for diminished scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'diminished' })).toEqual(
				C_DIMINISHED_POSITIONS,
			);
		});

		test('Then it should return correct positions for augmented scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'augmented' })).toEqual(
				C_AUGMENTED_POSITIONS,
			);
		});

		// The same with ionian, dorian, phrygian, lydian, mixolydian, aeolian, locrian

		test('Then it should return correct positions for ionian scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'ionian' })).toEqual(C_MAJOR_POSITIONS);
		});

		test('Then it should return correct positions for dorian scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'dorian' })).toEqual(C_DORIAN_POSITIONS);
		});

		test('Then it should return correct positions for phrygian scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'phrygian' })).toEqual(C_PHRYGIAN_POSITIONS);
		});

		test('Then it should return correct positions for lydian scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'lydian' })).toEqual(C_LYDIAN_POSITIONS);
		});

		test('Then it should return correct positions for mixolydian scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'mixolydian' })).toEqual(
				C_MIXOLYDIAN_POSITIONS,
			);
		});

		test('Then it should return correct positions for aeolian scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'aeolian' })).toEqual(C_MINOR_POSITIONS);
		});

		test('Then it should return correct positions for locrian scale', () => {
			expect(getScaleNotes({ rootNote: 'C', scaleType: 'locrian' })).toEqual(C_LOCRIAN_POSITIONS);
		});
	});
});
