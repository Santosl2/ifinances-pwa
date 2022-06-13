/* eslint-disable react/jsx-props-no-spreading */
import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import * as yup from "yup";

import { Button } from "@/components/Form";
import { useMutationCreateFinance } from "@/hooks/useMutations";
import { useSelectorModal } from "@/hooks/useSelectorModal";
import {
  CreateTransactionModalFormData,
  TransactionTypes,
} from "@/interfaces/Forms";
import { closeModal } from "@/store/modal/ModalReducers";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  ModalForm,
  ModalWrapper,
  RadioBox,
  TransactionTypeContainer,
} from "./CreateTransaction.styles";

ReactModal.setAppElement("body");

const modalSchema = yup.object().shape({
  transactionName: yup.string().required("Campo obrigatório"),
  price: yup
    .number()
    .positive(
      "Coloque um valor válido, acima de 0 e separado por ponto. Ex.: R$50.00"
    )
    .required("Campo obrigatório"),
  category: yup.string().required("Campo obrigatório"),
});

export function CreateTransactionModal() {
  const modal = useSelectorModal();
  const dispatch = useDispatch();
  const [type, setType] = useState<TransactionTypes>("income");

  const createTransaction = useMutationCreateFinance();

  const handleCloseModal = useCallback(() => dispatch(closeModal()), []);

  const { register, handleSubmit, formState, reset } =
    useForm<CreateTransactionModalFormData>({
      resolver: yupResolver(modalSchema),
    });

  const handleTransactionCreate: SubmitHandler<
    CreateTransactionModalFormData
  > = async (data) => {
    const response = await createTransaction.mutateAsync({
      ...data,
      type,
    });

    toast(response.message ?? "Transação cadastrada com sucesso!", {
      type: `${response.success ? "success" : "error"}`,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    reset();
  };

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

        <ModalForm onSubmit={handleSubmit(handleTransactionCreate)}>
          <h2>Cadastrar transação</h2>

          <input placeholder="Nome" {...register("transactionName")} />

          {formState?.errors && formState.errors.transactionName?.message && (
            <span>{formState.errors.transactionName.message}</span>
          )}

          <input placeholder="Preço" {...register("price")} type="number" />

          {formState?.errors && formState.errors.price?.message && (
            <span>{formState.errors.price.message}</span>
          )}

          <input placeholder="Categoria" {...register("category")} />
          {formState?.errors && formState.errors.category?.message && (
            <span>{formState.errors.category.message}</span>
          )}

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => {
                setType("income");
              }}
              isActive={type === "income"}
              activeColor="green"
            >
              <img src="income.svg" alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={() => {
                setType("outcome");
              }}
              isActive={type === "outcome"}
              activeColor="red"
            >
              <img src="outcome.svg" alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <Button bgColor="#33CC95" isLoading={formState.isSubmitting}>
            Cadastrar
          </Button>
        </ModalForm>
      </ModalWrapper>
    </ReactModal>
  );
}
