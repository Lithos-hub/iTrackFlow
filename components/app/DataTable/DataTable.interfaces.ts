import { IconName } from '@/components/Base/BaseIcon/BaseIcon.interfaces';
import { ColorType } from '~/components/Base/BaseButton/BaseButton.interfaces';

export interface Actions {
	icon: IconName;
	color: ColorType;
	onClick: (id: number | string) => void;
}
