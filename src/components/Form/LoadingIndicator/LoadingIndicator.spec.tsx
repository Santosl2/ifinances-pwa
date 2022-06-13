import { render } from "@testing-library/react";

import "jest-styled-components";
import { LoadingIndicator } from "./LoadingIndicator";

describe("Loading Test", () => {
  it("should render Loading", () => {
    const { container } = render(<LoadingIndicator />);

    expect(container.firstChild).toHaveStyle({
      borderRadius: "100%",
      background: "transparent",
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
