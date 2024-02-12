export interface FloatMenuOption {
	label: string;
	action: () => void;
}

export interface FloatMenuTarget {
	column: string;
	id: string | number;
}
