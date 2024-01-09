import type { ColorName } from '@/interfaces';

export type IconName =
	| string
	| 'chevron'
	| 'close'
	| 'heart'
	| 'eye'
	| 'layers'
	| 'layout'
	| 'like'
	| 'bulb'
	| 'check'
	| 'alertTriangle'
	| 'alertHexagon'
	| 'checkmarkCircle'
	| 'informationCircle'
	| 'logout'
	| 'sun'
	| 'moon';

export interface Icon {
	icon: IconName;
	color?: ColorName;
	viewBox?: string;
	size?: number;
}

export type IconsBundle = Record<
	string,
	{
		path: () => string;
		viewport?: string;
	}
>;
