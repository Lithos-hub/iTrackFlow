import { ColorName, IconName } from '@/interfaces';

export interface Actions {
	icon: IconName;
	color: ColorName;
	onClick: (id: number | string) => void;
}

interface Head {
	label: string;
	key: string;
}

export interface DataTableProps {
	headers: Head[];
	dataList: Record<string, unknown>[];
	actionsList?: Actions[];
	tableKey?: number;
}
