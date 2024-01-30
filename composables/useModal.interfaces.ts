import { ModalType } from '@/interfaces';

export interface UseModal {
	title: string;
	message: string;
	type: ModalType;
}

export type ModalAction = 'continue' | 'accept';
