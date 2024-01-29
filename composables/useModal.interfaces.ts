import { ModalType } from '~/models';

export interface UseModal {
	title: string;
	message: string;
	type: ModalType;
}

export type ModalAction = 'continue' | 'accept';
