/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */
import * as React from "react";

import { render, screen } from "@testing-library/react";

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
});
