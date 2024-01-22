<template>
	<div class="flex flex-col h-screen w-full">
		<header class="sticky top-0 left-0 z-50">
			<BaseNavbar />
		</header>

		<div class="flex flex-1 flex-grow">
			<AppSideMenu class="max-w-[350px] flex flex-col gap-5">
				<strong class="text-primary">Bar #{{ selectedBarIndex + 1 }} options</strong>
				<BaseDropdown
					v-model="selectedChord"
					:label="`Select chord for key signature: ${harmonyData.rootNote} ${harmonyData.scaleType}`"
					:data="chordListByKeySignature"
					no-cleanable
					@input="onChangeChord" />
				<hr />
				<strong>Select other chord</strong>
				<div class="flex gap-5 items-end">
					<BaseDropdown
						v-model="selectedOtherChordRoot"
						label="Root note"
						:data="NotesList"
						no-cleanable />
					<BaseDropdown
						v-model="selectedOtherChordType"
						label="Chord type"
						:data="ChordTypesList"
						no-cleanable />
					<BaseButton icon="add" color="success" @click="onAddExoticChord" />
				</div>
				<hr />
				<strong>Split</strong>
				<div class="flex gap-5 items-end">
					<BaseDropdown
						v-model="selectedBarSplit"
						label="Number of splits"
						:data="splitOptions"
						@input="splitBar" />
				</div>
			</AppSideMenu>

			<section class="h-full w-full">
				<div class="mx-10 flex flex-col gap-5">
					<div class="flex justify-between">
						<BaseButton
							variant="stealth"
							color="secondary"
							icon="chevron-rounded-left"
							icon-left
							class="my-5"
							@click="$router.back()">
							{{ $t('app.ui.go_back') }}
						</BaseButton>
					</div>

					<div class="grid grid-cols-5 w-full gap-5">
						<BaseInput v-model="tempo" :label="$t('app.harmony.tempo')" color="primary" />
						<BaseDropdown
							v-model="timeSignature"
							:label="$t('app.harmony.time_signature')"
							color="primary"
							no-cleanable
							:data="TimeSignaturesList" />
						<BaseDropdown
							v-model="rootNote"
							:label="$t('app.harmony.root_note')"
							color="primary"
							no-cleanable
							:data="NotesList" />
						<BaseDropdown
							v-model="scaleType"
							:label="$t('app.harmony.scale_type')"
							color="primary"
							no-cleanable
							:data="scalesTypesFormatted" />
						<BaseInput
							v-model="numberOfBars"
							debounced
							type="number"
							:label="$t('app.harmony.number_of_bars')"
							color="primary" />
					</div>

					<!-- Harmony sheet -->
					<section class="bg-white p-5 shadow relative flex flex-col gap-5">
						<h2 class="text-center text-gray-900 font-bold italic">
							<div v-if="isEditingTitle">
								<div class="fixed top-0 left-0 h-full w-full z-0" @click="isEditingTitle = false" />
								<BaseInput
									v-model="harmonyData.title"
									color="primary"
									variant="underline"
									no-outline
									class="z-50 text-center"
									@keydown.enter="isEditingTitle = false" />
							</div>
							<span v-else @click="isEditingTitle = !isEditingTitle">
								"{{ harmonyData.title }}"
							</span>
						</h2>
						<hr />
						<div
							class="border grid"
							:style="{
								'grid-template-columns': `repeat(${zoomLevel}, 1fr)`,
							}">
							<AppMusicStaff
								v-for="(chord, index) of staffs"
								:key="index"
								:index="index + 1"
								v-bind="chord"
								:key-signature="harmonyData.scaleType" />
						</div>
						<!-- Sheet zoom controls -->
						<div class="bg-dark border border-dark fixed right-5 bottom-5 rounded">
							<div class="flex flex-col gap-1 p-1">
								<BaseButton
									icon="zoom-in"
									color="white"
									variant="stealth"
									icon-color="white"
									@click="zoomIn" />
								<BaseButton
									icon="zoom-out"
									color="white"
									variant="stealth"
									icon-color="white"
									@click="zoomOut" />
							</div>
						</div>
					</section>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import { HarmonyData, ChordName } from '@/components/app/MusicStaff/MusicStaff.interfaces';
import { DropdownItem } from '@/components/global/BaseDropdown/BaseDropdown.interfaces';
import { NotesList, TimeSignaturesList, ScaleTypesList, ChordTypesList } from '@/assets/data';
import { useHarmonyStore } from '~/store/harmony';

definePageMeta({
	layout: 'harmony',
	middleware: 'auth',
});

const getProject = async () => {
	const { data } = await useFetch('/api/projects', {
		method: 'GET',
	});
	console.log(data);
};

const { t } = useI18n();
// MOCK
const harmonyData = ref<HarmonyData>({
	id: 1,
	title: 'Song title',
	tempo: 120,
	timeSignature: '4/4',
	rootNote: 'C',
	scaleType: 'minor',
	chords: [
		{
			id: new Date().getTime(),
			subdivisionChords: [
				{
					id: new Date().getTime(),
					chord: 'Cm',
					romanNumber: 'i',
				},
			],
			splits: 1,
		},
		{
			id: new Date().getTime(),
			subdivisionChords: [
				{
					id: new Date().getTime(),
					chord: 'Gm',
					romanNumber: 'v',
				},
				{
					id: new Date().getTime(),
					chord: 'Cm',
					romanNumber: 'i',
				},
				{
					id: new Date().getTime(),
					chord: 'Fm',
					romanNumber: 'iv',
				},
			],
			splits: 3,
		},
		{
			id: new Date().getTime(),
			subdivisionChords: [
				{
					id: new Date().getTime(),
					chord: 'Eb',
					romanNumber: 'III',
				},
			],
			splits: 1,
		},
	],
});

