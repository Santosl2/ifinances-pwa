import { useCallback } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";

import { useSelectorModal } from "@/hooks/useSelectorModal";
import { closeModal } from "@/store/modal/ModalReducers";

ReactModal.setAppElement("body");

export function CreateTransactionModal() {
  const modal = useSelectorModal();
  const dispatch = useDispatch();

  const handleCloseModal = useCallback(() => dispatch(closeModal()), []);

  return (
    <ReactModal
      isOpen={modal.isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h4>Cadastrar transação</h4>
    </ReactModal>
  );
}
