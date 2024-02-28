import { ReferenceTypes } from '@/constants';
import { AlbumsItem, ArtistsItem, TracksItem } from '@/interfaces';

export interface ReferencesList {
	[ReferenceTypes.albums]: AlbumsItem[];
	[ReferenceTypes.artists]: ArtistsItem[];
	[ReferenceTypes.tracks]: TracksItem[];
}
