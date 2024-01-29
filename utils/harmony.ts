import {
	C_MAJOR_POSITIONS,
	C_MINOR_POSITIONS,
	C_HARMONIC_MINOR_POSITIONS,
	C_MELODIC_MINOR_POSITIONS,
	C_PENTATONIC_MAJOR_POSITIONS,
	C_PENTATONIC_MINOR_POSITIONS,
	C_MINOR_BLUES_POSITIONS,
	C_MAJOR_BLUES_POSITIONS,
	C_WHOLE_TONE_POSITIONS,
	C_DIMINISHED_POSITIONS,
	C_AUGMENTED_POSITIONS,
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
	C_SHARP_MINOR_BLUES_POSITIONS,
	C_SHARP_MAJOR_BLUES_POSITIONS,
	C_SHARP_WHOLE_TONE_POSITIONS,
	C_SHARP_DIMINISHED_POSITIONS,
	C_SHARP_AUGMENTED_POSITIONS,
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
	D_MINOR_BLUES_POSITIONS,
	D_MAJOR_BLUES_POSITIONS,
	D_WHOLE_TONE_POSITIONS,
	D_DIMINISHED_POSITIONS,
	D_AUGMENTED_POSITIONS,
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
	D_SHARP_MINOR_BLUES_POSITIONS,
	D_SHARP_MAJOR_BLUES_POSITIONS,
	D_SHARP_WHOLE_TONE_POSITIONS,
	D_SHARP_DIMINISHED_POSITIONS,
	D_SHARP_AUGMENTED_POSITIONS,
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
	E_MINOR_BLUES_POSITIONS,
	E_MAJOR_BLUES_POSITIONS,
	E_WHOLE_TONE_POSITIONS,
	E_DIMINISHED_POSITIONS,
	E_AUGMENTED_POSITIONS,
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
	F_MINOR_BLUES_POSITIONS,
	F_MAJOR_BLUES_POSITIONS,
	F_WHOLE_TONE_POSITIONS,
	F_DIMINISHED_POSITIONS,
	F_AUGMENTED_POSITIONS,
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
	F_SHARP_MINOR_BLUES_POSITIONS,
	F_SHARP_MAJOR_BLUES_POSITIONS,
	F_SHARP_WHOLE_TONE_POSITIONS,
	F_SHARP_DIMINISHED_POSITIONS,
	F_SHARP_AUGMENTED_POSITIONS,
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
	G_MINOR_BLUES_POSITIONS,
	G_MAJOR_BLUES_POSITIONS,
	G_WHOLE_TONE_POSITIONS,
	G_DIMINISHED_POSITIONS,
	G_AUGMENTED_POSITIONS,
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
	G_SHARP_MINOR_BLUES_POSITIONS,
	G_SHARP_MAJOR_BLUES_POSITIONS,
	G_SHARP_WHOLE_TONE_POSITIONS,
	G_SHARP_DIMINISHED_POSITIONS,
	G_SHARP_AUGMENTED_POSITIONS,
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
	A_MINOR_BLUES_POSITIONS,
	A_MAJOR_BLUES_POSITIONS,
	A_WHOLE_TONE_POSITIONS,
	A_DIMINISHED_POSITIONS,
	A_AUGMENTED_POSITIONS,
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
	A_SHARP_MINOR_BLUES_POSITIONS,
	A_SHARP_MAJOR_BLUES_POSITIONS,
	A_SHARP_WHOLE_TONE_POSITIONS,
	A_SHARP_DIMINISHED_POSITIONS,
	A_SHARP_AUGMENTED_POSITIONS,
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
	B_MINOR_BLUES_POSITIONS,
	B_MAJOR_BLUES_POSITIONS,
	B_WHOLE_TONE_POSITIONS,
	B_DIMINISHED_POSITIONS,
	B_AUGMENTED_POSITIONS,
	B_IONIAN_POSITIONS,
	B_DORIAN_POSITIONS,
	B_PHRYGIAN_POSITIONS,
	B_LYDIAN_POSITIONS,
	B_MIXOLYDIAN_POSITIONS,
	B_AEOLIAN_POSITIONS,
	B_LOCRIAN_POSITIONS,
	MAJOR_SCALE_SEMITONES,
	MINOR_SCALE_SEMITONES,
	HARMONIC_MINOR_SCALE_SEMITONES,
	MELODIC_MINOR_SCALE_SEMITONES,
	PENTATONIC_MAJOR_SCALE_SEMITONES,
	PENTATONIC_MINOR_SCALE_SEMITONES,
	BLUES_MAJOR_SCALE_SEMITONES,
	BLUES_MINOR_SCALE_SEMITONES,
	WHOLE_TONE_SCALE_SEMITONES,
	DIMINISHED_SCALE_SEMITONES,
	AUGMENTED_SCALE_SEMITONES,
	IONIAN_SCALE_SEMITONES,
	DORIAN_SCALE_SEMITONES,
	PHRYGIAN_SCALE_SEMITONES,
	LYDIAN_SCALE_SEMITONES,
	MIXOLYDIAN_SCALE_SEMITONES,
	AEOLIAN_SCALE_SEMITONES,
	LOCRIAN_SCALE_SEMITONES,
	MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES,
	MINOR_SCALE_NOMENCLATURES_BY_SEMITONES,
	HARMONIC_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES,
	MELODIC_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES,
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
} from '@/constants';

