interface ListItem {
	text: string;
	value: string | number;
	icon?: string;
	removable?: boolean;
}

export interface BaseListProps {
	items: ListItem[];
	selectedItem?: string | number;
	onItemClick?: (item: ListItem) => void;
}
