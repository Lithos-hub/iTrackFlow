import { createPinia, setActivePinia } from 'pinia';
import { shallowMount } from '@vue/test-utils';
import { HarmonyData } from '../MusicStaff/MusicStaff.interfaces';
import MusicSheet from './MusicSheet.vue';

const initialHarmonyState: HarmonyData = {
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
			splits: '1',
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
			splits: '3',
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
			splits: '1',
		},
	],
};

const mountWrapper = ({ props = {} }) => {
	return shallowMount(MusicSheet, {
		props,
		global: {
			mocks: {
				$t: () => {},
			},
		},
	});
};
describe('Given MusicSheet.vue component', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});
	describe('When it is rendered', () => {
		it('Then it should render the tempo correctly', () => {
			const wrapper = mountWrapper({
				props: {
					data: initialHarmonyState,
				},
			});
			const tempo = wrapper.find('[data-testid="music-sheet__tempo"]');
			expect(tempo.text()).toBe('120 bpm');
		});

		it('Then it should render the time signature correctly', () => {
			const wrapper = mountWrapper({
				props: {
					data: initialHarmonyState,
				},
			});
			const timeSignature = wrapper.find('[data-testid="music-sheet__time-signature"]');
			expect(timeSignature.text()).toBe('4/4');
		});

		it('Then it should render the staffs correctñy', () => {
			const wrapper = mountWrapper({
				props: {
					data: initialHarmonyState,
				},
			});
			const staffs = wrapper.findAll('[data-testid="music-sheet__staff"]');
			expect(staffs.length).toBe(3);
		});

		it('Then the zoom level should be 8', () => {
			const wrapper = mountWrapper({
				props: {
					data: initialHarmonyState,
				},
			});
			const sheetGrid = wrapper.find('[data-testid="music-sheet__grid"]');
			expect(sheetGrid.attributes('style')).toContain('grid-template-columns: repeat(8, 1fr);');
		});
	});

	describe('When the zoom in button is clicked', () => {
		describe('And the zoom level is 12', () => {
			it('Then it should not increase the zoom level', async () => {
				const wrapper = mountWrapper({
					props: {
						data: initialHarmonyState,
					},
				});
				const zoomInButton = wrapper.find('[data-testid="music-sheet__zoom-in"]');
				await zoomInButton.trigger('click');
				await zoomInButton.trigger('click');
				await zoomInButton.trigger('click');
				await zoomInButton.trigger('click');
				await zoomInButton.trigger('click');
				await zoomInButton.trigger('click');

				const sheetGrid = wrapper.find('[data-testid="music-sheet__grid"]');

				expect(sheetGrid.attributes('style')).toContain('grid-template-columns: repeat(12, 1fr);');
			});
		});
		describe('And the zoom level is 8', () => {
			it('Then it should increase the zoom level', async () => {
				const wrapper = mountWrapper({
					props: {
						data: initialHarmonyState,
					},
				});
				const zoomInButton = wrapper.find('[data-testid="music-sheet__zoom-in"]');
				await zoomInButton.trigger('click');

				const sheetGrid = wrapper.find('[data-testid="music-sheet__grid"]');

				expect(sheetGrid.attributes('style')).toContain('grid-template-columns: repeat(9, 1fr);');
			});
		});
	});

	describe('When the zoom out button is clicked', () => {
		describe('And the zoom level is 4', () => {
			it('Then it should not decrease the zoom level', async () => {
				const wrapper = mountWrapper({
					props: {
						data: initialHarmonyState,
					},
				});
				const zoomOutButton = wrapper.find('[data-testid="music-sheet__zoom-out"]');
				await zoomOutButton.trigger('click');
				await zoomOutButton.trigger('click');
				await zoomOutButton.trigger('click');
				await zoomOutButton.trigger('click');

				const sheetGrid = wrapper.find('[data-testid="music-sheet__grid"]');

				expect(sheetGrid.attributes('style')).toContain('grid-template-columns: repeat(4, 1fr);');
			});
		});

		describe('And the zoom level is 8', () => {
			it('Then it should decrease the zoom level', async () => {
				const wrapper = mountWrapper({
					props: {
						data: initialHarmonyState,
					},
				});
				const zoomOutButton = wrapper.find('[data-testid="music-sheet__zoom-out"]');
				await zoomOutButton.trigger('click');

				const sheetGrid = wrapper.find('[data-testid="music-sheet__grid"]');

				expect(sheetGrid.attributes('style')).toContain('grid-template-columns: repeat(7, 1fr);');
			});
		});
	});
});
