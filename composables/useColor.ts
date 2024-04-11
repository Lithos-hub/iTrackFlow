import { ColorVariants } from './useColor.interfaces';
import { ColorName } from '~/interfaces';
import { useScreenStore } from '@/store/screen';

export const useColor = () => {
	const { lightMode } = storeToRefs(useScreenStore());

	const colors: ColorVariants = {
		primary: 'blue',
		secondary: 'pink',
		tertiary: 'orange',
		success: 'green',
		info: 'blue',
		warning: 'orange',
		danger: 'red',
		none: 'transparent',
		dark: '#00000050',
		light: '#ffffff50',
	};

	const getColor = (variant: string) => {
		return colors[variant] || lightMode.value ? '#00000050' : '#ffffff50';
	};
	const getTWColor = (variant: string) => {
		const color = getColor(variant);

		if (color.charAt(0) === '#') {
			return color;
		} else {
			return getTailwindColor(color as ColorName);
		}
	};
	return {
		getColor,
		getTWColor,
	};
};
