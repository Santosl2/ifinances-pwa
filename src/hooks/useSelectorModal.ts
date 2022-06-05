import { useSelector } from "react-redux";

import { ModalSelector, ModalProps } from "@/interfaces/Modal";

export function useSelectorModal(): ModalProps {
  const modalData = useSelector<ModalSelector>(
    (state) => state.modal
  ) as ModalProps;
  return modalData;
}
