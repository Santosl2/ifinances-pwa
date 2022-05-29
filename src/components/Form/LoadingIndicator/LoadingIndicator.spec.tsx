/* eslint-disable testing-library/no-node-access */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unused-imports/no-unused-imports */
import * as React from "react";

import { render, screen } from "@testing-library/react";

import { LoadingIndicator } from "./LoadingIndicator";

describe("Loading Test", () => {
  it("should render Loading", () => {
    const { container } = render(<LoadingIndicator />);

    expect(container.firstChild).toHaveStyle({
      borderRadius: "1rem",
      background: "transparent",
    });
  });
});
