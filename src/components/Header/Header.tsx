import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { Button } from "@/components/Form";
import { openModal } from "@/store/modal/ModalReducers";

import { HeaderContent, HeaderWrapper } from "./Header.styles";

const headerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};
export function Header(): JSX.Element {
  const dispatch = useDispatch();

  const handleOpenModal = useCallback(() => dispatch(openModal()), []);
  return (
    <HeaderWrapper>
      <HeaderContent
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        transition={{ duration: 0.7 }}
      >
        <img src="/iFinances.svg" alt="iFinances Logo" />
        <Button onClick={handleOpenModal}>Nova transação</Button>
      </HeaderContent>
    </HeaderWrapper>
  );
}