import { Note, ScaleType } from '~/components/App/MusicStaff/MusicStaff.interfaces';

const getScaleNotes = ({ rootNote, scaleType }: { rootNote: Note; scaleType: ScaleType }) => {
	switch (scaleType) {
		case 'major':
			if (rootNote === 'C') return C_MAJOR_POSITIONS;
			if (rootNote === 'D') return D_MAJOR_POSITIONS;
			if (rootNote === 'E') return E_MAJOR_POSITIONS;
			if (rootNote === 'F') return F_MAJOR_POSITIONS;
			if (rootNote === 'G') return G_MAJOR_POSITIONS;
			if (rootNote === 'A') return A_MAJOR_POSITIONS;
			if (rootNote === 'B') return B_MAJOR_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_MAJOR_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_MAJOR_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_MAJOR_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_MAJOR_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_MAJOR_POSITIONS;
			break;
		case 'minor':
			if (rootNote === 'C') return C_MINOR_POSITIONS;
			if (rootNote === 'D') return D_MINOR_POSITIONS;
			if (rootNote === 'E') return E_MINOR_POSITIONS;
			if (rootNote === 'F') return F_MINOR_POSITIONS;
			if (rootNote === 'G') return G_MINOR_POSITIONS;
			if (rootNote === 'A') return A_MINOR_POSITIONS;
			if (rootNote === 'B') return B_MINOR_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_MINOR_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_MINOR_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_MINOR_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_MINOR_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_MINOR_POSITIONS;
			break;
		case 'harmonic_minor':
			if (rootNote === 'C') return C_HARMONIC_MINOR_POSITIONS;
			if (rootNote === 'D') return D_HARMONIC_MINOR_POSITIONS;
			if (rootNote === 'E') return E_HARMONIC_MINOR_POSITIONS;
			if (rootNote === 'F') return F_HARMONIC_MINOR_POSITIONS;
			if (rootNote === 'G') return G_HARMONIC_MINOR_POSITIONS;
			if (rootNote === 'A') return A_HARMONIC_MINOR_POSITIONS;
			if (rootNote === 'B') return B_HARMONIC_MINOR_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_HARMONIC_MINOR_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_HARMONIC_MINOR_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_HARMONIC_MINOR_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_HARMONIC_MINOR_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_HARMONIC_MINOR_POSITIONS;
			break;
		case 'melodic_minor':
			if (rootNote === 'C') return C_MELODIC_MINOR_POSITIONS;
			if (rootNote === 'D') return D_MELODIC_MINOR_POSITIONS;
			if (rootNote === 'E') return E_MELODIC_MINOR_POSITIONS;
			if (rootNote === 'F') return F_MELODIC_MINOR_POSITIONS;
			if (rootNote === 'G') return G_MELODIC_MINOR_POSITIONS;
			if (rootNote === 'A') return A_MELODIC_MINOR_POSITIONS;
			if (rootNote === 'B') return B_MELODIC_MINOR_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_MELODIC_MINOR_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_MELODIC_MINOR_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_MELODIC_MINOR_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_MELODIC_MINOR_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_MELODIC_MINOR_POSITIONS;
			break;
		case 'pentatonic_major':
			if (rootNote === 'C') return C_PENTATONIC_MAJOR_POSITIONS;
			if (rootNote === 'D') return D_PENTATONIC_MAJOR_POSITIONS;
			if (rootNote === 'E') return E_PENTATONIC_MAJOR_POSITIONS;
			if (rootNote === 'F') return F_PENTATONIC_MAJOR_POSITIONS;
			if (rootNote === 'G') return G_PENTATONIC_MAJOR_POSITIONS;
			if (rootNote === 'A') return A_PENTATONIC_MAJOR_POSITIONS;
			if (rootNote === 'B') return B_PENTATONIC_MAJOR_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_PENTATONIC_MAJOR_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_PENTATONIC_MAJOR_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_PENTATONIC_MAJOR_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_PENTATONIC_MAJOR_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_PENTATONIC_MAJOR_POSITIONS;
			break;
		case 'pentatonic_minor':
			if (rootNote === 'C') return C_PENTATONIC_MINOR_POSITIONS;
			if (rootNote === 'D') return D_PENTATONIC_MINOR_POSITIONS;
			if (rootNote === 'E') return E_PENTATONIC_MINOR_POSITIONS;
			if (rootNote === 'F') return F_PENTATONIC_MINOR_POSITIONS;
			if (rootNote === 'G') return G_PENTATONIC_MINOR_POSITIONS;
			if (rootNote === 'A') return A_PENTATONIC_MINOR_POSITIONS;
			if (rootNote === 'B') return B_PENTATONIC_MINOR_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_PENTATONIC_MINOR_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_PENTATONIC_MINOR_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_PENTATONIC_MINOR_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_PENTATONIC_MINOR_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_PENTATONIC_MINOR_POSITIONS;
			break;
		case 'blues_major':
			if (rootNote === 'C') return C_MAJOR_BLUES_POSITIONS;
			if (rootNote === 'D') return D_MAJOR_BLUES_POSITIONS;
			if (rootNote === 'E') return E_MAJOR_BLUES_POSITIONS;
			if (rootNote === 'F') return F_MAJOR_BLUES_POSITIONS;
			if (rootNote === 'G') return G_MAJOR_BLUES_POSITIONS;
			if (rootNote === 'A') return A_MAJOR_BLUES_POSITIONS;
			if (rootNote === 'B') return B_MAJOR_BLUES_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_MAJOR_BLUES_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_MAJOR_BLUES_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_MAJOR_BLUES_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_MAJOR_BLUES_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_MAJOR_BLUES_POSITIONS;
			break;
		case 'blues_minor':
			if (rootNote === 'C') return C_MINOR_BLUES_POSITIONS;
			if (rootNote === 'D') return D_MINOR_BLUES_POSITIONS;
			if (rootNote === 'E') return E_MINOR_BLUES_POSITIONS;
			if (rootNote === 'F') return F_MINOR_BLUES_POSITIONS;
			if (rootNote === 'G') return G_MINOR_BLUES_POSITIONS;
			if (rootNote === 'A') return A_MINOR_BLUES_POSITIONS;
			if (rootNote === 'B') return B_MINOR_BLUES_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_MINOR_BLUES_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_MINOR_BLUES_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_MINOR_BLUES_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_MINOR_BLUES_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_MINOR_BLUES_POSITIONS;
			break;
		case 'whole_tone':
			if (rootNote === 'C') return C_WHOLE_TONE_POSITIONS;
			if (rootNote === 'D') return D_WHOLE_TONE_POSITIONS;
			if (rootNote === 'E') return E_WHOLE_TONE_POSITIONS;
			if (rootNote === 'F') return F_WHOLE_TONE_POSITIONS;
			if (rootNote === 'G') return G_WHOLE_TONE_POSITIONS;
			if (rootNote === 'A') return A_WHOLE_TONE_POSITIONS;
			if (rootNote === 'B') return B_WHOLE_TONE_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_WHOLE_TONE_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_WHOLE_TONE_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_WHOLE_TONE_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_WHOLE_TONE_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_WHOLE_TONE_POSITIONS;
			break;
		case 'diminished':
			if (rootNote === 'C') return C_DIMINISHED_POSITIONS;
			if (rootNote === 'D') return D_DIMINISHED_POSITIONS;
			if (rootNote === 'E') return E_DIMINISHED_POSITIONS;
			if (rootNote === 'F') return F_DIMINISHED_POSITIONS;
			if (rootNote === 'G') return G_DIMINISHED_POSITIONS;
			if (rootNote === 'A') return A_DIMINISHED_POSITIONS;
			if (rootNote === 'B') return B_DIMINISHED_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_DIMINISHED_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_DIMINISHED_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_DIMINISHED_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_DIMINISHED_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_DIMINISHED_POSITIONS;
			break;
		case 'augmented':
			if (rootNote === 'C') return C_AUGMENTED_POSITIONS;
			if (rootNote === 'D') return D_AUGMENTED_POSITIONS;
			if (rootNote === 'E') return E_AUGMENTED_POSITIONS;
			if (rootNote === 'F') return F_AUGMENTED_POSITIONS;
			if (rootNote === 'G') return G_AUGMENTED_POSITIONS;
			if (rootNote === 'A') return A_AUGMENTED_POSITIONS;
			if (rootNote === 'B') return B_AUGMENTED_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_AUGMENTED_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_AUGMENTED_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_AUGMENTED_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_AUGMENTED_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_AUGMENTED_POSITIONS;
			break;
		case 'ionian':
			if (rootNote === 'C') return C_IONIAN_POSITIONS;
			if (rootNote === 'D') return D_IONIAN_POSITIONS;
			if (rootNote === 'E') return E_IONIAN_POSITIONS;
			if (rootNote === 'F') return F_IONIAN_POSITIONS;
			if (rootNote === 'G') return G_IONIAN_POSITIONS;
			if (rootNote === 'A') return A_IONIAN_POSITIONS;
			if (rootNote === 'B') return B_IONIAN_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_IONIAN_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_IONIAN_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_IONIAN_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_IONIAN_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_IONIAN_POSITIONS;
			break;
		case 'dorian':
			if (rootNote === 'C') return C_DORIAN_POSITIONS;
			if (rootNote === 'D') return D_DORIAN_POSITIONS;
			if (rootNote === 'E') return E_DORIAN_POSITIONS;
			if (rootNote === 'F') return F_DORIAN_POSITIONS;
			if (rootNote === 'G') return G_DORIAN_POSITIONS;
			if (rootNote === 'A') return A_DORIAN_POSITIONS;
			if (rootNote === 'B') return B_DORIAN_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_DORIAN_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_DORIAN_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_DORIAN_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_DORIAN_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_DORIAN_POSITIONS;
			break;
		case 'phrygian':
			if (rootNote === 'C') return C_PHRYGIAN_POSITIONS;
			if (rootNote === 'D') return D_PHRYGIAN_POSITIONS;
			if (rootNote === 'E') return E_PHRYGIAN_POSITIONS;
			if (rootNote === 'F') return F_PHRYGIAN_POSITIONS;
			if (rootNote === 'G') return G_PHRYGIAN_POSITIONS;
			if (rootNote === 'A') return A_PHRYGIAN_POSITIONS;
			if (rootNote === 'B') return B_PHRYGIAN_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_PHRYGIAN_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_PHRYGIAN_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_PHRYGIAN_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_PHRYGIAN_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_PHRYGIAN_POSITIONS;
			break;
		case 'lydian':
			if (rootNote === 'C') return C_LYDIAN_POSITIONS;
			if (rootNote === 'D') return D_LYDIAN_POSITIONS;
			if (rootNote === 'E') return E_LYDIAN_POSITIONS;
			if (rootNote === 'F') return F_LYDIAN_POSITIONS;
			if (rootNote === 'G') return G_LYDIAN_POSITIONS;
			if (rootNote === 'A') return A_LYDIAN_POSITIONS;
			if (rootNote === 'B') return B_LYDIAN_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_LYDIAN_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_LYDIAN_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_LYDIAN_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_LYDIAN_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_LYDIAN_POSITIONS;
			break;
		case 'mixolydian':
			if (rootNote === 'C') return C_MIXOLYDIAN_POSITIONS;
			if (rootNote === 'D') return D_MIXOLYDIAN_POSITIONS;
			if (rootNote === 'E') return E_MIXOLYDIAN_POSITIONS;
			if (rootNote === 'F') return F_MIXOLYDIAN_POSITIONS;
			if (rootNote === 'G') return G_MIXOLYDIAN_POSITIONS;
			if (rootNote === 'A') return A_MIXOLYDIAN_POSITIONS;
			if (rootNote === 'B') return B_MIXOLYDIAN_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_MIXOLYDIAN_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_MIXOLYDIAN_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_MIXOLYDIAN_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_MIXOLYDIAN_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_MIXOLYDIAN_POSITIONS;
			break;
		case 'aeolian':
			if (rootNote === 'C') return C_AEOLIAN_POSITIONS;
			if (rootNote === 'D') return D_AEOLIAN_POSITIONS;
			if (rootNote === 'E') return E_AEOLIAN_POSITIONS;
			if (rootNote === 'F') return F_AEOLIAN_POSITIONS;
			if (rootNote === 'G') return G_AEOLIAN_POSITIONS;
			if (rootNote === 'A') return A_AEOLIAN_POSITIONS;
			if (rootNote === 'B') return B_AEOLIAN_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_AEOLIAN_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_AEOLIAN_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_AEOLIAN_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_AEOLIAN_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_AEOLIAN_POSITIONS;
			break;
		case 'locrian':
			if (rootNote === 'C') return C_LOCRIAN_POSITIONS;
			if (rootNote === 'D') return D_LOCRIAN_POSITIONS;
			if (rootNote === 'E') return E_LOCRIAN_POSITIONS;
			if (rootNote === 'F') return F_LOCRIAN_POSITIONS;
			if (rootNote === 'G') return G_LOCRIAN_POSITIONS;
			if (rootNote === 'A') return A_LOCRIAN_POSITIONS;
			if (rootNote === 'B') return B_LOCRIAN_POSITIONS;
			if (rootNote === 'C#' || rootNote === 'Db') return C_SHARP_LOCRIAN_POSITIONS;
			if (rootNote === 'D#' || rootNote === 'Eb') return D_SHARP_LOCRIAN_POSITIONS;
			if (rootNote === 'F#' || rootNote === 'Gb') return F_SHARP_LOCRIAN_POSITIONS;
			if (rootNote === 'G#' || rootNote === 'Ab') return G_SHARP_LOCRIAN_POSITIONS;
			if (rootNote === 'A#' || rootNote === 'Bb') return A_SHARP_LOCRIAN_POSITIONS;
			break;

		default:
			return [];
	}
};

