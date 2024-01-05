export interface DropdownItem {
	label: string;
	value: string;
}

export interface BaseDropdown {
	label?: string;
	placeholder?: string;
	modelValue: string[];
	bordered?: boolean;
	data: DropdownItem[];
}
