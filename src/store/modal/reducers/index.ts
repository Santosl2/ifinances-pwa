import { ModalProps } from "@/interfaces/Modal";
import { PayloadAction } from "@reduxjs/toolkit";

export const reducers = {
  closeModal: (state: any, { payload }: PayloadAction<ModalProps>) => {
    return {
      ...state,
      ...payload,
    };
  },
};
