import type { ColorName } from '@/interfaces';

export type IconName =
	| string
	| 'add'
	| 'check'
	| 'chevron-rounded-left'
	| 'chevron'
	| 'close'
	| 'eye'
	| 'heart'
	| 'logout'
	| 'moon'
	| 'pause'
	| 'pencil'
	| 'like'
	| 'play'
	| 'save'
	| 'stop'
	| 'trash'
	| 'sun'
	| 'uncheck'
	| 'zoom-in'
	| 'zoom-out';

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
