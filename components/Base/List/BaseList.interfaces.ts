import { IconName } from '~/interfaces';

interface ListItem {
	text: string;
	value: string | number;
	icon?: string;
	removable?: boolean;
	prependIcon?: IconName;
}

export interface BaseListProps {
	items: ListItem[];
	selectedItem?: string | number;
	onItemClick?: (item: ListItem) => void;
}
