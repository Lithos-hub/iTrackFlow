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

type ChordExtended =
	| '2'
	| '4'
	| '6'
	| '7'
	| '9'
	| '11'
	| '13'
	| 'sus2'
	| 'sus4'
	| 'b5'
	| '#5'
	| 'b9'
	| '#9'
	| 'b13'
	| '#13'
	| 'M7'
	| 'm7'
	| 'mM7'
	| 'dim7'
	| 'm7b5'
	| 'aug7'
	| 'augM7'
	| 'add9'
	| 'add11';

type ChordType =
	| 'major'
	| 'minor'
	| 'diminished'
	| 'augmented'
	| 'dominant'
	| 'major7'
	| 'minor7'
	| 'diminished7'
	| 'halfDiminished7'
	| 'augmented7'
	| 'augmentedMajor7'
	| 'suspended2'
	| 'suspended4'
	| 'power'
	| 'dominant7'
	| 'dominant7Flat5'
	| 'dominant7Sharp5'
	| 'dominant7Flat9'
	| 'dominant7Sharp9'
	| 'dominant7Flat5Flat9'
	| 'dominant7Sharp5Sharp9'
	| 'major6'
	| 'minor6'
	| 'dominant9'
	| 'dominant9Flat5'
	| 'dominant9Sharp5'
	| 'dominant9Flat5Flat9'
	| 'dominant9Sharp5Sharp9'
	| 'major9'
	| 'minor9'
	| 'dominant11'
	| 'dominant11Flat5'
	| 'dominant13'
	| 'dominant13Flat5'
	| 'major13'
	| 'minor13';

type ChordName = `${ChordFigure}${ChordExtended | ''}` | `${ChordFigure}${ChordType | ''}`;

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
	chordName: ChordRoot;
	chordType: ChordType;
	chordFigure: ChordName;
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
}
