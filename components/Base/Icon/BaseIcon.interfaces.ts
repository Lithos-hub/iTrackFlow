import type { ColorName, IconName } from '@/interfaces';

export interface IconProps {
	icon: IconName;
	color?: ColorName;
	viewBox?: string;
	size?: number;
	clickable?: boolean;
}

export type IconsBundle = Record<
	string,
	{
		path: () => string;
		viewport?: string;
	}
>;
