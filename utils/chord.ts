import {
	C_MAJOR_POSITIONS,
	C_MINOR_POSITIONS,
	C_HARMONIC_MINOR_POSITIONS,
	C_MELODIC_MINOR_POSITIONS,
	C_PENTATONIC_MAJOR_POSITIONS,
	C_PENTATONIC_MINOR_POSITIONS,
	C_BLUES_POSITIONS,
	C_WHOLE_TONE_POSITIONS,
	C_DIMINISHED_POSITIONS,
	C_AUGMENTED_POSITIONS,
	C_CHROMATIC_POSITIONS,
	C_IONIAN_POSITIONS,
	C_DORIAN_POSITIONS,
	C_PHRYGIAN_POSITIONS,
	C_LYDIAN_POSITIONS,
	C_MIXOLYDIAN_POSITIONS,
	C_AEOLIAN_POSITIONS,
	C_LOCRIAN_POSITIONS,
	C_SHARP_MAJOR_POSITIONS,
	C_SHARP_MINOR_POSITIONS,
	C_SHARP_HARMONIC_MINOR_POSITIONS,
	C_SHARP_MELODIC_MINOR_POSITIONS,
	C_SHARP_PENTATONIC_MAJOR_POSITIONS,
	C_SHARP_PENTATONIC_MINOR_POSITIONS,
	C_SHARP_BLUES_POSITIONS,
	C_SHARP_WHOLE_TONE_POSITIONS,
	C_SHARP_DIMINISHED_POSITIONS,
	C_SHARP_AUGMENTED_POSITIONS,
	C_SHARP_CHROMATIC_POSITIONS,
	C_SHARP_IONIAN_POSITIONS,
	C_SHARP_DORIAN_POSITIONS,
	C_SHARP_PHRYGIAN_POSITIONS,
	C_SHARP_LYDIAN_POSITIONS,
	C_SHARP_MIXOLYDIAN_POSITIONS,
	C_SHARP_AEOLIAN_POSITIONS,
	C_SHARP_LOCRIAN_POSITIONS,
	D_MAJOR_POSITIONS,
	D_MINOR_POSITIONS,
	D_HARMONIC_MINOR_POSITIONS,
	D_MELODIC_MINOR_POSITIONS,
	D_PENTATONIC_MAJOR_POSITIONS,
	D_PENTATONIC_MINOR_POSITIONS,
	D_BLUES_POSITIONS,
	D_WHOLE_TONE_POSITIONS,
	D_DIMINISHED_POSITIONS,
	D_AUGMENTED_POSITIONS,
	D_CHROMATIC_POSITIONS,
	D_IONIAN_POSITIONS,
	D_DORIAN_POSITIONS,
	D_PHRYGIAN_POSITIONS,
	D_LYDIAN_POSITIONS,
	D_MIXOLYDIAN_POSITIONS,
	D_AEOLIAN_POSITIONS,
	D_LOCRIAN_POSITIONS,
	D_SHARP_MAJOR_POSITIONS,
	D_SHARP_MINOR_POSITIONS,
	D_SHARP_HARMONIC_MINOR_POSITIONS,
	D_SHARP_MELODIC_MINOR_POSITIONS,
	D_SHARP_PENTATONIC_MAJOR_POSITIONS,
	D_SHARP_PENTATONIC_MINOR_POSITIONS,
	D_SHARP_BLUES_POSITIONS,
	D_SHARP_WHOLE_TONE_POSITIONS,
	D_SHARP_DIMINISHED_POSITIONS,
	D_SHARP_AUGMENTED_POSITIONS,
	D_SHARP_CHROMATIC_POSITIONS,
	D_SHARP_IONIAN_POSITIONS,
	D_SHARP_DORIAN_POSITIONS,
	D_SHARP_PHRYGIAN_POSITIONS,
	D_SHARP_LYDIAN_POSITIONS,
	D_SHARP_MIXOLYDIAN_POSITIONS,
	D_SHARP_AEOLIAN_POSITIONS,
	D_SHARP_LOCRIAN_POSITIONS,
	E_MAJOR_POSITIONS,
	E_MINOR_POSITIONS,
	E_HARMONIC_MINOR_POSITIONS,
	E_MELODIC_MINOR_POSITIONS,
	E_PENTATONIC_MAJOR_POSITIONS,
	E_PENTATONIC_MINOR_POSITIONS,
	E_BLUES_POSITIONS,
	E_WHOLE_TONE_POSITIONS,
	E_DIMINISHED_POSITIONS,
	E_AUGMENTED_POSITIONS,
	E_CHROMATIC_POSITIONS,
	E_IONIAN_POSITIONS,
	E_DORIAN_POSITIONS,
	E_PHRYGIAN_POSITIONS,
	E_LYDIAN_POSITIONS,
	E_MIXOLYDIAN_POSITIONS,
	E_AEOLIAN_POSITIONS,
	E_LOCRIAN_POSITIONS,
	F_MAJOR_POSITIONS,
	F_MINOR_POSITIONS,
	F_HARMONIC_MINOR_POSITIONS,
	F_MELODIC_MINOR_POSITIONS,
	F_PENTATONIC_MAJOR_POSITIONS,
	F_PENTATONIC_MINOR_POSITIONS,
	F_BLUES_POSITIONS,
	F_WHOLE_TONE_POSITIONS,
	F_DIMINISHED_POSITIONS,
	F_AUGMENTED_POSITIONS,
	F_CHROMATIC_POSITIONS,
	F_IONIAN_POSITIONS,
	F_DORIAN_POSITIONS,
	F_PHRYGIAN_POSITIONS,
	F_LYDIAN_POSITIONS,
	F_MIXOLYDIAN_POSITIONS,
	F_AEOLIAN_POSITIONS,
	F_LOCRIAN_POSITIONS,
	F_SHARP_MAJOR_POSITIONS,
	F_SHARP_MINOR_POSITIONS,
	F_SHARP_HARMONIC_MINOR_POSITIONS,
	F_SHARP_MELODIC_MINOR_POSITIONS,
	F_SHARP_PENTATONIC_MAJOR_POSITIONS,
	F_SHARP_PENTATONIC_MINOR_POSITIONS,
	F_SHARP_BLUES_POSITIONS,
	F_SHARP_WHOLE_TONE_POSITIONS,
	F_SHARP_DIMINISHED_POSITIONS,
	F_SHARP_AUGMENTED_POSITIONS,
	F_SHARP_CHROMATIC_POSITIONS,
	F_SHARP_IONIAN_POSITIONS,
	F_SHARP_DORIAN_POSITIONS,
	F_SHARP_PHRYGIAN_POSITIONS,
	F_SHARP_LYDIAN_POSITIONS,
	F_SHARP_MIXOLYDIAN_POSITIONS,
	F_SHARP_AEOLIAN_POSITIONS,
	F_SHARP_LOCRIAN_POSITIONS,
	G_MAJOR_POSITIONS,
	G_MINOR_POSITIONS,
	G_HARMONIC_MINOR_POSITIONS,
	G_MELODIC_MINOR_POSITIONS,
	G_PENTATONIC_MAJOR_POSITIONS,
	G_PENTATONIC_MINOR_POSITIONS,
	G_BLUES_POSITIONS,
	G_WHOLE_TONE_POSITIONS,
	G_DIMINISHED_POSITIONS,
	G_AUGMENTED_POSITIONS,
	G_CHROMATIC_POSITIONS,
	G_IONIAN_POSITIONS,
	G_DORIAN_POSITIONS,
	G_PHRYGIAN_POSITIONS,
	G_LYDIAN_POSITIONS,
	G_MIXOLYDIAN_POSITIONS,
	G_AEOLIAN_POSITIONS,
	G_LOCRIAN_POSITIONS,
	G_SHARP_MAJOR_POSITIONS,
	G_SHARP_MINOR_POSITIONS,
	G_SHARP_HARMONIC_MINOR_POSITIONS,
	G_SHARP_MELODIC_MINOR_POSITIONS,
	G_SHARP_PENTATONIC_MAJOR_POSITIONS,
	G_SHARP_PENTATONIC_MINOR_POSITIONS,
	G_SHARP_BLUES_POSITIONS,
	G_SHARP_WHOLE_TONE_POSITIONS,
	G_SHARP_DIMINISHED_POSITIONS,
	G_SHARP_AUGMENTED_POSITIONS,
	G_SHARP_CHROMATIC_POSITIONS,
	G_SHARP_IONIAN_POSITIONS,
	G_SHARP_DORIAN_POSITIONS,
	G_SHARP_PHRYGIAN_POSITIONS,
	G_SHARP_LYDIAN_POSITIONS,
	G_SHARP_MIXOLYDIAN_POSITIONS,
	G_SHARP_AEOLIAN_POSITIONS,
	G_SHARP_LOCRIAN_POSITIONS,
	A_MAJOR_POSITIONS,
	A_MINOR_POSITIONS,
	A_HARMONIC_MINOR_POSITIONS,
	A_MELODIC_MINOR_POSITIONS,
	A_PENTATONIC_MAJOR_POSITIONS,
	A_PENTATONIC_MINOR_POSITIONS,
	A_BLUES_POSITIONS,
	A_WHOLE_TONE_POSITIONS,
	A_DIMINISHED_POSITIONS,
	A_AUGMENTED_POSITIONS,
	A_CHROMATIC_POSITIONS,
	A_IONIAN_POSITIONS,
	A_DORIAN_POSITIONS,
	A_PHRYGIAN_POSITIONS,
	A_LYDIAN_POSITIONS,
	A_MIXOLYDIAN_POSITIONS,
	A_AEOLIAN_POSITIONS,
	A_LOCRIAN_POSITIONS,
	A_SHARP_MAJOR_POSITIONS,
	A_SHARP_MINOR_POSITIONS,
	A_SHARP_HARMONIC_MINOR_POSITIONS,
	A_SHARP_MELODIC_MINOR_POSITIONS,
	A_SHARP_PENTATONIC_MAJOR_POSITIONS,
	A_SHARP_PENTATONIC_MINOR_POSITIONS,
	A_SHARP_BLUES_POSITIONS,
	A_SHARP_WHOLE_TONE_POSITIONS,
	A_SHARP_DIMINISHED_POSITIONS,
	A_SHARP_AUGMENTED_POSITIONS,
	A_SHARP_CHROMATIC_POSITIONS,
	A_SHARP_IONIAN_POSITIONS,
	A_SHARP_DORIAN_POSITIONS,
	A_SHARP_PHRYGIAN_POSITIONS,
	A_SHARP_LYDIAN_POSITIONS,
	A_SHARP_MIXOLYDIAN_POSITIONS,
	A_SHARP_AEOLIAN_POSITIONS,
	A_SHARP_LOCRIAN_POSITIONS,
	B_MAJOR_POSITIONS,
	B_MINOR_POSITIONS,
	B_HARMONIC_MINOR_POSITIONS,
	B_MELODIC_MINOR_POSITIONS,
	B_PENTATONIC_MAJOR_POSITIONS,
	B_PENTATONIC_MINOR_POSITIONS,
	B_BLUES_POSITIONS,
	B_WHOLE_TONE_POSITIONS,
	B_DIMINISHED_POSITIONS,
	B_AUGMENTED_POSITIONS,
	B_CHROMATIC_POSITIONS,
	B_IONIAN_POSITIONS,
	B_DORIAN_POSITIONS,
	B_PHRYGIAN_POSITIONS,
	B_LYDIAN_POSITIONS,
	B_MIXOLYDIAN_POSITIONS,
	B_AEOLIAN_POSITIONS,
	B_LOCRIAN_POSITIONS,
	MAJOR_SCALE_SEMITONES,
	MINOR_SCALE_SEMITONES,
	TRIADS_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES,
	TRIADS_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES,
	TETRAD_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES,
} from '@/constants';

