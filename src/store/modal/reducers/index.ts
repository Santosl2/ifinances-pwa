export const reducers = {
  closeModal: (state: any) => {
    return {
      ...state,
      isOpen: false,
    };
  },
  openModal: (state: any) => {
    return {
      ...state,
      isOpen: true,
    };
  },
};
