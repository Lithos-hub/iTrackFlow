import { ColorName, IconName, ModalType } from '@/interfaces';

export interface BaseModalAlertProps {
	title: string;
	message: string;
	type: ModalType;
}

export type IconAndColor = {
	icon: IconName;
	color: ColorName;
};