const chordListByKeySignature = computed(
	() =>
		getAvailableChords({
			rootNote: harmonyData.value.rootNote,
			scaleType: harmonyData.value.scaleType,
		})?.map(({ nomenclature, note, romanNumber }) => ({
			label: `${note}${nomenclature} - (${romanNumber})`,
			value: `${note}${nomenclature} - (${romanNumber})`,
		})) as DropdownItem[],
);

// Pinia
const { selectedBarIndex, selectedChord, selectedBarSubdivision, selectedBarSplit } =
	storeToRefs(useHarmonyStore());

// Header
const tempo = ref(harmonyData.value.tempo);
const rootNote = ref(harmonyData.value.rootNote);
const scaleType = ref([harmonyData.value.scaleType]);
const timeSignature = ref([harmonyData.value.timeSignature]);
const numberOfBars = ref(20);

// Sidemenu
const selectedOtherChordRoot = ref<string[]>([]);
const selectedOtherChordType = ref<string[]>([]);

// Sheet
const zoomLevel = ref(8);
const isEditingTitle = ref(false);

const scalesTypesFormatted = computed(() => {
	return ScaleTypesList.map(({ label, value }) => ({
		label: t(label),
		value,
	}));
});

const staffs = computed(() => {
	return [
		...harmonyData.value.chords,
		...new Array(numberOfBars.value - harmonyData.value.chords.length).fill({
			id: new Date().getTime(),
			subdivisionChords: [
				{
					id: new Date().getTime(),
					chord: '',
					romanNumber: '',
				},
			],
			splits: 1,
		}),
	];
});

const splitOptions = computed(() => {
	const numberOfSplits = timeSignature.value.at(0)?.charAt(0);
	return new Array(Number(numberOfSplits)).fill(0).map((_, index) => ({
		label: `${index + 1}`,
		value: index + 1,
	}));
});

const onChangeChord = () => {
	const newStaffs = [...staffs.value];

	newStaffs[selectedBarIndex.value - 1].subdivisionChords[selectedBarSubdivision.value - 1] = {
		id: new Date().getTime(),
		chord: selectedChord.value[0].split(' - ')[0],
		romanNumber: selectedChord.value[0].split(' - ')[1].replace('(', '').replace(')', ''),
	};

	harmonyData.value.chords = newStaffs;
};

const onAddExoticChord = () => {
	const newStaffs = [...staffs.value];

	const matchNewChordInAvailableChordList = chordListByKeySignature.value.find(({ value }) =>
		(value as string).includes(
			`${selectedOtherChordRoot.value[0]}${selectedOtherChordType.value[0]}`,
		),
	);

	newStaffs[selectedBarIndex.value - 1].subdivisionChords[selectedBarSubdivision.value - 1] = {
		id: new Date().getTime(),
		chord: `${selectedOtherChordRoot.value[0]}${selectedOtherChordType.value[0]}`,
		romanNumber: matchNewChordInAvailableChordList
			? (matchNewChordInAvailableChordList.value as ChordName)
					.split(' - ')[1]
					.replace('(', '')
					.replace(')', '')
			: 'atonal',
	};

	harmonyData.value.chords = newStaffs;
};

const splitBar = () => {
	const newStaffs = [...staffs.value];
	const { subdivisionChords } = newStaffs[selectedBarIndex.value - 1];

	const currentStaffHasMoreSubdivisionsThanSelected =
		subdivisionChords.length > selectedBarSplit.value[0];

	const newArrayLength = currentStaffHasMoreSubdivisionsThanSelected
		? subdivisionChords.length - selectedBarSplit.value[0]
		: selectedBarSplit.value[0] - subdivisionChords.length;

	const newArrayOfSubdivisions = currentStaffHasMoreSubdivisionsThanSelected
		? [...subdivisionChords.slice(0, selectedBarSplit.value[0])]
		: [
				...subdivisionChords,
				...new Array(newArrayLength).fill({
					id: new Date().getTime(),
					chord: newStaffs[selectedBarIndex.value - 1].subdivisionChords[0].chord,
					romanNumber: newStaffs[selectedBarIndex.value - 1].subdivisionChords[0].romanNumber,
				}),
			];

	newStaffs[selectedBarIndex.value - 1] = {
		...newStaffs[selectedBarIndex.value - 1],
		subdivisionChords: newArrayOfSubdivisions,
		splits: selectedBarSplit.value[0],
	};

	harmonyData.value.chords = newStaffs;
};

const zoomIn = () => {
	if (zoomLevel.value === 12) return;
	zoomLevel.value += 1;
};

const zoomOut = () => {
	if (zoomLevel.value === 3) return;
	zoomLevel.value -= 1;
};

onMounted(() => {
	getProject();
	const firstSubdivisionChordName = harmonyData.value.chords[0].subdivisionChords[0].chord;
	const firstSubdivisionRomanNumber = harmonyData.value.chords[0].subdivisionChords[0].romanNumber;
	selectedChord.value = [`${firstSubdivisionChordName} - (${firstSubdivisionRomanNumber})`];
});
</script>
