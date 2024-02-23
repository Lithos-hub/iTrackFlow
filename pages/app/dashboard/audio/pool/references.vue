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

					<BaseSpinner v-if="isSearching" class="mx-auto" />

					<div
						v-if="Object.values(spotifyResults).length && selectedTab"
						class="overflow-y-auto max-h-[450px]">
						<AppSpotifyResultsHeader
							:headers="resultsHeaders"
							class="sticky top-0 left-0 bg-[#101010] py-2" />
						<AppSpotifyResultsList :data="resultsData" />
					</div>
				</div>
			</section>
		</div>
		<AppMusicPlayer class="absolute bottom-0 left-0 z-50" />
	</section>
</template>

<script setup lang="ts">
import { getSpotifyByQuery, getSpotifySession } from '@/services/spotify.service';
import { SpotifyGetByQueryResponse } from '@/interfaces';

definePageMeta({
	title: 'Audio References',
	description: 'Audio References description',
	layout: 'dashboard',
});

const isSearching = ref(false);
const searchQuery = ref('');
const selectedTab = ref('');
const referencesList = ref([]);
const spotifyResults = ref<SpotifyGetByQueryResponse>({} as SpotifyGetByQueryResponse);

const resultsHeaders = computed(() => {
	switch (selectedTab.value) {
		case 'albums':
			return [
				{ label: 'Album', width: 200 },
				{ label: 'Artists', width: 200 },
				{ label: 'Release Date', width: 100 },
			];
		case 'artists':
			return [{ label: 'Name', width: 200 }];
		case 'tracks':
			return [
				{ label: 'Title', width: 400 },
				{ label: 'Album', width: 200 },
				{ label: 'Duration', width: 50 },
			];
		default:
			return [];
	}
});

const resultsData = computed(() => {
	const { items: albumItems } = spotifyResults.value.albums;
	const { items: artistItems } = spotifyResults.value.artists;
	const { items: tracksItems } = spotifyResults.value.tracks;
	switch (selectedTab.value) {
		case 'albums':
			return albumItems.map((album) => ({
				id: album.id,
				name: album.name,
				artists: album.artists.map((artist) => artist.name).join(', '),
				releaseDate: album.release_date,
			}));
		case 'artists':
			return artistItems.map((artist) => ({
				id: artist.id,
				name: artist.name,
			}));
		case 'tracks':
			return tracksItems.map((track) => ({
				id: track.id,
				name: track.name,
				album: track.album.name,
				duration: track.duration_ms,
			}));
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
		spotifyResults.value = await getSpotifyByQuery(searchQuery.value);
		selectedTab.value = spotifyResponseOptions.value[0].value;
	} catch (error) {
		console.log('SPOTIFY_GET_BY_QUERY_ERROR', error);
	} finally {
		isSearching.value = false;
	}
};

const onSelectTab = (value: string) => (selectedTab.value = value);

onMounted(async () => {
	await getSpotifySession();
});
</script>
