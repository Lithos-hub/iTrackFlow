import { UseModal } from './useModal.interfaces';

export const useModal = () => {
	const showModal = ref(false);
	const modalProps = ref<UseModal>({} as UseModal);

	return {
		showModal,
		modalProps,
	};
};
