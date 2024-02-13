import { render } from '@testing-library/vue';
import { createPinia, setActivePinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';
import MusicPlayer from './MusicPlayer.vue';
import { piniaMock } from '~/__mocks__/store/pinia';

vi.mock('@/store/audio', () => ({ useAudioStore: () => piniaMock.initialState.audio }));

const renderWrapper = ({ pinia = piniaMock }) =>
	render(MusicPlayer, {
		global: {
			plugins: [createTestingPinia(pinia)],
			stubs: ['BaseButton'],
			mocks: {
				$t: () => {},
			},
		},
	});
describe('Given MusicPlayer component', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	describe('When it is rendered', () => {
		describe('And the audio is paused', () => {
			test('Then it should render the play button', () => {
				const { getByTestId } = renderWrapper({});
				expect(getByTestId('music-player__play-button')).toBeTruthy();
			});
		});
	});
});
