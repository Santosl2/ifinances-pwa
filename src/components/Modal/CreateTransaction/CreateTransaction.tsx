import { useCallback } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";

import { useSelectorModal } from "@/hooks/useSelectorModal";
import { closeModal } from "@/store/modal/ModalReducers";

export function CreateTransactionModal() {
  const modal = useSelectorModal();
  const dispatch = useDispatch();

  const handleCloseModal = useCallback(
    () => dispatch(closeModal({ isOpen: false })),
    []
  );

  return (
    <ReactModal
      isOpen={modal.isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      ffff
    </ReactModal>
  );
}
