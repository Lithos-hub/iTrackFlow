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
						@input="getResultsByQuery" />
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
		<div class="flex gap-5 w-full h-full">
			<section class="default_border default_mode h-auto w-1/2">
				<div class="p-5 flex flex-col gap-5">
					<strong>
						{{ $t('app.audio.pool.references.my_references') }}
					</strong>
					<div v-if="Object.keys(referencesList).length" class="flex flex-wrap gap-5 text-white">
						<ul class="flex flex-col max-h-[500px] overflow-y-auto">
							<li
								v-for="category in Object.keys(referencesList)"
								:key="category"
								class="flex flex-col">
								<div
									v-for="data of referencesList[category]"
									:key="data.id"
									class="flex justify-between items-center gap-20">
									<div class="flex gap-5 items-center">
										<small
											:class="{
												'text-green-500 bg-green-500/10 flex flex-col justify-center items-center px-5 uppercase py-1 text-xs rounded-full border border-green-500/50':
													data.type === 'album',
												'text-blue-500 bg-blue-500/10 flex flex-col justify-center items-center px-5 uppercase py-1 text-xs rounded-full border border-blue-500/50':
													data.type === 'artist',
												'text-yellow-500 bg-yellow-500/10 flex flex-col justify-center items-center px-5 uppercase py-1 text-xs rounded-full border border-yellow-500/50':
													data.type === 'track',
											}">
											{{ data.type }}
										</small>
										<div class="text-sm flex flex-col min-w-[475px]">
											<strong>{{ data.name }}</strong>
											<small v-if="data.artists">{{ data.artists[0].name }}</small>
										</div>
									</div>
									<BaseButton
										icon="trash"
										flat
										icon-color="red"
										@click="removeReference(category, data.id)" />
								</div>
							</li>
						</ul>
					</div>
					<div v-else>
						<small class="text-red-500">
							{{ $t('app.audio.pool.references.no_references_found') }}
						</small>
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
				{ label: 'Image', styles: 'col-span-2' },
				{ label: 'Name/Artists', styles: 'col-span-5' },
				{ label: 'Release Date', styles: 'col-span-2' },
			];
		case 'artists':
			return [
				{ label: 'Image', styles: 'col-span-2' },
				{ label: 'Name', styles: 'col-span-7' },
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

const removeReference = (category: string, id: string) => {
	const index = referencesList.value[category].findIndex((item) => item.id === id);
	referencesList.value[category].splice(index, 1);
};

watch(spotifyListRef, (newValue) => {
	if (!newValue) return;

	newValue.addEventListener('scroll', async () => {
		if (newValue.scrollTop + newValue.clientHeight >= newValue.scrollHeight && !isSearching.value) {
			offset.value += 20;
			await getResultsByQuery();
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
