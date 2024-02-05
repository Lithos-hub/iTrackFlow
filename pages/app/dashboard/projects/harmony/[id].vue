<template>
	<div class="flex flex-col h-screen w-full">
		<div class="flex flex-1 flex-grow">
			<AppSideMenu class="sidemenu">
				<section>
					<div class="px-7">
						<BaseButton
							variant="stealth"
							color="secondary"
							icon="chevron-left"
							icon-left
							class="my-5"
							@click="$router.back()">
							{{ $t('app.ui.go_back') }}
						</BaseButton>
						<h6 class="my-5">
							{{
								$t('app.harmony.sidemenu.bar_options', {
									number: `${selectedBarIndex}`,
								})
							}}
						</h6>
					</div>
					<hr class="sidemenu__separator" />
					<div class="sidemenu__block">
						<label class="text-white/30 text-sm font-semibold">
							{{ $t('app.harmony.sidemenu.select_tonal_chord') }}
						</label>
						<BaseDropdown
							v-model="selectedChord"
							:data="chordListByKeySignature"
							no-cleanable
							color="light"
							@input="onChangeChord" />
					</div>
					<hr class="sidemenu__separator" />
					<div class="sidemenu__block">
						<label class="sidemenu__label">
							{{ $t('app.harmony.sidemenu.select_custom_chord') }}
						</label>
						<div class="flex gap-5 items-end">
							<BaseDropdown
								v-model="selectedAtonalChordRoot"
								:label="$t('app.harmony.sidemenu.root_note')"
								:data="NotesList"
								color="light"
								no-cleanable />
							<BaseDropdown
								v-model="selectedAtonalChordType"
								:label="$t('app.harmony.sidemenu.chord_type')"
								:data="ChordTypesList"
								color="light"
								no-cleanable />
							<BaseButton
								icon="add"
								flat
								variant="outline"
								color="primary"
								icon-color="blue"
								@click="onAddExoticChord" />
						</div>
						<P v-if="atonalError" class="text-red-500">
							{{ $t('app.harmony.sidemenu.atonal_error') }}
						</P>
					</div>
					<hr class="sidemenu__separator" />
					<div class="sidemenu__block">
						<label class="sidemenu__label">
							{{ $t('app.harmony.sidemenu.split') }}
						</label>
						<BaseDropdown
							v-model="selectedBarSplit"
							:label="$t('app.harmony.sidemenu.number_of_splits')"
							:data="splitOptions"
							color="light"
							@input="splitBar" />
					</div>
				</section>
				<BaseSelectorsWrapper />
			</AppSideMenu>

			<section class="h-full w-full bg-white dark:bg-dark p-10">
				<div class="flex flex-col gap-5">
					<!-- MusicSheet header options -->
					<header
						class="grid grid-cols-5 w-full gap-5 p-2 dark:bg-softdark default_border dark:text-white">
						<BaseInput v-model="tempo" :label="$t('app.harmony.tempo')" />
						<BaseDropdown
							v-model="timeSignature"
							:label="$t('app.harmony.time_signature')"
							no-cleanable
							:data="TimeSignaturesList" />
						<BaseDropdown
							v-model="rootNote"
							:label="$t('app.harmony.root_note')"
							no-cleanable
							:data="NotesList" />
						<BaseDropdown
							v-model="scaleType"
							:label="$t('app.harmony.scale_type')"
							no-cleanable
							:data="scalesTypesFormatted" />
						<BaseInput
							v-model="numberOfBars"
							debounced
							type="number"
							:label="$t('app.harmony.number_of_bars')"
							@input="generateMusicSheetStaffs" />
					</header>

					<!-- Harmony sheet -->
					<AppMusicSheet
						v-model="initialHarmonyState.title"
						:data="initialHarmonyState"
						:staffs="initialHarmonyState.chords" />
				</div>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	HarmonyData,
	ChordName,
	RomanNumber,
	SubdivisionChord,
	MusicChord,
} from '@/components/App/MusicStaff/MusicStaff.interfaces';
import { DropdownItem } from '@/components/Base/Dropdown/BaseDropdown.interfaces';
import { NotesList, TimeSignaturesList, ScaleTypesList, ChordTypesList } from '@/assets/data';
import { useHarmonyStore } from '~/store/harmony';

definePageMeta({
	name: 'HarmonyPage',
	layout: 'harmony',
	middleware: 'auth',
});

const { t } = useI18n();

// Pinia
const { selectedBarIndex, selectedChord, selectedBarSubdivision, selectedBarSplit } =
	storeToRefs(useHarmonyStore());

// MOCK
const initialHarmonyState = ref<HarmonyData>({
	id: getRandomNumberId(),
	title: 'Song title',
	tempo: 120,
	timeSignature: '4/4',
	rootNote: 'C',
	scaleType: 'minor',
	chords: [
		{
			id: getRandomNumberId(),
			subdivisionChords: [
				{
					id: getRandomNumberId(),
					chord: 'Cm',
					romanNumber: 'i',
				},
			],
			splits: 1,
			lyrics: 'Lorem ipsum',
		},
		{
			id: getRandomNumberId(),
			subdivisionChords: [
				{
					id: getRandomNumberId(),
					chord: 'Gm',
					romanNumber: 'v',
				},
				{
					id: getRandomNumberId(),
					chord: 'Cm',
					romanNumber: 'i',
				},
				{
					id: getRandomNumberId(),
					chord: 'Fm',
					romanNumber: 'iv',
				},
			],
			splits: 3,
			lyrics: 'Dolor sit amet',
		},
		{
			id: getRandomNumberId(),
			subdivisionChords: [
				{
					id: getRandomNumberId(),
					chord: 'Eb',
					romanNumber: 'III',
				},
			],
			splits: 1,
		},
	],
});

