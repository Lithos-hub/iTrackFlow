export const C_MAJOR_POSITIONS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const C_MINOR_POSITIONS = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'];
export const C_MAJOR_SEMITONES = [0, 2, 4, 5, 7, 9, 11];
export const C_MINOR_SEMITONES = [0, 2, 3, 5, 7, 8, 10];

export const TRIADS_MAJOR_SCALE_NOMENCLATURES_BY_SEMITONES = {
	0: {
		type: 'major',
		formula: {
			3: '3',
			5: '5',
		},
		roman_numeral: 'I',
	},
	2: {
		type: 'minor',
		formula: {
			3: 'b3',
			5: '5',
		},
		roman_numeral: 'ii',
	},
	4: {
		type: 'minor',
		formula: {
			3: 'b3',
			5: '5',
		},
		roman_numeral: 'iii',
	},
	5: {
		type: 'major',
		formula: {
			3: '3',
			5: '5',
		},
		roman_numeral: 'IV',
	},
	7: {
		type: 'major',
		formula: {
			3: '3',
			5: '5',
		},
		roman_numeral: 'V',
	},
	9: {
		type: 'minor',
		formula: {
			3: 'b3',
			5: '5',
		},
		roman_numeral: 'vi',
	},
	11: {
		type: 'dim',
		formula: {
			3: 'b3',
			5: 'b5',
		},
		roman_numeral: 'vii',
	},
};

export const TRIADS_MINOR_SCALE_NOMENCLATURES_BY_SEMITONES = {
	0: {
		type: 'minor',
		formula: {
			3: 'b3',
			5: '5',
		},
		roman_numeral: 'i',
	},
	2: {
		type: 'dim',
		formula: {
			3: 'b3',
			5: 'b5',
		},
		roman_numeral: 'ii',
	},
	3: {
		type: 'major',
		formula: {
			3: '3',
			5: '5',
		},
		roman_numeral: 'III',
	},
	5: {
		type: 'minor',
		formula: {
			3: 'b3',
			5: '5',
		},
		roman_numeral: 'iv',
	},
	7: {
		type: 'minor',
		formula: {
			3: 'b3',
			5: '5',
		},
		roman_numeral: 'v',
	},
	8: {
		type: 'major',
		formula: {
			3: '3',
			5: '5',
		},
		roman_numeral: 'VI',
	},
	10: {
		type: 'major',
		formula: {
			3: '3',
			5: '5',
		},
		roman_numeral: 'VII',
	},
};
