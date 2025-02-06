import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomerSelect from "../../src/components/CustomerSelect";

const mockData = [
  { customerId: 1, customerName: "John Doe", phoneNumber: "1234567890" },
  { customerId: 2, customerName: "Jane Smith", phoneNumber: "0987654321" }
];

test("renders CustomerSelect component", () => {
  render(<CustomerSelect data={mockData} setFilteredData={jest.fn()} />);

  expect(screen.getByText("Customer ID")).toBeInTheDocument();
  expect(screen.getByText("Customer Name")).toBeInTheDocument();
  expect(screen.getByText("Phone Number")).toBeInTheDocument();
});
