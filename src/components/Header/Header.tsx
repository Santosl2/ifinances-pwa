import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { Button } from "@/components/Form";
import { closeModal } from "@/store/modal/ModalReducers";

import { HeaderContent, HeaderWrapper } from "./Header.styles";

export function Header(): JSX.Element {
  const dispatch = useDispatch();

  const handleOpenModal = useCallback(
    () => dispatch(closeModal({ isOpen: true })),
    []
  );
  return (
    <HeaderWrapper>
      <HeaderContent>
        <img src="/iFinances.svg" alt="iFinances Logo" />
        <Button onClick={handleOpenModal}>Nova transação</Button>
      </HeaderContent>
    </HeaderWrapper>
  );
}
