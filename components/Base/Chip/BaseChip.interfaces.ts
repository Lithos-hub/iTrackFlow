import { IconName } from '@/interfaces';

type ChipVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark';

export interface ChipProps {
	prependIcon?: IconName | undefined;
	appendIcon?: IconName | undefined;
	content?: string;
	closable?: boolean;
	variant?: ChipVariant;
}
