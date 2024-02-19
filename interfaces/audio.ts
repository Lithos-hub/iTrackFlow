export interface AudioData {
	id: number;
	trackName: string;
	description: string;
	audioPath: string;
}

export interface MetadataTag {
	v1: {
		title: string;
		artist: string;
		album: string;
		year: string;
		track: string;
		comment: string;
		genre: string;
	};
	v1Details: {
		version: number;
		size: number;
	};
	v2: {
		TIT2: string;
		TPE1: string;
		TALB: string;
		TCOM: string;
		TOPE: string;
		TENC: string;
		TYER: string;
		TCON: string;
		COMM: {
			language: string;
			descriptor: string;
			text: string;
		}[];
		APIC: {
			format: string;
			type: number;
			description: string;
			data: {
				_isArray: boolean;
				length: number;
				items: number[];
			};
		}[];
	};
	v2Details: {
		version: number[];
		size: number;
		flags: {
			unsynchronisation: boolean;
			extendedHeader: boolean;
			experimentalIndicator: boolean;
		};
	};
}
