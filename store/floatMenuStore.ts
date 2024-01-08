import { FloatMenuOption, FloatMenuTarget } from '@/components/app/FloatMenu/FloatMenu.interfaces';

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
