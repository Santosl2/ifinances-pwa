import { ModalProps } from "@/interfaces/Modal";
import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers";

const initialState: ModalProps = {
  isOpen: false,
};

export const ModalSlice = createSlice({
  name: "@modal",
  initialState,
  reducers,
});

export const { closeModal, openModal } = ModalSlice.actions;

export default ModalSlice.reducer;
