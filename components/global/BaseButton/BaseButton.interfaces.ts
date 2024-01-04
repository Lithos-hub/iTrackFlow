import type { ButtonHTMLAttributes } from 'vue';

import { Size, Color, Radius, Variant } from '@/enums';

type ColorType = `${Color}`;
type SizeType = `${Size}`;
type RadiusType = `${Radius}`;
type VariantType = `${Variant}`;

export interface Button extends /* @vue-ignore */ ButtonHTMLAttributes {
	color?: ColorType;
	disabled?: boolean;
	size?: SizeType;
	radius?: RadiusType;
	variant?: VariantType;
	text?: string;
	icon?: string;
	iconLeft?: boolean;
	iconRight?: boolean;
}
