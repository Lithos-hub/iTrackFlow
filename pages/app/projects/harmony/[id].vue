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
			<div class="flex flex-col gap-5">
				<AppProjectHeader :project-id="projectId" />
			</div>

			<!-- Harmony sheet -->
			<section class="bg-white p-5 shadow">
				<h5 class="font-bold text-dark">Tempo: {{ harmonyData.tempo }}</h5>
				<h5 class="font-bold text-dark">Time Signature: {{ harmonyData.timeSignature }}</h5>
				<h5 class="font-bold text-dark">Key Signature: {{ harmonyData.keySignature }}</h5>
				<div class="py-5 border my-5 grid grid-cols-12">
					<AppMusicStaff
						v-for="(chord, index) in harmonyData.chords"
						:key="index"
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

onMounted(() => getProject());
</script>
