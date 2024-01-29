import { ModalType } from '~/models';

export interface UseModal {
	title: string;
	message: string;
	type: ModalType;
}
