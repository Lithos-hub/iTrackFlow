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
	MELODIC_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES,
	HARMONIC_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES,
	PENTATONIC_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES,
	PENTATONIC_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES,
	BLUES_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES,
	BLUES_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES,
	WHOLE_TONE_SCALE_NOMENCLATURES_BY_SEMITONES,
	DIMINISHED_SCALE_NOMENCLATURES_BY_SEMITONES,
	AUGMENTED_SCALE_NOMENCLATURES_BY_SEMITONES,
	IONIAN_SCALE_NOMENCLATURES_BY_SEMITONES,
	DORIAN_SCALE_NOMENCLATURES_BY_SEMITONES,
	PHRYGIAN_SCALE_NOMENCLATURES_BY_SEMITONES,
	LYDIAN_SCALE_NOMENCLATURES_BY_SEMITONES,
	MIXOLYDIAN_SCALE_NOMENCLATURES_BY_SEMITONES,
	AEOLIAN_SCALE_NOMENCLATURES_BY_SEMITONES,
	LOCRIAN_SCALE_NOMENCLATURES_BY_SEMITONES,
	MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES,
	MINOR_SCALE_NOMENCLATURES_BY_SEMITONES,
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

describe('Given getScaleFormula method', () => {
	describe('When it is called', () => {
		test('Then it should return correct formula for major scale', () => {
			expect(getScaleFormula('major')).toEqual(MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES);
		});

		test('Then it should return correct formula for minor scale', () => {
			expect(getScaleFormula('minor')).toEqual(MINOR_SCALE_NOMENCLATURES_BY_SEMITONES);
		});

		test('Then it should return correct formula for harmonic minor scale', () => {
			expect(getScaleFormula('harmonic_minor')).toEqual(
				HARMONIC_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES,
			);
		});

		test('Then it should return correct formula for melodic minor scale', () => {
			expect(getScaleFormula('melodic_minor')).toEqual(
				MELODIC_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES,
			);
		});

		test('Then it should return correct formula for pentatonic major scale', () => {
			expect(getScaleFormula('pentatonic_major')).toEqual(
				PENTATONIC_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES,
			);
		});

		test('Then it should return correct formula for pentatonic minor scale', () => {
			expect(getScaleFormula('pentatonic_minor')).toEqual(
				PENTATONIC_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES,
			);
		});

		test('Then it should return correct formula for major blues scale', () => {
			expect(getScaleFormula('blues_major')).toEqual(BLUES_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES);
		});

		test('Then it should return correct formula for minor blues scale', () => {
			expect(getScaleFormula('blues_minor')).toEqual(BLUES_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES);
		});

		test('Then it should return correct formula for whole tone scale', () => {
			expect(getScaleFormula('whole_tone')).toEqual(WHOLE_TONE_SCALE_NOMENCLATURES_BY_SEMITONES);
		});

		test('Then it should return correct formula for diminished scale', () => {
			expect(getScaleFormula('diminished')).toEqual(DIMINISHED_SCALE_NOMENCLATURES_BY_SEMITONES);
		});

		test('Then it should return correct formula for augmented scale', () => {
			expect(getScaleFormula('augmented')).toEqual(AUGMENTED_SCALE_NOMENCLATURES_BY_SEMITONES);
		});

		test('Then it should return correct formula for ionian scale', () => {
			expect(getScaleFormula('ionian')).toEqual(IONIAN_SCALE_NOMENCLATURES_BY_SEMITONES);
		});

		test('Then it should return correct formula for dorian scale', () => {
			expect(getScaleFormula('dorian')).toEqual(DORIAN_SCALE_NOMENCLATURES_BY_SEMITONES);
		});

		test('Then it should return correct formula for phrygian scale', () => {
			expect(getScaleFormula('phrygian')).toEqual(PHRYGIAN_SCALE_NOMENCLATURES_BY_SEMITONES);
		});

		test('Then it should return correct formula for lydian scale', () => {
			expect(getScaleFormula('lydian')).toEqual(LYDIAN_SCALE_NOMENCLATURES_BY_SEMITONES);
		});

		test('Then it should return correct formula for mixolydian scale', () => {
			expect(getScaleFormula('mixolydian')).toEqual(MIXOLYDIAN_SCALE_NOMENCLATURES_BY_SEMITONES);
		});

		test('Then it should return correct formula for aeolian scale', () => {
			expect(getScaleFormula('aeolian')).toEqual(AEOLIAN_SCALE_NOMENCLATURES_BY_SEMITONES);
		});

		test('Then it should return correct formula for locrian scale', () => {
			expect(getScaleFormula('locrian')).toEqual(LOCRIAN_SCALE_NOMENCLATURES_BY_SEMITONES);
		});
	});
});
