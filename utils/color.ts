import { TAILWIND_COLORS } from '@/constants/colors';
import { ColorName, TailwindColors, RGB } from '~/models';

export const getTailwindColor = (color: ColorName, shade?: string | number): string => {
	if (color === 'black') {
		return (TAILWIND_COLORS[color] as string) + '000';
	}
	if (color === 'white') {
		return (TAILWIND_COLORS[color] as string) + 'fff';
	}

	if (color === 'transparent') return 'transparent';

	const colorValue = TAILWIND_COLORS[color] as TailwindColors;
	return colorValue[(shade ? shade.toString() : '500') as keyof typeof colorValue] as string;
};

export const hexToRgb = (hex: string): RGB | null => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
			}
		: null;
};
