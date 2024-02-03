import { ColorName, IconName } from '@/interfaces';

export interface Actions {
	icon: IconName;
	color: ColorName;
	onClick: (id: number | string) => void;
}
