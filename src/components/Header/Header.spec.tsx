import * as React from "react";

import { renderWithStoreAndClient } from "@/testsUtils/renderWithStoreAndClient";
import { screen } from "@testing-library/react";

import { Header } from "./Header";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

describe("Header Test", () => {
  beforeEach(() => {
    // useDispatchMock.mockImplementation(() => () => {});
  });

  // afterEach(() => {
  //   useDispatchMock.mockClear();
  // });

  it("should render Header", () => {
    renderWithStoreAndClient(<Header />);

    expect(screen.getByText("Nova transação")).toBeInTheDocument();
    expect(screen.getByAltText("iFinances Logo")).toBeInTheDocument();
  });

  it("should be match snapshot", () => {
    const { container } = renderWithStoreAndClient(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it.todo("should be open modal");
  // renderWithStore(<Header />);
  // const useDispatchSpy = jest.spyOn(redux, "useDispatch");
  // const mockDispatchFn = jest.fn();
  // useDispatchSpy.mockReturnValue(mockDispatchFn);
  // const btnClick = screen.getByText("Nova transação");
  // fireEvent(btnClick, new MouseEvent("click", { bubbles: true }));
  // expect(mockDispatchFn).toHaveBeenCalled();
});
