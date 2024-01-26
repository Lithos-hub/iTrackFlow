<template>
	<div class="flex flex-col h-screen w-full">
		<header class="sticky top-0 left-0 z-50">
			<BaseNavbar />
		</header>

		<div class="flex flex-1 flex-grow">
			<AppSideMenu :key="sideMenuKey" class="max-w-[350px] flex flex-col gap-5">
				<strong class="text-primary">
					{{
						$t('app.harmony.sidemenu.bar_options', {
							number: `${selectedBarIndex}`,
						})
					}}
				</strong>
				<strong>
					{{ $t('app.harmony.sidemenu.select_tonal_chord') }}
				</strong>
				<BaseDropdown
					v-model="selectedChord"
					:data="chordListByKeySignature"
					no-cleanable
					@input="onChangeChord" />
				<hr />
				<strong>
					{{ $t('app.harmony.sidemenu.select_custom_chord') }}
				</strong>
				<div class="flex gap-5 items-end">
					<BaseDropdown
						v-model="selectedAtonalChordRoot"
						:label="$t('app.harmony.sidemenu.root_note')"
						:data="NotesList"
						no-cleanable />
					<BaseDropdown
						v-model="selectedAtonalChordType"
						:label="$t('app.harmony.sidemenu.chord_type')"
						:data="ChordTypesList"
						no-cleanable />
					<BaseButton icon="add" color="success" @click="onAddExoticChord" />
				</div>
				<hr />
				<strong>
					{{ $t('app.harmony.sidemenu.split') }}
				</strong>
				<BaseDropdown
					v-model="selectedBarSplit"
					:label="$t('app.harmony.sidemenu.number_of_splits')"
					:data="splitOptions"
					@input="splitBar" />
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

					<div class="grid grid-cols-5 w-full gap-5 text-black dark:text-primary">
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
							:data="NotesList"
							@input="updateComponents" />
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

					<AppMusicSheet
						v-model="initialHarmonyState.title"
						:data="initialHarmonyState"
						:staffs="staffs" />
				</div>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	HarmonyData,
	ChordName,
	MusicChord,
	RomanNumber,
} from '@/components/app/MusicStaff/MusicStaff.interfaces';
import { DropdownItem } from '@/components/global/BaseDropdown/BaseDropdown.interfaces';
import { NotesList, TimeSignaturesList, ScaleTypesList, ChordTypesList } from '@/assets/data';
import { useHarmonyStore } from '~/store/harmony';

definePageMeta({
	layout: 'harmony',
	middleware: 'auth',
});

const { t } = useI18n();

// Pinia
const { selectedBarIndex, selectedChord, selectedBarSubdivision, selectedBarSplit } =
	storeToRefs(useHarmonyStore());

// MOCK
const initialHarmonyState = ref<HarmonyData>({
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

const sideMenuKey = ref(0);
const sheetKey = ref(0);
// Header
const tempo = ref(initialHarmonyState.value.tempo);
const rootNote = ref([initialHarmonyState.value.rootNote]);
const scaleType = ref([initialHarmonyState.value.scaleType]);
const timeSignature = ref([initialHarmonyState.value.timeSignature]);
const numberOfBars = ref(16);

// Sidemenu
const selectedAtonalChordRoot = ref<string[]>([]);
const selectedAtonalChordType = ref<string[]>([]);

const scalesTypesFormatted = computed(() => {
	return ScaleTypesList.map(({ label, value }) => ({
		label: t(label),
		value,
	}));
});

const chordListByKeySignature = computed(
	() =>
		getAvailableChords({
			rootNote: rootNote.value[0],
			scaleType: scaleType.value[0],
		})?.map(({ nomenclature, note, romanNumber }) => ({
			label: `${note}${nomenclature} - (${romanNumber})`,
			value: `${note}${nomenclature} - (${romanNumber})`,
		})) || ([] as DropdownItem[]),
);

const staffs = computed<MusicChord[]>(() => {
	const currentStaffsWithChordsLength = [...initialHarmonyState.value.chords].length;

	const currentSheetHasMoreBarsThanSelected =
		currentStaffsWithChordsLength > Number(numberOfBars.value);

	const newStaffs = currentSheetHasMoreBarsThanSelected
		? [...initialHarmonyState.value.chords.slice(0, Number(numberOfBars.value))]
		: [
				...initialHarmonyState.value.chords,
				...new Array(Number(numberOfBars.value) - currentStaffsWithChordsLength).fill({
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
	initialHarmonyState.value.chords = newStaffs;

	return newStaffs;
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
		chord: selectedChord.value[0].split(' - ')[0] as ChordName,
		romanNumber: selectedChord.value[0]
			.split(' - ')[1]
			.replace('(', '')
			.replace(')', '') as RomanNumber,
	};

	initialHarmonyState.value.chords = newStaffs;
};

const onAddExoticChord = () => {
	const newStaffs = [...staffs.value];

	const matchNewChordInAvailableChordList = chordListByKeySignature.value.find(({ value }) =>
		(value as string).includes(
			`${selectedAtonalChordRoot.value[0]}${selectedAtonalChordType.value[0]}`,
		),
	);

	newStaffs[selectedBarIndex.value - 1].subdivisionChords[selectedBarSubdivision.value - 1] = {
		id: new Date().getTime(),
		chord: `${selectedAtonalChordRoot.value[0]}${selectedAtonalChordType.value[0]}` as ChordName,
		romanNumber: matchNewChordInAvailableChordList
			? ((matchNewChordInAvailableChordList.value as ChordName)
					.split(' - ')[1]
					.replace('(', '')
					.replace(')', '') as RomanNumber)
			: 'atonal',
	};

	initialHarmonyState.value.chords = newStaffs;
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

	initialHarmonyState.value.chords = newStaffs;
};

const updateComponents = () => {
	sideMenuKey.value += 1;
	sheetKey.value += 1;
};

onMounted(() => {
	const firstSubdivisionChordName = initialHarmonyState.value.chords[0].subdivisionChords[0].chord;
	const firstSubdivisionRomanNumber =
		initialHarmonyState.value.chords[0].subdivisionChords[0].romanNumber;
	selectedChord.value = [
		`${firstSubdivisionChordName as ChordName} - (${firstSubdivisionRomanNumber as RomanNumber})`,
	];
});
</script>