// Header
const tempo = ref(initialHarmonyState.value.tempo);
const rootNote = ref([initialHarmonyState.value.rootNote]);
const scaleType = ref([initialHarmonyState.value.scaleType]);
const timeSignature = ref([initialHarmonyState.value.timeSignature]);
const numberOfBars = ref(16);

// Sidemenu
const selectedAtonalChordRoot = ref<string[]>([]);
const selectedAtonalChordType = ref<string[]>([]);
const atonalError = ref(false);

const scalesTypesFormatted = computed(() =>
	ScaleTypesList.map(({ label, value }) => ({
		label: t(label),
		value,
	})),
);

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

const splitOptions = computed(() => {
	const numberOfSplits = timeSignature.value.at(0)?.charAt(0);
	return new Array(Number(numberOfSplits)).fill(0).map((_, index) => ({
		label: `${index + 1}`,
		value: String(index + 1),
	}));
});

const generateMusicSheetStaffs = () => {
	const currentStaffsWithChordsLength = initialHarmonyState.value.chords.length;

	const currentSheetHasMoreBarsThanSelected =
		currentStaffsWithChordsLength > Number(numberOfBars.value);

	const emptyStaffs: MusicChord[] = Array.from(new Array(Number(numberOfBars.value))).map(() => {
		return {
			id: getRandomNumberId(),
			subdivisionChords: [
				{
					id: getRandomNumberId(),
					chord: '',
					romanNumber: '',
				},
			],
			splits: 1,
			lyrics: '',
		};
	});

	initialHarmonyState.value.chords = currentSheetHasMoreBarsThanSelected
		? initialHarmonyState.value.chords.slice(0, Number(numberOfBars.value))
		: initialHarmonyState.value.chords.concat(emptyStaffs.slice(currentStaffsWithChordsLength));
};

const insertChord = (chord: SubdivisionChord) => {
	const barIndex = selectedBarIndex.value - 1;
	const subdivisionIndex = selectedBarSubdivision.value - 1;

	initialHarmonyState.value.chords[barIndex].subdivisionChords[subdivisionIndex] = chord;
};

const onChangeChord = (newChord: string[]) => {
	const chordToAdd = {
		id: getRandomNumberId(),
		chord: newChord[0].split(' - ')[0] as ChordName,
		romanNumber: newChord[0].split(' - ')[1].replace('(', '').replace(')', '') as RomanNumber,
	};

	insertChord(chordToAdd);
};

const onAddExoticChord = () => {
	if (!selectedAtonalChordRoot.value.length || !selectedAtonalChordType.value.length) {
		atonalError.value = true;
		return;
	}

	const isSelectedChordTonal = chordListByKeySignature.value.find(({ value }) =>
		(value as string).includes(
			`${selectedAtonalChordRoot.value[0]}${selectedAtonalChordType.value[0]}`,
		),
	);

	const chordToAdd = {
		id: getRandomNumberId(),
		chord: `${selectedAtonalChordRoot.value[0]}${selectedAtonalChordType.value[0]}` as ChordName,
		romanNumber: isSelectedChordTonal
			? ((isSelectedChordTonal.value as ChordName)
					.split(' - ')[1]
					.replace('(', '')
					.replace(')', '') as RomanNumber)
			: ('atonal' as const),
	};

	insertChord(chordToAdd);

	atonalError.value = false;
};

const splitBar = () => {
	const { subdivisionChords } = initialHarmonyState.value.chords[selectedBarIndex.value - 1];

	const currentStaffHasMoreSubdivisionsThanSelected =
		subdivisionChords.length > Number(selectedBarSplit.value[0]);

	const newArrayLength = currentStaffHasMoreSubdivisionsThanSelected
		? subdivisionChords.length - Number(selectedBarSplit.value[0])
		: Number(selectedBarSplit.value[0]) - subdivisionChords.length;

	const selectedSubdivisionChord = {
		id: getRandomNumberId(),
		chord: subdivisionChords[0].chord,
		romanNumber: subdivisionChords[0].romanNumber,
	};

	const newArrayOfSubdivisions = currentStaffHasMoreSubdivisionsThanSelected
		? subdivisionChords.slice(0, Number(selectedBarSplit.value[0]))
		: subdivisionChords.concat(new Array(newArrayLength).fill(selectedSubdivisionChord));

	initialHarmonyState.value.chords[selectedBarIndex.value - 1] = {
		...initialHarmonyState.value.chords[selectedBarIndex.value - 1],
		subdivisionChords: newArrayOfSubdivisions,
		splits: Number(selectedBarSplit.value[0]),
	};
};

onMounted(() => {
	const firstSubdivisionChordName = initialHarmonyState.value.chords[0].subdivisionChords[0].chord;
	const firstSubdivisionRomanNumber =
		initialHarmonyState.value.chords[0].subdivisionChords[0].romanNumber;

	selectedChord.value = [
		`${firstSubdivisionChordName as ChordName} - (${firstSubdivisionRomanNumber as RomanNumber})`,
	];

	generateMusicSheetStaffs();
});
</script>
