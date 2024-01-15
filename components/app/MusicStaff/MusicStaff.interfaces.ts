type ChordRoot =
	| 'C'
	| 'D'
	| 'E'
	| 'F'
	| 'G'
	| 'A'
	| 'B'
	| 'Cb'
	| 'Db'
	| 'Eb'
	| 'Fb'
	| 'Gb'
	| 'Ab'
	| 'Bb'
	| 'C#'
	| 'D#'
	| 'E#'
	| 'F#'
	| 'G#'
	| 'A#'
	| 'B#';

type ChordFigure =
	| 'I'
	| 'II'
	| 'III'
	| 'IV'
	| 'V'
	| 'VI'
	| 'VII'
	| 'i'
	| 'ii'
	| 'iii'
	| 'iv'
	| 'v'
	| 'vi'
	| 'vii';

type ChordType =
	| ''
	| 'm'
	| 'dim'
	| 'aug'
	| '7'
	| 'm7'
	| 'dim7'
	| 'm7b5'
	| 'aug7'
	| 'aug7'
	| 'sus2'
	| 'sus4'
	| 'power'
	| '7'
	| '7b5'
	| '7#5'
	| '7b9'
	| '7#9'
	| '7b5b9'
	| '7#5#9'
	| '6'
	| 'm6'
	| '9'
	| '9b5'
	| '9#5'
	| '9b5b9'
	| '9#5#9'
	| '9'
	| 'm9'
	| '11'
	| '11b5'
	| '13'
	| '13b5'
	| '13'
	| 'm13';

export type ScaleType =
	| 'major'
	| 'minor'
	| 'harmonic_minor'
	| 'melodic_minor'
	| 'pentatonic_major'
	| 'pentatonic_minor'
	| 'blues_major'
	| 'blues_minor'
	| 'chromatic'
	| 'ionian'
	| 'dorian'
	| 'phrygian'
	| 'lydian'
	| 'mixolydian'
	| 'aeolian'
	| 'locrian';

type ChordName = `${ChordRoot}${ChordType}`;

export type KeySignature =
	| 'C'
	| 'C#'
	| 'Db'
	| 'D'
	| 'D#'
	| 'Eb'
	| 'E'
	| 'F'
	| 'F#'
	| 'Gb'
	| 'G'
	| 'G#';

export interface MusicChord {
	id: number;
	chord: ChordName;
	romanNumber: ChordFigure;
}

export interface HarmonyData {
	id: number;
	tempo: number;
	timeSignature: string;
	keySignature: string;
	chords: MusicChord[];
}

export interface MusicStaffProps extends MusicChord {
	keySignature: string;
	index: number;
	isActive: boolean;
}

export interface ChordTypeData {
	type: string;
	formula: Record<number, string>;
	romanNumber: ChordFigure;
}
