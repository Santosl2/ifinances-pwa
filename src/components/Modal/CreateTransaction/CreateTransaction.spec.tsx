/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable import/no-extraneous-dependencies */

import { useMutationCreateFinance } from "@/hooks/useMutations";
import { renderWithStoreAndClient } from "@/tests/renderWithStoreAndClient";
import { fireEvent, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import { CreateTransactionModal } from "./CreateTransaction";

const initialState = {
  modal: { isOpen: true },
};

const render = () =>
  renderWithStoreAndClient(<CreateTransactionModal />, initialState);

describe("CreateTransactionModal test", () => {
  it("should render create transaction modal", async () => {
    render();

    expect(screen.getByText("Cadastrar transação")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Preço")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Categoria")).toBeInTheDocument();
    expect(screen.getByText("Entrada")).toBeInTheDocument();
    expect(screen.getByText("Saída")).toBeInTheDocument();
  });

  it("should be able to create a transaction", () => {
    render();

    const onSuccessMock = jest.fn();
    const onSettledMock = jest.fn();

    const { result } = renderHook(() => useMutationCreateFinance());
    console.log(result.current);
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

    fireEvent.click(btnSubmit);

    expect(onSuccessMock).toHaveBeenCalledTimes(1);
  });

  it.todo("should not be able to create a transaction when values missing");
});
