export interface FloatMenuOption {
	label: string;
	action: () => void;
}

export interface FloatMenu {
	clientX: number;
	clientY: number;
}

export interface FloatMenuTarget {
	column: string;
	id: string | number;
}
