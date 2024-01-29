import { FloatMenuOption, FloatMenuTarget } from '@/components/App/FloatMenu/FloatMenu.interfaces';

export const useFloatMenuStore = defineStore('floatMenu', () => {
	const clientX = ref(0);
	const clientY = ref(0);
	const isFloatMenuOpened = ref(false);
	const floatMenuTarget = ref<FloatMenuTarget | null>(null);

	const floatMenuOptions = computed<FloatMenuOption[]>(() => {
		switch (floatMenuTarget.value?.column) {
			case 'composition':
				return [
					{
						label: 'Add comment',
						action: () => alert('Add comment'),
					},
				];
			case 'recording':
				return [
					{
						label: 'Add comment',
						action: () => alert('Add comment'),
					},
				];
			case 'mixing':
				return [
					{
						label: 'Add comment',
						action: () => alert('Add comment'),
					},
				];
			case 'mastering':
				return [
					{
						label: 'Add comment',
						action: () => alert('Add comment'),
					},
				];
			case 'audio':
				return [
					{
						label: 'Add comment',
						action: () => alert('Add comment'),
					},
					{
						label: 'Add audio',
						action: () => alert('Add audio'),
					},
				];
			default:
				return [];
		}
	});

	const setPosition = (x: number, y: number) => {
		clientX.value = x;
		clientY.value = y;
	};

	const toggleFloatMenu = () => {
		isFloatMenuOpened.value = !isFloatMenuOpened.value;
	};

	const setFloatMenuTarget = (target: FloatMenuTarget) => {
		floatMenuTarget.value = target;
	};

	return {
		clientX,
		clientY,
		isFloatMenuOpened,
		floatMenuTarget,
		floatMenuOptions,
		setPosition,
		toggleFloatMenu,
		setFloatMenuTarget,
	};
});
