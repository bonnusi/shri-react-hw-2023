import { ModalContext } from 'contexts/modals.context';
import { useContext } from 'react';

export const useModals = () => {
    const { state, showModal, hideModal } = useContext(ModalContext);
    return { state, showModal, hideModal };
  };
  