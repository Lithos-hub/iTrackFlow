import { ReferencesList } from './spotify.interfaces';
import { getSpotifyByQuery } from '@/services/spotify.service';
import { AlbumsItem, ArtistsItem, SpotifyGetByQueryResponse, TracksItem } from '@/interfaces';
import { ReferenceType } from '@/constants';

export const useSpotifyStore = defineStore('spotify', () => {
	const searchQuery = ref('');
	const isSearching = ref(false);
	const offset = ref(0);
	const selectedTab = ref('albums');
	const referencesList = ref<ReferencesList>({
		albums: [],
		artists: [],
		tracks: [],
	});
	const spotifyResults = ref<SpotifyGetByQueryResponse>({} as SpotifyGetByQueryResponse);

	const spotifyResponseOptions = computed(() =>
		Object.keys(spotifyResults.value).map((key) => ({ label: key, value: key })),
	);

	const getResultsByQuery = async () => {
		isSearching.value = true;
		try {
			const response = await getSpotifyByQuery(searchQuery.value, offset.value);

			if (offset.value === 0) {
				spotifyResults.value = response;
			} else {
				spotifyResults.value = {
					...spotifyResults.value,
					[selectedTab.value]: {
						...spotifyResults.value[selectedTab.value],
						items: [
							...spotifyResults.value[selectedTab.value].items,
							...response[selectedTab.value].items,
						],
					},
				};
			}
		} catch (error) {
			console.log('SPOTIFY_GET_BY_QUERY_ERROR', error);
		} finally {
			isSearching.value = false;
		}
	};

	const onSelectTab = (value: string) => {
		selectedTab.value = value;
	};

	const addItem = (type: ReferenceType, item: AlbumsItem | ArtistsItem | TracksItem) => {
		console.log('Adding item', type, item);
		// Dummy way until backend is ready
		referencesList.value[type] = [...referencesList.value[type], item];
	};

	watch(searchQuery, (newVal, oldVal) => {
		if (newVal !== oldVal) {
			offset.value = 0;
		}
	});

	return {
		referencesList,
		spotifyResults,
		spotifyResponseOptions,
		searchQuery,
		isSearching,
		selectedTab,
		offset,
		getResultsByQuery,
		onSelectTab,
		addItem,
	};
});
