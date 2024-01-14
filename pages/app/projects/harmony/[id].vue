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

			<div class="flex justify-between items-start gap-5">
				<AppProjectHeader :project-id="projectId" />
				<div class="flex gap-5">
					<BaseInput v-model="projectTempo" label="Tempo" color="primary" />
					<BaseInput v-model="projectTimeSignature" label="Time Signature" color="primary" />
					<BaseInput v-model="projectKeySignature" label="Key Signature" color="primary" />
				</div>
			</div>

			<!-- Harmony sheet -->
			<section class="bg-white p-5 mt-5 shadow">
				<div class="border grid grid-cols-12 mt-5">
					<AppMusicStaff
						v-for="(chord, index) in harmonyData.chords"
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

const projectId = ref(1);

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

const projectTempo = ref(harmonyData.tempo);
const projectKeySignature = ref(harmonyData.keySignature);
const projectTimeSignature = ref(harmonyData.timeSignature);

onMounted(() => getProject());
</script>
