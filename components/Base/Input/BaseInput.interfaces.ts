import { ColorType } from '../Button/BaseButton.interfaces';
import { ColorName } from '~/models';

type Variant = 'default' | 'underline' | 'bordered' | 'rounded' | 'filled';

export interface Input {
	label?: string;
	icon?: string;
	iconLeft?: boolean;
	modelValue?: string;
	iconRight?: boolean;
	valid?: boolean;
	errorMessage?: string;
	variant?: Variant;
	color?: ColorType | ColorName;
	debounced?: boolean;
	noOutline?: boolean;
}
