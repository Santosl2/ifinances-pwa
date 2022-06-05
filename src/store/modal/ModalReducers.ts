import { ModalProps } from "@/interfaces/Modal";
import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers";

const initialState: ModalProps = {
  isOpen: true,
};

export const ModalSlice = createSlice({
  name: "@modal",
  initialState,
  reducers,
});

export const { closeModal } = ModalSlice.actions;

export default ModalSlice.reducer;
