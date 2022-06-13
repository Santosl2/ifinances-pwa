/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable testing-library/no-wait-for-side-effects */

import mockAxios from "jest-mock-axios";

import { renderWithStoreAndClient } from "@/testsUtils/renderWithStoreAndClient";
import { fireEvent, screen, waitFor } from "@testing-library/react";

import RegisterPage from "../src/pages/register";

const push = jest.fn();
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const fakeDataSuccess = {
  name: "teste",
  email: "test@gmail.com",
  password: "123456",
  passwordRepeat: "123456",
};

const fakeDataError = {
  ...fakeDataSuccess,
  password: "1234",
  passwordRepeat: "failedTest",
};

describe("Register Page", () => {
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

  it("should render correctly", () => {
    renderWithStoreAndClient(<RegisterPage />);

    expect(screen.getByText("💸 Registro")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Repetir senha")).toBeInTheDocument();
    expect(screen.getByText("Registrar")).toBeInTheDocument();
    expect(screen.getByText("Voltar")).toBeInTheDocument();
  });

  it("should be redirect to Login Page", () => {
    renderWithStoreAndClient(<RegisterPage />);

    const registerBtn = screen.getByText("Voltar");

    fireEvent.click(registerBtn);

    expect(push).toHaveBeenCalledWith("/");
  });

  it("should be able to appear the Passwords Wrongs error", async () => {
    renderWithStoreAndClient(<RegisterPage />);

    const nameInput = screen.getByPlaceholderText("Nome");
    const emailInput = screen.getByPlaceholderText("E-mail");
    const passwordInput = screen.getByPlaceholderText("Senha");
    const repeatPassInput = screen.getByPlaceholderText("Repetir senha");
    const registerBtn = screen.getByText("Registrar");

    fireEvent.change(nameInput, { target: { value: fakeDataSuccess.name } });
    fireEvent.change(emailInput, { target: { value: fakeDataSuccess.email } });

    fireEvent.change(passwordInput, {
      target: { value: fakeDataSuccess.password },
    });

    fireEvent.change(repeatPassInput, {
      target: { value: fakeDataError.passwordRepeat },
    });

    await waitFor(() => {
      fireEvent.click(registerBtn);
    });

    expect(screen.getByText("Senhas não conferem")).toBeInTheDocument();
  });

  it("should be able to appear the Passwords min. caract. error", async () => {
    renderWithStoreAndClient(<RegisterPage />);

    const nameInput = screen.getByPlaceholderText("Nome");
    const emailInput = screen.getByPlaceholderText("E-mail");
    const passwordInput = screen.getByPlaceholderText("Senha");
    const repeatPassInput = screen.getByPlaceholderText("Repetir senha");
    const registerBtn = screen.getByText("Registrar");

    fireEvent.change(nameInput, { target: { value: fakeDataSuccess.name } });
    fireEvent.change(emailInput, { target: { value: fakeDataSuccess.email } });

    fireEvent.change(passwordInput, {
      target: { value: fakeDataError.password },
    });

    fireEvent.change(repeatPassInput, {
      target: { value: fakeDataError.password },
    });

    await waitFor(() => {
      fireEvent.click(registerBtn);
    });

    expect(screen.getByText("No mínimo 6 caracteres")).toBeInTheDocument();
  });

  it("should be able to Register", async () => {
    renderWithStoreAndClient(<RegisterPage />);

    mockAxios.post.mockResolvedValue({
      data: fakeDataSuccess,
    });

    const nameInput = screen.getByPlaceholderText("Nome");
    const emailInput = screen.getByPlaceholderText("E-mail");
    const passwordInput = screen.getByPlaceholderText("Senha");
    const repeatPassInput = screen.getByPlaceholderText("Repetir senha");
    const registerBtn = screen.getByText("Registrar");

    fireEvent.change(nameInput, { target: { value: fakeDataSuccess.name } });
    fireEvent.change(emailInput, { target: { value: fakeDataSuccess.email } });

    fireEvent.change(passwordInput, {
      target: { value: fakeDataSuccess.password },
    });

    fireEvent.change(repeatPassInput, {
      target: { value: fakeDataSuccess.passwordRepeat },
    });

    await waitFor(() => {
      fireEvent.click(registerBtn);
    });

    expect(mockAxios.post).toHaveBeenCalledWith("/users/create", {
      user: {
        email: fakeDataSuccess.email,
        name: fakeDataSuccess.name,
        password: fakeDataSuccess.password,
        password_confirmation: fakeDataSuccess.passwordRepeat,
      },
    });
    expect(screen.getByText("Seja bem-vindo(a)")).toBeInTheDocument();
  });
});
