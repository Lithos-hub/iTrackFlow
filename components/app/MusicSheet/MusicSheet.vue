<template>
	<section class="music-sheet bg-white dark:bg-softdark p-5 shadow-xl relative flex flex-col gap-5">
		<div class="grid grid-cols-2 gap-10 w-full">
			<BaseInput
				v-model.trim="sheetTitle"
				data-testid="sheet__input-title"
				variant="underline"
				:placeholder="$t('app.harmony.sheet_title_placeholder')"
				class="w-1/2" />

			<div class="flex flex-col gap-1 text-right">
				<small>
					<strong>{{ $t('app.harmony.tempo') }}:</strong>
					{{ ' ' }}
					<span data-testid="music-sheet__tempo">{{ data.tempo }} bpm</span>
				</small>
				<small>
					<strong>{{ $t('app.harmony.time_signature') }}:</strong>
					{{ ' ' }}
					<span data-testid="music-sheet__time-signature">{{ data.timeSignature }}</span>
				</small>
			</div>
		</div>

		<div
			class="grid"
			data-testid="music-sheet__grid"
			:style="{
				'grid-template-columns': `repeat(${zoomLevel}, 1fr)`,
			}">
			<AppMusicStaff
				v-for="(chord, index) of data.chords"
				:key="index"
				:index="index + 1"
				data-testid="music-sheet__staff"
				v-bind="chord"
				:key-signature="data.scaleType" />
		</div>
		<!-- Sheet zoom controls -->
		<div class="fixed right-10 bottom-5 rounded bg-softdark default_border">
			<div class="flex flex-col gap-1 p-1">
				<BaseIcon
					icon="download"
					color="white"
					:size="25"
					class="bg-danger p-1 rounded hover:bg-opacity-45 cursor-pointer"
					@click="downloadSheet" />
				<BaseIcon
					icon="zoom-in"
					color="white"
					data-testid="music-sheet__zoom-in"
					:size="25"
					class="bg-white p-1 rounded hover:bg-opacity-45 cursor-pointer"
					@click="zoomIn" />
				<BaseIcon
					icon="zoom-out"
					color="white"
					data-testid="music-sheet__zoom-out"
					:size="25"
					class="bg-white p-1 rounded hover:bg-opacity-45 cursor-pointer"
					@click="zoomOut" />
			</div>
		</div>
		<!-- Output of PDF downloaded file -->
		<div class="absolute top-0 left-0 -z-50">
			<div ref="musicSheetTableRef" class="p-1 flex flex-col">
				<div class="flex gap-1">
					<div class="text-[3px] flex gap-1">
						<strong class="font-bold">Title:</strong>
						<span>
							{{ sheetTitle }}
						</span>
					</div>
					<div class="text-[3px] flex gap-1">
						<strong class="font-bold">Tempo:</strong>
						<span>
							{{ data.tempo }}
						</span>
					</div>
					<div class="text-[3px] flex gap-1">
						<strong class="font-bold">Time signature:</strong>
						<span>
							{{ data.timeSignature }}
						</span>
					</div>
					<div class="text-[3px] flex gap-1">
						<strong class="font-bold">Key signature:</strong>
						<span>{{ data.rootNote }} {{ data.scaleType }}</span>
					</div>
				</div>
				<hr class="my-1" />
				<div class="flex flex-wrap max-w-[300px] mx-auto">
					<div
						v-for="(staff, i) of outputChordsForPDF"
						:key="i"
						class="relative flex flex-col justify-center items-center text-center border w-[40px] h-[35px] text-[5px]">
						<div>
							<strong class="text-gray-500 text-[3px]">{{ i + 1 }}</strong>
						</div>
						<div class="flex flex-row grow items-center justify-center">
							<div
								v-for="{ id, chord, romanNumber } of staff"
								:key="id"
								class="flex flex-row grow gap-5">
								<div class="w-full min-w-[10px] min-h-[10px] flex flex-col items-center relative">
									<div class="flex flex-col justify-between text-center text-[4px] p-[3px]">
										<strong>{{ chord }}</strong>
										<div>{{ romanNumber }}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { jsPDF as JSPDF } from 'jspdf';
import { MusicSheetProps } from './MusicSheet.interfaces';

const { data } = defineProps<MusicSheetProps>();

const sheetTitle = defineModel<string>();

const zoomLevel = ref(8);

const musicSheetTableRef = ref<HTMLDivElement>(null!);

// TODO
const outputChordsForPDF = computed(() =>
	data.chords
		.filter((staff) => staff.subdivisionChords.length)
		.map((staff) => staff.subdivisionChords),
);

const zoomIn = () => {
	if (zoomLevel.value === 12) return;
	zoomLevel.value += 1;
};

const zoomOut = () => {
	if (zoomLevel.value === 3) return;
	zoomLevel.value -= 1;
};

const downloadSheet = () => {
	const doc = new JSPDF({
		orientation: 'landscape',
		unit: 'mm',
		format: 'a4',
	});

	// musicSheetRef HTML to PDF
	doc.html(musicSheetTableRef.value, {
		callback: (doc) => {
			doc.save(`${sheetTitle.value}.pdf`);
		},
	});
};
</script>
