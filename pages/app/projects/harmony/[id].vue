<template>
	<section class="h-full w-full bg-white dark:bg-dark">
		<div class="default_margin">
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
				<BaseInput v-model="projectName" label="Project name" color="primary" />
				<BaseInput v-model="projectTempo" label="Tempo" color="primary" />
				<BaseInput v-model="projectTimeSignature" label="Time Signature" color="primary" />
				<BaseInput v-model="projectKeySignature" label="Key Signature" color="primary" />
				<BaseInput
					v-model="numberOfBars"
					debounced
					type="number"
					label="Number of bars"
					color="primary" />
			</div>

			<!-- Harmony sheet -->
			<section class="bg-white p-5 mt-5 shadow">
				<div class="border grid grid-cols-12 mt-5">
					<AppMusicStaff
						v-for="(chord, index) of staffs"
						:key="index"
						:index="index + 1"
						v-bind="chord"
						:key-signature="harmonyData.keySignature" />
				</div>
			</section>
		</div>
	</section>
</template>

<script setup lang="ts">
import { HarmonyData } from '@/components/app/MusicStaff/MusicStaff.interfaces';

const getProject = async () => {
	const { data } = await useFetch('/api/projects', {
		method: 'GET',
	});
	console.log(data);
};

// MOCK
const harmonyData: HarmonyData = {
	id: 1,
	tempo: 120,
	timeSignature: '4/4',
	keySignature: 'Cm',
	chords: [
		{
			id: 1,
			chordName: 'C',
			chordType: 'minor',
			chordFigure: 'i',
		},
		{
			id: 2,
			chordName: 'F',
			chordType: 'major',
			chordFigure: 'IV',
		},
		{
			id: 3,
			chordName: 'G',
			chordType: 'minor',
			chordFigure: 'v',
		},
		{
			id: 4,
			chordName: 'Bb',
			chordType: 'major',
			chordFigure: 'VII',
		},
		{
			id: 5,
			chordName: 'C',
			chordType: 'minor',
			chordFigure: 'i',
		},
	],
};

const numberOfBars = ref(20);

const staffs = computed(() => {
	return [
		...harmonyData.chords,
		...new Array(numberOfBars.value - harmonyData.chords.length).fill({
			id: new Date().getTime(),
			chordName: '',
			chordType: '',
			chordFigure: '',
		}),
	];
});

const projectName = ref('Project name');
const projectTempo = ref(harmonyData.tempo);
const projectKeySignature = ref(harmonyData.keySignature);
const projectTimeSignature = ref(harmonyData.timeSignature);

onMounted(() => getProject());
</script>
