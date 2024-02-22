import type { ButtonHTMLAttributes } from 'vue';

import { ColorName } from '@/interfaces';
import { Size, Color, Radius, Variant } from '@/enums';

export type ColorType = `${Color}`;
export type SizeType = `${Size}`;
export type RadiusType = `${Radius}`;
export type VariantType = `${Variant}`;

export interface BaseButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
	color?: ColorType | ColorName;
	disabled?: boolean;
	size?: SizeType;
	radius?: RadiusType;
	variant?: VariantType;
	text?: string;
	icon?: string;
	iconLeft?: boolean;
	iconRight?: boolean;
	iconColor?: ColorName;
	flat?: boolean;
	loading?: boolean;
	success?: boolean;
	successText?: string;
}
