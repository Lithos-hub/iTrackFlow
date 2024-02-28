<template>
	<section class="flex flex-col gap-5 grow h-[calc(100%-40px)]">
		<div class="flex gap-5">
			<section class="flex flex-col gap-5 w-full">
				<section class="default_border default_mode p-5">
					<BaseInput
						v-model="searchQuery"
						variant="bordered"
						color="white"
						:label="$t('app.audio.pool.references.search_in_references')"
						:placeholder="$t('app.audio.pool.references.search_in_references_placeholder')"
						debounced
						@input="onSearchSpotifySongs" />
				</section>
			</section>
			<section class="flex flex-col gap-5 w-full">
				<section class="default_border default_mode p-5">
					<BaseInput
						v-model="searchQuery"
						variant="bordered"
						color="white"
						:label="$t('app.audio.pool.references.search_in_spotify')"
						:placeholder="$t('app.audio.pool.references.search_in_spotify_placeholder')"
						debounced
						@input="onSearchSpotifySongs" />
				</section>
			</section>
		</div>
		<div class="flex gap-5 w-full">
			<section class="default_border default_mode h-auto overflow-y-auto w-1/2">
				<div class="p-5 flex flex-col gap-5">
					<strong>
						{{ $t('app.audio.pool.references.my_references') }}
					</strong>
					<div class="flex flex-wrap gap-5 text-white">
						<BaseList
							:items="referencesList"
							:is-loading="false"
							:empty-message="$t('app.audio.pool.references.no_references_found')" />
					</div>
				</div>
			</section>
			<section
				class="default_border bg-[#101010] h-auto overflow-y-auto w-1/2 text-gray-200 relative">
				<div class="p-5 flex flex-col gap-5">
					<div class="flex justify-between">
						<strong>
							{{ $t('app.audio.pool.references.spotify_results') }}
						</strong>
						<div class="flex gap-2.5 items-center">
							<small>Powered by</small>
							<img src="/img/spotify.svg" alt="Spotify" class="h-8" />
						</div>
					</div>
					<BaseTab
						:options="spotifyResponseOptions"
						:selected-tab="selectedTab"
						@on-select="onSelectTab" />

					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<BaseSpinner v-if="isSearching" class="mx-auto" :size="50" color="green" />
					</div>

					<div
						v-if="Object.values(spotifyResults).length && selectedTab"
						ref="spotifyListRef"
						class="overflow-y-auto max-h-[450px]">
						<AppSpotifyResultsHeader
							:headers="resultsHeaders"
							class="sticky top-0 left-0 bg-[#101010] py-2" />
						<AppSpotifyResultsAlbums
							v-if="selectedTab === 'albums'"
							:data="spotifyResults.albums.items"
							@on-add="(item: AlbumsItem) => addItem('albums', item)" />
						<AppSpotifyResultsArtists
							v-else-if="selectedTab === 'artists'"
							:data="spotifyResults.artists.items"
							@on-add="(item: ArtistsItem) => addItem('artists', item)" />
						<AppSpotifyResultsTracks
							v-else-if="selectedTab === 'tracks'"
							:data="spotifyResults.tracks.items"
							@on-add="(item: TracksItem) => addItem('tracks', item)" />
						<div
							v-if="
								!spotifyResults.albums.items.length &&
								!spotifyResults.artists.items.length &&
								!spotifyResults.tracks.items.length
							">
							<small class="text-center text-red-500">
								{{ $t('app.audio.pool.references.no_results_found') }}
							</small>
						</div>
					</div>
				</div>
			</section>
		</div>
		<AppMusicPlayer class="absolute bottom-0 left-0 z-50" />
	</section>
</template>

<script setup lang="ts">
import { getSpotifyByQuery, getSpotifySession } from '@/services/spotify.service';
import { AlbumsItem, ArtistsItem, SpotifyGetByQueryResponse, TracksItem } from '@/interfaces';

definePageMeta({
	title: 'Audio References',
	description: 'Audio References description',
	layout: 'dashboard',
});

const isSearching = ref(false);
const searchQuery = ref('');
const selectedTab = ref('albums');
const referencesList = ref([]);
const spotifyResults = ref<SpotifyGetByQueryResponse>({} as SpotifyGetByQueryResponse);
const spotifyListRef = ref<HTMLElement | null>(null);
const offset = ref(0);

const resultsHeaders = computed(() => {
	switch (selectedTab.value) {
		case 'albums':
			return [
				{ label: 'Image', styles: 'col-span-1' },
				{ label: 'Name and Artists', styles: 'col-span-6' },
				{ label: 'Release Date', styles: 'col-span-2' },
				{ label: 'Action', styles: 'col-span-2 text-center' },
			];
		case 'artists':
			return [
				{ label: 'Image', styles: 'col-span-1' },
				{ label: 'Name', styles: 'col-span-8' },
				{ label: 'Action', styles: 'col-span-2 text-center' },
			];
		case 'tracks':
			return [
				{ label: 'Name and Artists', styles: 'col-span-4' },
				{ label: 'Album', styles: 'col-span-4' },
				{ label: 'Duration', styles: 'col-span-1' },
				{ label: 'Action', styles: 'col-span-2 text-center' },
			];
		default:
			return [];
	}
});

const spotifyResponseOptions = computed(() =>
	Object.keys(spotifyResults.value).map((key) => ({ label: key, value: key })),
);
const onSearchSpotifySongs = async () => {
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

const addItem = (
	type: 'albums' | 'artists' | 'tracks',
	item: AlbumsItem | ArtistsItem | TracksItem,
) => {
	console.log('ADD_ITEM', type, item);
};

watch(searchQuery, (newVal, oldVal) => {
	if (newVal !== oldVal) {
		offset.value = 0;
	}
});

watch(spotifyListRef, (newValue) => {
	if (!newValue) return;

	newValue.addEventListener('scroll', async () => {
		if (newValue.scrollTop + newValue.clientHeight >= newValue.scrollHeight && !isSearching.value) {
			offset.value += 20;
			await onSearchSpotifySongs();
			// Scroll to the middle of the list
			setTimeout(() => {
				newValue.scrollTop = newValue.scrollHeight / 2;
			}, 500);
		}
	});
});

onMounted(async () => {
	await getSpotifySession();
});
</script>