const getScaleFormula = (scaleType: ScaleType) => {
	switch (scaleType) {
		case 'major':
			return MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'minor':
			return MINOR_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'harmonic_minor':
			return HARMONIC_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'melodic_minor':
			return MELODIC_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'pentatonic_major':
			return PENTATONIC_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'pentatonic_minor':
			return PENTATONIC_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'blues_major':
			return BLUES_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'blues_minor':
			return BLUES_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'whole_tone':
			return WHOLE_TONE_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'diminished':
			return DIMINISHED_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'augmented':
			return AUGMENTED_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'ionian':
			return IONIAN_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'dorian':
			return DORIAN_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'phrygian':
			return PHRYGIAN_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'lydian':
			return LYDIAN_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'mixolydian':
			return MIXOLYDIAN_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'aeolian':
			return AEOLIAN_SCALE_NOMENCLATURES_BY_SEMITONES;
		case 'locrian':
			return LOCRIAN_SCALE_NOMENCLATURES_BY_SEMITONES;
		default:
			return [];
	}
};

const getScaleSemitones = (scaleType: ScaleType) => {
	switch (scaleType) {
		case 'major':
			return MAJOR_SCALE_SEMITONES;
		case 'minor':
			return MINOR_SCALE_SEMITONES;
		case 'harmonic_minor':
			return HARMONIC_MINOR_SCALE_SEMITONES;
		case 'melodic_minor':
			return MELODIC_MINOR_SCALE_SEMITONES;
		case 'pentatonic_major':
			return PENTATONIC_MAJOR_SCALE_SEMITONES;
		case 'pentatonic_minor':
			return PENTATONIC_MINOR_SCALE_SEMITONES;
		case 'blues_major':
			return BLUES_MAJOR_SCALE_SEMITONES;
		case 'blues_minor':
			return BLUES_MINOR_SCALE_SEMITONES;
		case 'whole_tone':
			return WHOLE_TONE_SCALE_SEMITONES;
		case 'diminished':
			return DIMINISHED_SCALE_SEMITONES;
		case 'augmented':
			return AUGMENTED_SCALE_SEMITONES;
		case 'ionian':
			return IONIAN_SCALE_SEMITONES;
		case 'dorian':
			return DORIAN_SCALE_SEMITONES;
		case 'phrygian':
			return PHRYGIAN_SCALE_SEMITONES;
		case 'lydian':
			return LYDIAN_SCALE_SEMITONES;
		case 'mixolydian':
			return MIXOLYDIAN_SCALE_SEMITONES;
		case 'aeolian':
			return AEOLIAN_SCALE_SEMITONES;
		case 'locrian':
			return LOCRIAN_SCALE_SEMITONES;
		default:
			return [];
	}
};

export const getAvailableChords = ({ rootNote, scaleType }) => {
	const scaleFormula = getScaleFormula(scaleType);
	const scaleNotes = getScaleNotes({ rootNote, scaleType });
	const scaleSemitones = getScaleSemitones(scaleType);

	console.log('scaleFormula', scaleFormula);
	console.log('scaleNotes', scaleNotes);
	console.log('scaleSemitones', scaleSemitones);

	const availableChordTypes = scaleSemitones.map((semitone) => {
		const { type, romanNumber } = scaleFormula[semitone];
		return {
			nomenclature: type,
			romanNumber,
		};
	});

	return scaleNotes?.map((note, i) => Object.assign({}, availableChordTypes[i], { note }));
};
