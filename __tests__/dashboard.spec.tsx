/* eslint-disable @typescript-eslint/no-var-requires */
import mockAxios from "jest-mock-axios";

import { renderWithStoreAndClient } from "@/tests/renderWithStoreAndClient";
import { screen } from "@testing-library/react";

import DashboardPage from "../src/pages/dashboard";

const fakeData = {
  isLoading: true,
  success: true,
  data: [
    {
      amount: 5000,
      category: "CategorySell",
      createdAt: 1655057800135,
      title: "DashboardTest1",
      type: "outcome",
      userId: "test",
    },
    {
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

describe("Dashboard Page", () => {
  afterEach(() => {
    mockAxios.reset();
    useUsersFinances.mockClear();
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
});
