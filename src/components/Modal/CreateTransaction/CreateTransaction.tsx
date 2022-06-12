import { useCallback, useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";

import { Button } from "@/components/Form";
import { useSelectorModal } from "@/hooks/useSelectorModal";
import { closeModal } from "@/store/modal/ModalReducers";

import {
  ModalForm,
  ModalWrapper,
  RadioBox,
  TransactionTypeContainer,
} from "./CreateTransaction.styles";

ReactModal.setAppElement("body");

export function CreateTransactionModal() {
  const modal = useSelectorModal();
  const dispatch = useDispatch();
  const [type, setType] = useState("deposit");

  const handleCloseModal = useCallback(() => dispatch(closeModal()), []);

  return (
    <ReactModal
      isOpen={modal.isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ModalWrapper>
        <button
          className="react-modal-close"
          type="button"
          onClick={handleCloseModal}
        >
          <img src="close.svg" alt="Fechar modal" />
        </button>

        <ModalForm>
          <h2>Cadastrar transação</h2>

          <input placeholder="Nome" />
          <input placeholder="Preço" />
          <input placeholder="Categoria" />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => {
                setType("deposit");
              }}
              isActive={type === "deposit"}
              activeColor="green"
            >
              <img src="income.svg" alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={() => {
                setType("withdraw");
              }}
              isActive={type === "withdraw"}
              activeColor="red"
            >
              <img src="outcome.svg" alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <Button bgColor="#33CC95">Cadastrar</Button>
        </ModalForm>
      </ModalWrapper>
    </ReactModal>
  );
}
