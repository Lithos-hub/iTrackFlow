import type { ButtonHTMLAttributes } from 'vue';

import { ColorName } from '~/models';
import { Size, Color, Radius, Variant } from '@/enums';

export type ColorType = `${Color}`;
type SizeType = `${Size}`;
type RadiusType = `${Radius}`;
type VariantType = `${Variant}`;

export interface Button extends /* @vue-ignore */ ButtonHTMLAttributes {
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
}
