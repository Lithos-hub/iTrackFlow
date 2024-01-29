import { UseModal } from './useModal.interfaces';

export const useModal = () => {
	const modal = ref(false);

	const toggleModal = () => {
		modal.value = !modal.value;
		console.log(modal.value);
	};

	const continueAction = (action: () => void) => action();

	const modalProps = ref<UseModal>({} as UseModal);

	return {
		modal,
		toggleModal,
		modalProps,
		continueAction,
	};
};
