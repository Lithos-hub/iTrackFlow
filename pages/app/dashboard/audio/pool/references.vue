<template>
	<section class="flex flex-col gap-5 grow h-[calc(100%-40px)]">
		<div class="flex gap-5">
			<section class="flex flex-col gap-5 w-full h-full">
				<section class="default_border default_mode p-5">
					<BaseInput
						v-model="referenceQuery"
						variant="bordered"
						color="white"
						:label="$t('app.audio.pool.references.search_in_references')"
						:placeholder="$t('app.audio.pool.references.search_in_references_placeholder')"
						debounced
						@input="filterReferences" />
				</section>
			</section>
			<section class="flex flex-col gap-5 w-full">
				<section class="default_border default_mode p-5">
					<BaseInput
						v-model="spotifyQuery"
						variant="bordered"
						color="white"
						:label="$t('app.audio.pool.references.search_in_spotify')"
						:placeholder="$t('app.audio.pool.references.search_in_spotify_placeholder')"
						debounced
						@input="getResultsByQuery" />
				</section>
			</section>
		</div>
		<div class="flex gap-5">
			<section class="default_border default_mode w-1/2">
				<div class="p-5 flex flex-col gap-5">
					<strong>
						{{ $t('app.audio.pool.references.my_references') }}
					</strong>
					<div class="max-h-[500px] overflow-y-auto">
						<div v-for="category in Object.keys(computedReferencesList)" :key="category">
							<AppReferencesListItem
								v-for="item of computedReferencesList[category]"
								:key="item.id"
								:item="item"
								@on-remove="(id) => removeReference(category, id)" />
						</div>
					</div>
				</div>
			</section>
			<section class="default_border bg-[#101010] h-auto w-1/2 text-gray-200 relative">
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
						class="overflow-y-auto max-h-[450px]"
						@scroll.passive="onScrollOverSpotifySection">
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
import { AlbumsItem, ArtistsItem, TracksItem } from '@/interfaces';
import { useSpotifyStore } from '@/store/spotify';
import { getSpotifySession } from '~/services/spotify.service';

definePageMeta({
	title: 'Audio References',
	description: 'Audio References description',
	layout: 'dashboard',
});

const { getResultsByQuery, onSelectTab, addItem } = useSpotifyStore();
const {
	spotifyQuery,
	referencesList,
	spotifyResponseOptions,
	spotifyResults,
	isSearching,
	selectedTab,
	offset,
} = storeToRefs(useSpotifyStore());

const spotifyListRef = ref<HTMLElement | null>(null);

const referenceQuery = ref('');

const resultsHeaders = computed(() => {
	switch (selectedTab.value) {
		case 'albums':
			return [
				{ label: 'Image', styles: 'col-span-1' },
				{ label: 'Name/Artists', styles: 'col-span-6' },
				{ label: 'Release Date', styles: 'col-span-2' },
			];
		case 'artists':
			return [
				{ label: 'Image', styles: 'col-span-1' },
				{ label: 'Name', styles: 'col-span-8' },
			];
		case 'tracks':
			return [
				{ label: 'Name/Artists', styles: 'col-span-2' },
				{ label: 'Album', styles: 'col-span-6' },
				{ label: 'Duration', styles: 'col-span-1' },
			];
		default:
			return [];
	}
});

const computedReferencesList = computed(() => filterReferences());

const removeReference = (category: string, id: string) => {
	const index = referencesList.value[category].findIndex((item) => item.id === id);
	referencesList.value[category].splice(index, 1);
};

const filterReferences = () => {
	return Object.keys(referencesList.value).reduce((acc, category) => {
		const filtered = referencesList.value[category].filter((item) => {
			// Search by name, album title and/or artist name
			const search = referenceQuery.value.toLowerCase();
			return (
				item.name.toLowerCase().includes(search) ||
				(item.type === 'track' && (item as TracksItem).album.name.toLowerCase().includes(search)) ||
				(item.type === 'track' &&
					(item as TracksItem).artists[0].name.toLowerCase().includes(search)) ||
				(item.type === 'album' &&
					(item as AlbumsItem).artists[0].name.toLowerCase().includes(search))
			);
		});
		acc[category] = filtered;
		return acc;
	}, {});
};

const onScrollOverSpotifySection = async () => {
	if (!spotifyListRef.value) return;

	if (
		spotifyListRef.value.scrollTop + spotifyListRef.value.clientHeight >=
			spotifyListRef.value.scrollHeight &&
		!isSearching.value
	) {
		offset.value += 20;
		await getResultsByQuery();
		// Scroll to the middle of the list
		setTimeout(() => {
			spotifyListRef.value!.scrollTop = spotifyListRef.value!.scrollHeight / 2;
		}, 500);
	}
};

onMounted(async () => {
	await getSpotifySession();
});
</script>
