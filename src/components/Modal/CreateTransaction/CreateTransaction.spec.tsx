/* eslint-disable testing-library/no-wait-for-side-effects */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable import/no-extraneous-dependencies */

import mockAxios from "jest-mock-axios";

import { renderWithStoreAndClient } from "@/testsUtils/renderWithStoreAndClient";
import { fireEvent, screen, waitFor } from "@testing-library/react";

import { CreateTransactionModal } from "./CreateTransaction";

const initialState = {
  modal: { isOpen: true },
};

const render = () =>
  renderWithStoreAndClient(<CreateTransactionModal />, initialState);

describe("CreateTransactionModal test", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should render create transaction modal", async () => {
    render();

    expect(screen.getByText("Cadastrar transação")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Preço")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Categoria")).toBeInTheDocument();
    expect(screen.getByText("Entrada")).toBeInTheDocument();
    expect(screen.getByText("Saída")).toBeInTheDocument();
  });

  it("should be able to create a transaction", async () => {
    render();

    mockAxios.post.mockResolvedValue({
      data: { success: true, message: "" },
    });

    const transactionInput = screen.getByPlaceholderText(
      "Nome"
    ) as HTMLInputElement;

    const priceInput = screen.getByPlaceholderText("Preço") as HTMLInputElement;

    const categoryInput = screen.getByPlaceholderText(
      "Categoria"
    ) as HTMLInputElement;

    const btnSubmit = screen.getByText("Cadastrar");

    fireEvent.change(transactionInput, { target: { value: "Test" } });
    fireEvent.change(priceInput, { target: { value: 1000 } });
    fireEvent.change(categoryInput, { target: { value: "Test" } });

    await waitFor(() => {
      fireEvent.click(btnSubmit);
    });

    expect(mockAxios.post).toHaveBeenCalledWith("/finances", {
      data: {
        category: "Test",
        price: 1000,
        transactionName: "Test",
        type: "income",
      },
    });
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  });

  it("should not be able to create a transaction when values missing", async () => {
    render();

    mockAxios.post.mockResolvedValue({
      data: { success: true, message: "" },
    });

    await waitFor(() => {
      fireEvent.click(screen.getByText("Cadastrar"));
    });

    expect(mockAxios.post).not.toHaveBeenCalledTimes(1);
  });
});
