// Base

// const majorScaleFormula = [2, 2, 1, 2, 2, 2, 1];

/*  Explanation:

C major scale: C D E F G A B C
C - D = 2 semitones
D - E = 2 semitones
E - F = 1 semitone
F - G = 2 semitones
G - A = 2 semitones
A - B = 2 semitones
B - C = 1 semitone

*/

// const minorScaleFormula = [2, 1, 2, 2, 1, 2, 2];

/*  Explanation:

C minor scale: C D Eb F G Ab Bb C
C - D = 2 semitones
D - Eb = 1 semitone
Eb - F = 2 semitones
F - G = 2 semitones
G - Ab = 1 semitone
Ab - Bb = 2 semitones
Bb - C = 2 semitones

*/

// Others
// const harmonicMinorScaleFormula = [2, 1, 2, 2, 1, 3, 1];
// const melodicMinorScaleFormula = [2, 1, 2, 2, 2, 2, 1];
// const pentatonicMajorScaleFormula = [2, 2, 3, 2, 3];
// const pentatonicMinorScaleFormula = [3, 2, 2, 3, 2];
// const bluesScaleFormula = [3, 2, 1, 1, 3, 2];
// const wholeToneScaleFormula = [2, 2, 2, 2, 2, 2];
// const diminishedScaleFormula = [2, 1, 2, 1, 2, 1, 2, 1];
// const augmentedScaleFormula = [3, 1, 3, 1, 3, 1];
// const chromaticScaleFormula = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// Modes
// const ionicScaleFormula = majorScaleFormula;
// const dorianScaleFormula = [2, 1, 2, 2, 2, 1, 2];
// const phrygianScaleFormula = [1, 2, 2, 2, 1, 2, 2];
// const lydianScaleFormula = [2, 2, 2, 1, 2, 2, 1];
// const mixolydianScaleFormula = [2, 2, 1, 2, 2, 1, 2];
// const aeolianScaleFormula = minorScaleFormula;
// const locrianScaleFormula = [1, 2, 2, 1, 2, 2, 2];

// Goal: Given the chord and the keysignature, return the type of the chord
// Example: If we are using the key of C major, and the chord is C, then the type is Cmajor or I
// Example: If we are using the key of C minor, and the chord is G, then the type is Gmenor or v

const getDistanceBetweenNotes = (root: string, targetNote: string, scaleType: string) => {
	let targetPosition, rootPosition;
	switch (scaleType) {
		case 'major':
			targetPosition = C_MAJOR_POSITIONS.indexOf(targetNote);
			rootPosition = C_MAJOR_POSITIONS.indexOf(root);
			return C_MAJOR_SEMITONES[targetPosition] - C_MAJOR_SEMITONES[rootPosition];
		case 'minor':
			targetPosition = C_MINOR_POSITIONS.indexOf(targetNote);
			rootPosition = C_MINOR_POSITIONS.indexOf(root);
			return C_MINOR_SEMITONES[targetPosition] - C_MINOR_SEMITONES[rootPosition];
		default:
			return 0;
	}
};

export const getChordType = (chordName: string, keySignature: string) => {
	// Step 1: Get the tonic of the keySignature
	const scaleRoot = keySignature.charAt(0);

	// sETP 2: Get the scale type
	const scaleType = keySignature.charAt(1) === 'm' ? 'minor' : 'major';
	const scaleFormula =
		scaleType === 'major'
			? TRIADS_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES
			: TRIADS_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES;

	// Step 3: Get the distance between the root and the chord root in semitones
	const distance = getDistanceBetweenNotes(scaleRoot, chordName, scaleType);
	console.log(`Distance between ${scaleRoot} and ${chordName} is ${distance} semitones`);

	// Step 3.2: Get the chord type
	const chordType = scaleFormula[distance];

	console.log(`Chord type is ${chordType}`);
};