import { ChordTypeData } from '~/components/app/MusicStaff/MusicStaff.interfaces';

const getDistanceBetweenNotes = (root: string, targetNote: string, scaleType: string) => {
	let targetPosition, rootPosition;
	switch (scaleType) {
		case 'major':
			targetPosition = C_MAJOR_POSITIONS.indexOf(targetNote);
			rootPosition = C_MAJOR_POSITIONS.indexOf(root);
			return MAJOR_SCALE_SEMITONES[targetPosition] - MAJOR_SCALE_SEMITONES[rootPosition];
		case 'minor':
			targetPosition = C_MINOR_POSITIONS.indexOf(targetNote);
			rootPosition = C_MINOR_POSITIONS.indexOf(root);
			return MINOR_SCALE_SEMITONES[targetPosition] - MINOR_SCALE_SEMITONES[rootPosition];
		default:
			return 0;
	}
};

const getScaleRoot = (keySignature: string) => keySignature.charAt(0);
const getScaleType = (keySignature: string) => keySignature.split('-').pop()?.trim();

const getScaleNotes = (keySignature: string) => {
	const scaleRoot = getScaleRoot(keySignature);
	const scaleType = getScaleType(keySignature);
	switch (scaleType) {
		case 'major':
			if (scaleRoot === 'C') return C_MAJOR_POSITIONS;
			if (scaleRoot === 'D') return D_MAJOR_POSITIONS;
			if (scaleRoot === 'E') return E_MAJOR_POSITIONS;
			if (scaleRoot === 'F') return F_MAJOR_POSITIONS;
			if (scaleRoot === 'G') return G_MAJOR_POSITIONS;
			if (scaleRoot === 'A') return A_MAJOR_POSITIONS;
			if (scaleRoot === 'B') return B_MAJOR_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_MAJOR_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_MAJOR_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_MAJOR_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_MAJOR_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_MAJOR_POSITIONS;
			break;
		case 'minor':
			if (scaleRoot === 'C') return C_MINOR_POSITIONS;
			if (scaleRoot === 'D') return D_MINOR_POSITIONS;
			if (scaleRoot === 'E') return E_MINOR_POSITIONS;
			if (scaleRoot === 'F') return F_MINOR_POSITIONS;
			if (scaleRoot === 'G') return G_MINOR_POSITIONS;
			if (scaleRoot === 'A') return A_MINOR_POSITIONS;
			if (scaleRoot === 'B') return B_MINOR_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_MINOR_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_MINOR_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_MINOR_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_MINOR_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_MINOR_POSITIONS;
			break;
		case 'harmonic_minor':
			if (scaleRoot === 'C') return C_HARMONIC_MINOR_POSITIONS;
			if (scaleRoot === 'D') return D_HARMONIC_MINOR_POSITIONS;
			if (scaleRoot === 'E') return E_HARMONIC_MINOR_POSITIONS;
			if (scaleRoot === 'F') return F_HARMONIC_MINOR_POSITIONS;
			if (scaleRoot === 'G') return G_HARMONIC_MINOR_POSITIONS;
			if (scaleRoot === 'A') return A_HARMONIC_MINOR_POSITIONS;
			if (scaleRoot === 'B') return B_HARMONIC_MINOR_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_HARMONIC_MINOR_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_HARMONIC_MINOR_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_HARMONIC_MINOR_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_HARMONIC_MINOR_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_HARMONIC_MINOR_POSITIONS;
			break;
		case 'melodic_minor':
			if (scaleRoot === 'C') return C_MELODIC_MINOR_POSITIONS;
			if (scaleRoot === 'D') return D_MELODIC_MINOR_POSITIONS;
			if (scaleRoot === 'E') return E_MELODIC_MINOR_POSITIONS;
			if (scaleRoot === 'F') return F_MELODIC_MINOR_POSITIONS;
			if (scaleRoot === 'G') return G_MELODIC_MINOR_POSITIONS;
			if (scaleRoot === 'A') return A_MELODIC_MINOR_POSITIONS;
			if (scaleRoot === 'B') return B_MELODIC_MINOR_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_MELODIC_MINOR_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_MELODIC_MINOR_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_MELODIC_MINOR_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_MELODIC_MINOR_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_MELODIC_MINOR_POSITIONS;
			break;
		case 'pentatonic_major':
			if (scaleRoot === 'C') return C_PENTATONIC_MAJOR_POSITIONS;
			if (scaleRoot === 'D') return D_PENTATONIC_MAJOR_POSITIONS;
			if (scaleRoot === 'E') return E_PENTATONIC_MAJOR_POSITIONS;
			if (scaleRoot === 'F') return F_PENTATONIC_MAJOR_POSITIONS;
			if (scaleRoot === 'G') return G_PENTATONIC_MAJOR_POSITIONS;
			if (scaleRoot === 'A') return A_PENTATONIC_MAJOR_POSITIONS;
			if (scaleRoot === 'B') return B_PENTATONIC_MAJOR_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_PENTATONIC_MAJOR_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_PENTATONIC_MAJOR_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_PENTATONIC_MAJOR_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_PENTATONIC_MAJOR_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_PENTATONIC_MAJOR_POSITIONS;
			break;
		case 'pentatonic_minor':
			if (scaleRoot === 'C') return C_PENTATONIC_MINOR_POSITIONS;
			if (scaleRoot === 'D') return D_PENTATONIC_MINOR_POSITIONS;
			if (scaleRoot === 'E') return E_PENTATONIC_MINOR_POSITIONS;
			if (scaleRoot === 'F') return F_PENTATONIC_MINOR_POSITIONS;
			if (scaleRoot === 'G') return G_PENTATONIC_MINOR_POSITIONS;
			if (scaleRoot === 'A') return A_PENTATONIC_MINOR_POSITIONS;
			if (scaleRoot === 'B') return B_PENTATONIC_MINOR_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_PENTATONIC_MINOR_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_PENTATONIC_MINOR_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_PENTATONIC_MINOR_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_PENTATONIC_MINOR_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_PENTATONIC_MINOR_POSITIONS;
			break;
		case 'blues':
			if (scaleRoot === 'C') return C_BLUES_POSITIONS;
			if (scaleRoot === 'D') return D_BLUES_POSITIONS;
			if (scaleRoot === 'E') return E_BLUES_POSITIONS;
			if (scaleRoot === 'F') return F_BLUES_POSITIONS;
			if (scaleRoot === 'G') return G_BLUES_POSITIONS;
			if (scaleRoot === 'A') return A_BLUES_POSITIONS;
			if (scaleRoot === 'B') return B_BLUES_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_BLUES_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_BLUES_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_BLUES_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_BLUES_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_BLUES_POSITIONS;
			break;
		case 'whole_tone':
			if (scaleRoot === 'C') return C_WHOLE_TONE_POSITIONS;
			if (scaleRoot === 'D') return D_WHOLE_TONE_POSITIONS;
			if (scaleRoot === 'E') return E_WHOLE_TONE_POSITIONS;
			if (scaleRoot === 'F') return F_WHOLE_TONE_POSITIONS;
			if (scaleRoot === 'G') return G_WHOLE_TONE_POSITIONS;
			if (scaleRoot === 'A') return A_WHOLE_TONE_POSITIONS;
			if (scaleRoot === 'B') return B_WHOLE_TONE_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_WHOLE_TONE_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_WHOLE_TONE_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_WHOLE_TONE_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_WHOLE_TONE_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_WHOLE_TONE_POSITIONS;
			break;
		case 'diminished':
			if (scaleRoot === 'C') return C_DIMINISHED_POSITIONS;
			if (scaleRoot === 'D') return D_DIMINISHED_POSITIONS;
			if (scaleRoot === 'E') return E_DIMINISHED_POSITIONS;
			if (scaleRoot === 'F') return F_DIMINISHED_POSITIONS;
			if (scaleRoot === 'G') return G_DIMINISHED_POSITIONS;
			if (scaleRoot === 'A') return A_DIMINISHED_POSITIONS;
			if (scaleRoot === 'B') return B_DIMINISHED_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_DIMINISHED_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_DIMINISHED_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_DIMINISHED_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_DIMINISHED_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_DIMINISHED_POSITIONS;
			break;
		case 'augmented':
			if (scaleRoot === 'C') return C_AUGMENTED_POSITIONS;
			if (scaleRoot === 'D') return D_AUGMENTED_POSITIONS;
			if (scaleRoot === 'E') return E_AUGMENTED_POSITIONS;
			if (scaleRoot === 'F') return F_AUGMENTED_POSITIONS;
			if (scaleRoot === 'G') return G_AUGMENTED_POSITIONS;
			if (scaleRoot === 'A') return A_AUGMENTED_POSITIONS;
			if (scaleRoot === 'B') return B_AUGMENTED_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_AUGMENTED_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_AUGMENTED_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_AUGMENTED_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_AUGMENTED_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_AUGMENTED_POSITIONS;
			break;
		case 'chromatic':
			if (scaleRoot === 'C') return C_CHROMATIC_POSITIONS;
			if (scaleRoot === 'D') return D_CHROMATIC_POSITIONS;
			if (scaleRoot === 'E') return E_CHROMATIC_POSITIONS;
			if (scaleRoot === 'F') return F_CHROMATIC_POSITIONS;
			if (scaleRoot === 'G') return G_CHROMATIC_POSITIONS;
			if (scaleRoot === 'A') return A_CHROMATIC_POSITIONS;
			if (scaleRoot === 'B') return B_CHROMATIC_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_CHROMATIC_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_CHROMATIC_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_CHROMATIC_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_CHROMATIC_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_CHROMATIC_POSITIONS;
			break;
		case 'ionian':
			if (scaleRoot === 'C') return C_IONIAN_POSITIONS;
			if (scaleRoot === 'D') return D_IONIAN_POSITIONS;
			if (scaleRoot === 'E') return E_IONIAN_POSITIONS;
			if (scaleRoot === 'F') return F_IONIAN_POSITIONS;
			if (scaleRoot === 'G') return G_IONIAN_POSITIONS;
			if (scaleRoot === 'A') return A_IONIAN_POSITIONS;
			if (scaleRoot === 'B') return B_IONIAN_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_IONIAN_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_IONIAN_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_IONIAN_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_IONIAN_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_IONIAN_POSITIONS;
			break;
		case 'dorian':
			if (scaleRoot === 'C') return C_DORIAN_POSITIONS;
			if (scaleRoot === 'D') return D_DORIAN_POSITIONS;
			if (scaleRoot === 'E') return E_DORIAN_POSITIONS;
			if (scaleRoot === 'F') return F_DORIAN_POSITIONS;
			if (scaleRoot === 'G') return G_DORIAN_POSITIONS;
			if (scaleRoot === 'A') return A_DORIAN_POSITIONS;
			if (scaleRoot === 'B') return B_DORIAN_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_DORIAN_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_DORIAN_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_DORIAN_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_DORIAN_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_DORIAN_POSITIONS;
			break;
		case 'phrygian':
			if (scaleRoot === 'C') return C_PHRYGIAN_POSITIONS;
			if (scaleRoot === 'D') return D_PHRYGIAN_POSITIONS;
			if (scaleRoot === 'E') return E_PHRYGIAN_POSITIONS;
			if (scaleRoot === 'F') return F_PHRYGIAN_POSITIONS;
			if (scaleRoot === 'G') return G_PHRYGIAN_POSITIONS;
			if (scaleRoot === 'A') return A_PHRYGIAN_POSITIONS;
			if (scaleRoot === 'B') return B_PHRYGIAN_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_PHRYGIAN_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_PHRYGIAN_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_PHRYGIAN_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_PHRYGIAN_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_PHRYGIAN_POSITIONS;
			break;
		case 'lydian':
			if (scaleRoot === 'C') return C_LYDIAN_POSITIONS;
			if (scaleRoot === 'D') return D_LYDIAN_POSITIONS;
			if (scaleRoot === 'E') return E_LYDIAN_POSITIONS;
			if (scaleRoot === 'F') return F_LYDIAN_POSITIONS;
			if (scaleRoot === 'G') return G_LYDIAN_POSITIONS;
			if (scaleRoot === 'A') return A_LYDIAN_POSITIONS;
			if (scaleRoot === 'B') return B_LYDIAN_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_LYDIAN_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_LYDIAN_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_LYDIAN_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_LYDIAN_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_LYDIAN_POSITIONS;
			break;
		case 'mixolydian':
			if (scaleRoot === 'C') return C_MIXOLYDIAN_POSITIONS;
			if (scaleRoot === 'D') return D_MIXOLYDIAN_POSITIONS;
			if (scaleRoot === 'E') return E_MIXOLYDIAN_POSITIONS;
			if (scaleRoot === 'F') return F_MIXOLYDIAN_POSITIONS;
			if (scaleRoot === 'G') return G_MIXOLYDIAN_POSITIONS;
			if (scaleRoot === 'A') return A_MIXOLYDIAN_POSITIONS;
			if (scaleRoot === 'B') return B_MIXOLYDIAN_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_MIXOLYDIAN_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_MIXOLYDIAN_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_MIXOLYDIAN_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_MIXOLYDIAN_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_MIXOLYDIAN_POSITIONS;
			break;
		case 'aeolian':
			if (scaleRoot === 'C') return C_AEOLIAN_POSITIONS;
			if (scaleRoot === 'D') return D_AEOLIAN_POSITIONS;
			if (scaleRoot === 'E') return E_AEOLIAN_POSITIONS;
			if (scaleRoot === 'F') return F_AEOLIAN_POSITIONS;
			if (scaleRoot === 'G') return G_AEOLIAN_POSITIONS;
			if (scaleRoot === 'A') return A_AEOLIAN_POSITIONS;
			if (scaleRoot === 'B') return B_AEOLIAN_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_AEOLIAN_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_AEOLIAN_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_AEOLIAN_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_AEOLIAN_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_AEOLIAN_POSITIONS;
			break;
		case 'locrian':
			if (scaleRoot === 'C') return C_LOCRIAN_POSITIONS;
			if (scaleRoot === 'D') return D_LOCRIAN_POSITIONS;
			if (scaleRoot === 'E') return E_LOCRIAN_POSITIONS;
			if (scaleRoot === 'F') return F_LOCRIAN_POSITIONS;
			if (scaleRoot === 'G') return G_LOCRIAN_POSITIONS;
			if (scaleRoot === 'A') return A_LOCRIAN_POSITIONS;
			if (scaleRoot === 'B') return B_LOCRIAN_POSITIONS;
			if (scaleRoot === 'C#' || scaleRoot === 'Db') return C_SHARP_LOCRIAN_POSITIONS;
			if (scaleRoot === 'D#' || scaleRoot === 'Eb') return D_SHARP_LOCRIAN_POSITIONS;
			if (scaleRoot === 'F#' || scaleRoot === 'Gb') return F_SHARP_LOCRIAN_POSITIONS;
			if (scaleRoot === 'G#' || scaleRoot === 'Ab') return G_SHARP_LOCRIAN_POSITIONS;
			if (scaleRoot === 'A#' || scaleRoot === 'Bb') return A_SHARP_LOCRIAN_POSITIONS;
			break;

		default:
			return [];
	}
};

