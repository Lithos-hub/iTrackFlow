<template>
	<section class="flex flex-col gap-5">
		<section class="default_border bg-softdark p-5">
			<div class="flex flex-wrap gap-5">
				<BaseDropdown
					v-model="selectedStyle"
					:data="stylesList"
					:label="$t('app.audio.pool.demos.category')" />
				<BaseDropdown
					v-model="selectedInstrument"
					:data="instrumentsList"
					multiselect
					:label="$t('app.audio.pool.demos.instrument')" />
				<BaseDropdown
					v-model="selectedDuration"
					:data="durationsList"
					:label="$t('app.audio.pool.demos.duration')" />
				<BaseDropdown
					v-model="selectedCreator"
					:data="creatorsList"
					:label="$t('app.audio.pool.demos.creator')" />
				<BaseDropdown
					v-model="selectedTempo"
					:data="temposList"
					:label="$t('app.audio.pool.demos.tempo')" />
				<BaseInput
					v-model="searchQuery"
					variant="underline"
					:placeholder="$t('app.audio.pool.demos.search')" />
			</div>
		</section>
		<section class="default_border bg-softdark">
			<div class="grid grid-cols-8 gap-10 p-5">
				<article
					v-for="({ title, description }, i) of audioData"
					:key="i"
					class="default_border rounded-2xl flex flex-col justify-center items-center aspect-square shadow bg-dark duration-200 relative">
					<BaseButton flat icon="trash" icon-color="red" class="absolute top-0 right-0" />
					<BaseButton flat icon="pencil" icon-color="blue" class="absolute top-0 left-0" />
					<BaseIcon icon="sound" :size="40" />
					<p>{{ title }}</p>
					<small class="text-gray-200">
						{{ description }}
					</small>
				</article>
			</div>
		</section>
	</section>
</template>

<script setup lang="ts">
definePageMeta({
	title: 'Audio Demos',
	description: 'Audio Demos description',
	layout: 'dashboard',
});

const searchQuery = ref('');

const selectedStyle = ref([]);
const selectedInstrument = ref([]);
const selectedDuration = ref([]);
const selectedTempo = ref('');
const selectedCreator = ref('');

const stylesList = ref([
	{
		label: 'Category 1',
		value: 'category-1',
	},
	{
		label: 'Category 2',
		value: 'category-2',
	},
	{
		label: 'Category 3',
		value: 'category-3',
	},
]);

const instrumentsList = ref([
	{
		label: 'Instrument 1',
		value: 'instrument-1',
	},
	{
		label: 'Instrument 2',
		value: 'instrument-2',
	},
	{
		label: 'Instrument 3',
		value: 'instrument-3',
	},
]);

const durationsList = ref([
	{
		label: 'Duration 1',
		value: 'duration-1',
	},
	{
		label: 'Duration 2',
		value: 'duration-2',
	},
	{
		label: 'Duration 3',
		value: 'duration-3',
	},
]);

const creatorsList = ref([
	{
		label: 'Creator 1',
		value: 'creator-1',
	},
	{
		label: 'Creator 2',
		value: 'creator-2',
	},
	{
		label: 'Creator 3',
		value: 'creator-3',
	},
]);

const temposList = ref([
	{
		label: 'Tempo 1',
		value: 'tempo-1',
	},
	{
		label: 'Tempo 2',
		value: 'tempo-2',
	},
	{
		label: 'Tempo 3',
		value: 'tempo-3',
	},
]);

const audioData = ref([
	{
		title: 'Audio 1',
		description: 'Audio 1 description',
	},
	{
		title: 'Audio 2',
		description: 'Audio 2 description',
	},
	{
		title: 'Audio 3',
		description: 'Audio 3 description',
	},
	{
		title: 'Audio 4',
		description: 'Audio 4 description',
	},
	{
		title: 'Audio 5',
		description: 'Audio 5 description',
	},
	{
		title: 'Audio 6',
		description: 'Audio 6 description',
	},
	{
		title: 'Audio 7',
		description: 'Audio 7 description',
	},
	{
		title: 'Audio 8',
		description: 'Audio 8 description',
	},
	{
		title: 'Audio 9',
		description: 'Audio 9 description',
	},
	{
		title: 'Audio 10',
		description: 'Audio 10 description',
	},
]);
</script>
