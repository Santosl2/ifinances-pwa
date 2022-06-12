/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable testing-library/no-wait-for-side-effects */
import mockAxios from "jest-mock-axios";

import { renderWithStoreAndClient } from "@/tests/renderWithStoreAndClient";
import { fireEvent, screen, waitFor } from "@testing-library/react";

import IndexPage from "../index";

const fakeData = {
  success: true,
  accessToken: "fakeAccessToken",
  refreshToken: "fakeRefreshToken",
  user: {
    id: "fakeId",
    name: "teste",
    email: "test@gmail.com",
    password: "123456",
  },
};

const push = jest.fn();
const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Index Page", () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      push,
      pathname: "/",
      route: "/",
      asPath: "/",
      query: "",
    }));
  });

  afterEach(() => {
    mockAxios.reset();
    useRouter.mockClear();
  });

  it("should render Index Page", () => {
    renderWithStoreAndClient(<IndexPage />);

    expect(screen.getByText("💸 iFinances")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
    expect(screen.getByText("Registre-se")).toBeInTheDocument();
  });

  it("should not be able to login", async () => {
    renderWithStoreAndClient(<IndexPage />);

    mockAxios.post.mockResolvedValueOnce({
      data: {
        ...fakeData,
        success: false,
        message: "E-mail ou senha inválidos.",
      },
    });

    const emailInput = screen.getByPlaceholderText("E-mail");
    const passwordInput = screen.getByPlaceholderText("Senha");
    const submitBtn = screen.getByText("Entrar");

    fireEvent.change(emailInput, { target: { value: fakeData.user.email } });
    fireEvent.change(passwordInput, {
      target: { value: fakeData.user.password },
    });

    await waitFor(() => {
      fireEvent.click(submitBtn);
    });

    expect(mockAxios.post).toHaveBeenCalledWith("/users/login", {
      user: { email: fakeData.user.email, password: fakeData.user.password },
    });

    expect(push).not.toHaveBeenCalledWith("/dashboard");

    await waitFor(() => {
      expect(
        screen.getByText("E-mail ou senha inválidos.")
      ).toBeInTheDocument();
    });
  });

  it("should be able to login", async () => {
    renderWithStoreAndClient(<IndexPage />);

    mockAxios.post.mockResolvedValueOnce({
      data: fakeData,
    });

    const emailInput = screen.getByPlaceholderText("E-mail");
    const passwordInput = screen.getByPlaceholderText("Senha");
    const submitBtn = screen.getByText("Entrar");

    fireEvent.change(emailInput, { target: { value: fakeData.user.email } });
    fireEvent.change(passwordInput, {
      target: { value: fakeData.user.password },
    });

    await waitFor(() => {
      fireEvent.click(submitBtn);
    });

    expect(mockAxios.post).toHaveBeenCalledWith("/users/login", {
      user: { email: fakeData.user.email, password: fakeData.user.password },
    });

    expect(screen.getByText("Seja bem-vindo(a)")).toBeInTheDocument();

    expect(push).toHaveBeenCalledWith("/dashboard");
  });
});