const getScaleFormula = (keySignature: string, triads = true) => {
	const scaleType = getScaleType(keySignature);
	switch (scaleType) {
		case 'major':
			return triads
				? TRIADS_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES
				: TETRAD_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'minor':
			return triads
				? TRIADS_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES
				: TETRAD_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES;
		default:
			return [];
	}
};

const getScaleSemitones = (keySignature: string) => {
	const scaleType = getScaleType(keySignature);
	switch (scaleType) {
		case 'major':
			return MAJOR_SCALE_SEMITONES;
		case 'minor':
			return MINOR_SCALE_SEMITONES;
		default:
			return [];
	}
};

export const getChordType = (chordName: string, keySignature: string): ChordTypeData => {
	// Step 1: Get the tonic of the keySignature
	const scaleRoot = getScaleRoot(keySignature);

	// Step 2: Get the scale formula
	const scaleFormula = getScaleFormula(keySignature);

	// Step 3: Get the distance between the root and the chord root in semitones
	const distance = getDistanceBetweenNotes(scaleRoot, chordName, keySignature);

	return scaleFormula[distance];
};

export const getAvailableChords = (keySignature: string) => {
	const scaleFormula = getScaleFormula(keySignature);
	const scaleNotes = getScaleNotes(keySignature);
	const scaleSemitones = getScaleSemitones(keySignature);

	const availableChordTypes = scaleSemitones.map((semitone) => {
		const { type, romanNumber } = scaleFormula[semitone];
		return {
			nomenclature: type,
			romanNumber,
		};
	});

	return scaleNotes?.map((note, i) => Object.assign({}, availableChordTypes[i], { note }));
};
