import mockAxios from "jest-mock-axios";

import { renderWithStoreAndClient } from "@/testsUtils/renderWithStoreAndClient";
import { fireEvent, screen } from "@testing-library/react";

import DashboardPage from "../src/pages/dashboard";

const fakeData = {
  isLoading: true,
  success: true,
  data: [
    {
      id: "123",
      amount: 5000,
      category: "CategorySell",
      createdAt: 1655057800135,
      title: "DashboardTest1",
      type: "outcome",
      userId: "test",
    },
    {
      id: "1234",
      amount: 5000,
      category: "CategoryBuy",
      createdAt: 1655057800135,
      title: "DashboardTest2",
      type: "outcome",
      userId: "test",
    },
  ],
  total: { final: 1000, income: 1000, outcome: 1000 },
};

const useUsersFinances = jest.spyOn(
  require("../src/hooks/useUsersFinances"),
  "useUsersFinances"
);
const useMutationDeleteFinance = jest.spyOn(
  require("../src/hooks/useMutations"),
  "useMutationDeleteFinance"
);

describe("Dashboard Page", () => {
  afterEach(() => {
    mockAxios.reset();
    useUsersFinances.mockClear();
    useMutationDeleteFinance.mockClear();
  });

  it("should render Dashboard Page", () => {
    renderWithStoreAndClient(<DashboardPage />);

    expect(screen.getByTestId("summaryTest")).toBeInTheDocument();
    expect(screen.getByText("Entradas")).toBeInTheDocument();
    expect(screen.getByText("Saídas")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
  });

  it("should be able to appear loading indicator", async () => {
    useUsersFinances.mockImplementation(() => ({
      isLoading: true,
      data: [],
    }));

    renderWithStoreAndClient(<DashboardPage />);

    expect(screen.getByTestId("loadingTest")).toBeInTheDocument();
  });

  it("should be able to list all finances", async () => {
    useUsersFinances.mockImplementation(() => ({
      isLoading: false,
      data: fakeData,
    }));

    renderWithStoreAndClient(<DashboardPage />);

    expect(screen.getByText(fakeData.data[0].title)).toBeInTheDocument();

    expect(screen.getByText(fakeData.data[0].category)).toBeInTheDocument();

    expect(screen.getByText(fakeData.data[1].title)).toBeInTheDocument();
    expect(screen.getByText(fakeData.data[1].category)).toBeInTheDocument();
  });

  it("should be able to render loading", async () => {
    useUsersFinances.mockImplementation(() => ({
      isLoading: false,
      data: fakeData,
    }));

    useMutationDeleteFinance.mockImplementation(() => ({
      isLoading: true,
    }));

    renderWithStoreAndClient(<DashboardPage />);

    expect(screen.getAllByTestId("loadingTestTable")).toBeTruthy();
    expect(screen.getAllByTestId("loadingTestTable")).toHaveLength(
      fakeData.data.length
    );
  });

  it("should be able to delete finance", async () => {
    useUsersFinances.mockImplementation(() => ({
      isLoading: false,
      data: fakeData,
    }));

    const mutateMock = jest.fn(() => ({
      success: true,
    }));

    useMutationDeleteFinance.mockImplementation(() => ({
      isLoading: false,
      mutateAsync: mutateMock,
    }));

    renderWithStoreAndClient(<DashboardPage />);

    const deleteBtn = screen.getAllByTestId("deleteTest");
    fireEvent.click(deleteBtn[0]);

    expect(mutateMock).toHaveBeenCalledWith(fakeData.data[0].id);
  });
});
