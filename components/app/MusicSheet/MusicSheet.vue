<template>
	<section
		v-if="data"
		class="relative music-sheet text-black bg-white p-5 shadow relative flex flex-col gap-5">
		<div class="grid grid-cols-2 gap-10 bg-white z-50 w-full">
			<BaseInput
				v-model.trim="sheetTitle"
				color="primary"
				variant="underline"
				:placeholder="$t('app.harmony.sheet_title_placeholder')"
				no-outline
				class="w-1/2" />

			<div class="flex flex-col gap-1 text-black text-right">
				<small>
					<strong>{{ $t('app.harmony.tempo') }}:</strong>
					{{ ' ' }}
					<span>{{ data.tempo }} bpm</span>
				</small>
				<small>
					<strong>{{ $t('app.harmony.time_signature') }}:</strong>
					{{ ' ' }}
					<span>{{ data.timeSignature }}</span>
				</small>
			</div>
		</div>
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
				:key-signature="data.scaleType" />
		</div>
		<!-- Sheet zoom controls -->
		<div class="fixed right-5 bottom-5 rounded">
			<div class="flex flex-col gap-1 p-1">
				<BaseIcon
					icon="download"
					color="white"
					:size="30"
					class="bg-danger p-1 rounded hover:bg-opacity-45 cursor-pointer"
					@click="downloadSheet" />
				<BaseIcon
					icon="zoom-in"
					color="white"
					:size="30"
					class="bg-white p-1 rounded hover:bg-opacity-45 cursor-pointer"
					@click="zoomIn" />
				<BaseIcon
					icon="zoom-out"
					color="white"
					:size="30"
					class="bg-white p-1 rounded hover:bg-opacity-45 cursor-pointer"
					@click="zoomOut" />
			</div>
		</div>
		<!-- Output of PDF downloaded file -->
		<div class="absolute top-0 left-0 max-w-[595px] -z-50">
			<div ref="musicSheetTableRef">
				<div class="flex flex-wrap grow">
					<div
						v-for="(staff, i) of outputChordsForPDF"
						:key="i"
						class="relative flex justify-center items-center gap-5 border text-black w-auto h-[25px] text-[5px]">
						<strong class="absolute top-0 left-1 text-black z-50 text-[3px]">{{ i + 1 }}</strong>
						<div class="flex flex-row grow items-center justify-center">
							<div
								v-for="{ id, chord, romanNumber } of staff"
								:key="id"
								class="flex flex-row grow gap-5">
								<div class="w-full flex flex-col items-center relative">
									<div class="flex flex-col justify-between text-center text-[3px] p-[3px]">
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

const { data, staffs } = defineProps<MusicSheetProps>();

const sheetTitle = defineModel<string>();

const zoomLevel = ref(8);
const musicSheetTableRef = ref<HTMLDivElement>(null!);

// TODO
const outputChordsForPDF = computed(() =>
	staffs.filter((staff) => staff.subdivisionChords.length).map((staff) => staff.subdivisionChords),
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
