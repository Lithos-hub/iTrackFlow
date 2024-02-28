export enum ReferenceTypes {
	albums = 'albums',
	artists = 'artists',
	tracks = 'tracks',
}

export type ReferenceType = keyof typeof ReferenceTypes;
