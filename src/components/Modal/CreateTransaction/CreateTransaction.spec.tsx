/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable import/no-extraneous-dependencies */

import { renderWithStore } from "@/tests/readerWithStore";
import { screen } from "@testing-library/react";

import { CreateTransactionModal } from "./CreateTransaction";

describe("CreateTransactionModal test", () => {
  it("should render create transaction table", async () => {
    renderWithStore(<CreateTransactionModal />, { modal: { isOpen: true } });

    expect(screen.getByText("Cadastrar transação")).toBeInTheDocument();
  });
});
