/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */
import * as React from "react";

import { render, screen, waitFor } from "@testing-library/react";

import { Order } from "./Order";
import { OrderIcons } from "./Order.types";

describe("Order Test", () => {
  it("should render Order", async () => {
    render(<Order amount={1000} icon={OrderIcons.income} title="Teste" />);

    expect(screen.getByText("Teste")).toBeInTheDocument();
    expect(screen.getByAltText("Imagem Order")).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(screen.getByText(/1,000.00/i)).toBeInTheDocument();
    // });
  });
});
