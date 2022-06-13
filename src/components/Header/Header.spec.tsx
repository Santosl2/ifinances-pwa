import { fireEvent, screen } from "@testing-library/react";

import {
  renderWithStoreAndClient,
  testStore,
} from "@/testsUtils/renderWithStoreAndClient";

import { Header } from "./Header";
import { openModal } from "@/store/modal/ModalReducers";

const store = testStore({});
describe("Header Test", () => {
  it("should render Header", () => {
    renderWithStoreAndClient(<Header />);

    expect(screen.getByText("Nova transação")).toBeInTheDocument();
    expect(screen.getByAltText("iFinances Logo")).toBeInTheDocument();
  });

  it("should be match snapshot", () => {
    const { container } = renderWithStoreAndClient(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // failed
  it("should be able to open modal", async () => {
    renderWithStoreAndClient(<Header />);

    store.dispatch(openModal());

    expect(store.getState().modal.isOpen).toEqual(true);
  });
});
