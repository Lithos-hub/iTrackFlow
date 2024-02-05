import { ColorType } from '../Button/BaseButton.interfaces';
import { ColorName } from '@/interfaces';

export interface DropdownItem {
	label: string;
	value: string;
}

export interface BaseDropdown {
	label?: string;
	placeholder?: string;
	bordered?: boolean;
	data: DropdownItem[];
	multiselect?: boolean;
	color?: ColorType | ColorName;
	noCleanable?: boolean;
}
