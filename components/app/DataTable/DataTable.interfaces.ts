import { IconName } from '@/interfaces';
import { ColorType } from '@/components/Base/Button/BaseButton.interfaces';

export interface Actions {
	icon: IconName;
	color: ColorType;
	onClick: (id: number | string) => void;
}
