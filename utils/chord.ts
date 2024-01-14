import {
	C_MAJOR_POSITIONS,
	MAJOR_SCALE_SEMITONES,
	C_MINOR_POSITIONS,
	MINOR_SCALE_SEMITONES,
	TRIADS_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES,
	TRIADS_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES,
} from '@/constants/harmonyFormulas';

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

export const getChordType = (chordName: string, keySignature: string) => {
	// Step 1: Get the tonic of the keySignature
	const scaleRoot = keySignature.charAt(0);

	// sETP 2: Get the scale type
	// TODO: Add support for other scales
	const scaleType = keySignature.charAt(1) === 'm' ? 'minor' : 'major';

	console.log(`SCALE: ${scaleRoot}${scaleType}`);

	const scaleFormula =
		scaleType === 'major'
			? TRIADS_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES
			: TRIADS_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES;

	// Step 3: Get the distance between the root and the chord root in semitones
	const distance = getDistanceBetweenNotes(scaleRoot, chordName, scaleType);
	console.log(`Distance between ${scaleRoot} and ${chordName} is ${distance} semitones`);

	// Step 3.2: Get the chord type
	const chordType = scaleFormula[distance];
	console.log(`Chord formula is ${Object.values(chordType.formula).join(' - ')}`);
};
