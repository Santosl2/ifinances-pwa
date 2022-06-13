import { render, screen, waitFor } from "@testing-library/react";

import { Order } from "./Order";
import { OrderIcons } from "./Order.types";

describe("Order Test", () => {
  it("should render Order", async () => {
    render(<Order amount={1000} icon={OrderIcons.income} title="Teste" />);

    expect(screen.getByText("Teste")).toBeInTheDocument();
    expect(screen.getByAltText("Imagem Order")).toBeInTheDocument();
  });

  it("should be able to render Skeleton", async () => {
    render(
      <Order amount={1000} icon={OrderIcons.income} title="Teste" isLoading />
    );

    expect(screen.getByTestId("skeleton-test")).toBeInTheDocument();
  });

  it("should be match snapshot", () => {
    const { container } = render(
      <Order amount={1000} icon={OrderIcons.income} title="Teste" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
