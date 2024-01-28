import { ColorType } from '../BaseButton/BaseButton.interfaces';
import { ColorName } from '~/interfaces';

export interface DropdownItem {
	label: string;
	value: unknown;
}

export interface BaseDropdown {
	label?: string;
	placeholder?: string;
	modelValue: string[];
	bordered?: boolean;
	data: DropdownItem[];
	multiselect?: boolean;
	color?: ColorType | ColorName;
	noCleanable?: boolean;
}
