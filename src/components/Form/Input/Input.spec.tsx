import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import { Input } from "./Input";

describe("Input Test", () => {
  it("should render Input", () => {
    render(<Input name="test" placeholder="Test" />);

    expect(screen.getByPlaceholderText("Test")).toBeInTheDocument();
  });

  it("should render Input", () => {
    render(<Input name="test" />);

    expect(screen.queryByPlaceholderText("Test")).not.toBeInTheDocument();
  });

  it("must have a border bottom when focusing ", async () => {
    render(<Input name="test" placeholder="Test" />);

    const input = screen.getByPlaceholderText("Test");

    input.focus();

    expect(input).toHaveFocus();
    expect(input.style).toHaveProperty("border");
  });

  it("should match Snapshot", () => {
    const { container } = render(<Input name="test" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
