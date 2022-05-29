/* eslint-disable testing-library/no-node-access */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */
import * as React from "react";

import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
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
  });

  it("should match Snapshot", () => {
    const { container } = render(<Input name="test" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
