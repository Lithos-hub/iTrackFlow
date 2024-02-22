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
						:placeholder="$t('app.audio.pool.references.search_placeholder')"
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
						:placeholder="$t('app.audio.pool.references.search_placeholder')"
						debounced
						@input="onSearchSpotifySongs" />
				</section>
			</section>
		</div>
		<div class="flex gap-5 w-full h-full">
			<section class="default_border default_mode h-auto overflow-y-auto w-1/2">
				<div class="p-5 flex flex-col gap-5">
					<strong>
						{{ $t('app.audio.pool.references.my_references') }}
					</strong>
					<div class="flex flex-wrap gap-5 text-white">
						<BaseList
							:data="referencesList"
							:is-loading="false"
							:empty-message="$t('app.audio.pool.references.no_references_found')" />
					</div>
				</div>
			</section>
			<section class="default_border bg-black h-auto overflow-y-auto w-1/2">
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
					<ClientOnly>
						<BaseTab
							:options="spotifyResponseOptions"
							:selected-tab="selectedTab"
							@on-select="onSelectTab" />
					</ClientOnly>
					<hr class="border border-[#1Db954]" />
					<div
						v-if="Object.values(spotifyResults).length && selectedTab"
						class="flex flex-wrap gap-5 text-white">
						<ul>
							<li v-for="{ id, name } of spotifyResults[selectedTab].items" :key="id">
								{{ name }}
							</li>
						</ul>
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

const searchQuery = ref('');
const selectedTab = ref('');
const referencesList = ref([]);
const spotifyResults = ref<SpotifyGetByQueryResponse>({} as SpotifyGetByQueryResponse);

const spotifyResponseOptions = computed(() =>
	Object.keys(spotifyResults.value).map((key) => ({ label: key, value: key })),
);
const onSearchSpotifySongs = async () => {
	try {
		spotifyResults.value = await getSpotifyByQuery(searchQuery.value);
	} catch (error) {
		console.log('SPOTIFY_GET_BY_QUERY_ERROR', error);
	}
};

const onSelectTab = (value: string) => (selectedTab.value = value);

onMounted(() => {
	getSpotifySession();
});
</script>
