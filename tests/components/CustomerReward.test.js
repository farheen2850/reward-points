import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CustomerReward from "../../src/components/CustomerReward";
import simulateTransactionApiCall from "../../src/api/transaction";
import "@testing-library/jest-dom";

jest.mock("../../src/api/transaction");

describe("Customer Reward Component", () => {
  test("renders loading state", async () => {
    simulateTransactionApiCall.mockResolvedValueOnce([]);

    render(<CustomerReward />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument()
    );
  });

  test("renders error state", async () => {
    simulateTransactionApiCall.mockRejectedValueOnce(
      new Error("Failed to fetch")
    );

    render(<CustomerReward />);

    await screen.findByText(/Error: Failed to fetch/i);
  });

  test("renders customer data correctly", async () => {
    simulateTransactionApiCall.mockResolvedValueOnce([
      {
        customerId: 1,
        customerName: "John Doe",
        phoneNumber: "1234567890",
        transactions: []
      }
    ]);

    render(<CustomerReward />);

    await screen.findByText(/Customer Reward Points/i);

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  });
});
