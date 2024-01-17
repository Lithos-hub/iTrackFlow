import { IconName } from '@/components/global/BaseIcon/BaseIcon.interfaces';
import { ColorType } from '~/components/global/BaseButton/BaseButton.interfaces';

export interface Actions {
	icon: IconName;
	color: ColorType;
	onClick: (id: string) => void;
}
