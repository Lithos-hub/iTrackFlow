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
	| 'locrian'
	| 'whole_tone'
	| 'diminished'
	| 'augmented';

type ChordName = `${ChordRoot}${ChordType}`;

export type Note =
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
	| 'G#'
	| 'Ab'
	| 'A'
	| 'A#'
	| 'Bb'
	| 'B'
	| 'Cb'
	| 'B#';

export type TimeSignature =
	| '2/2'
	| '2/4'
	| '2/8'
	| '2/16'
	| '2/32'
	| '2/64'
	| '3/2'
	| '3/4'
	| '3/8'
	| '3/16'
	| '3/32'
	| '3/64'
	| '4/2'
	| '4/4'
	| '4/8'
	| '4/16'
	| '4/32'
	| '4/64'
	| '5/2'
	| '5/4'
	| '5/8'
	| '5/16'
	| '5/32'
	| '5/64'
	| '6/2'
	| '6/4'
	| '6/8'
	| '6/16'
	| '6/32'
	| '6/64'
	| '7/2'
	| '7/4'
	| '7/8'
	| '7/16'
	| '7/32'
	| '7/64'
	| '8/2'
	| '8/4'
	| '8/8'
	| '8/16'
	| '8/32'
	| '8/64'
	| '9/2'
	| '9/4'
	| '9/8'
	| '9/16'
	| '9/32'
	| '9/64'
	| '12/2'
	| '12/4'
	| '12/8'
	| '12/16'
	| '12/32'
	| '12/64'
	| '16/2'
	| '16/4'
	| '16/8'
	| '16/16'
	| '16/32'
	| '16/64';

export interface MusicChord {
	id: number;
	chord: ChordName;
	romanNumber: ChordFigure;
	splits: number;
}

export interface HarmonyData {
	id: number;
	tempo: number;
	title: string;
	rootNote: Note;
	timeSignature: TimeSignature;
	scaleType: ScaleType;
	chords: MusicChord[];
}

export interface MusicStaffProps extends MusicChord {
	keySignature: string;
	index: number;
	selectedBar: string;
}

export interface ChordTypeData {
	type: string;
	formula: Record<number, string>;
	romanNumber: ChordFigure;
}
