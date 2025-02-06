import groupedTransactionsByMonth from "../../src/utils/groupedTransactionsByMonth";

describe("groupedTransactionsByMonth for valid values", () => {
  test("should group transactions by month and year", () => {
    const transactions = [
      { amount: 50, date: "2024-01-15" },
      { amount: 100, date: "2024-01-20" },
      { amount: 200, date: "2024-02-10" }
    ];

    const result = groupedTransactionsByMonth(transactions);

    expect(Object.keys(result)).toContain("January 2024");
    expect(Object.keys(result)).toContain("February 2024");
    expect(result["January 2024"].length).toBe(2);
    expect(result["February 2024"].length).toBe(1);
  });

  test("return an empty object for an empty array", () => {
    expect(groupedTransactionsByMonth([])).toEqual({});
  });
});

describe("groupedTransactionsByMonth for invalid values", () => {

  test("ignore transactions with invalid date format", () => {
    const transactions = [
      { amount: 50, date: "2024-01-15" },
      { amount: 100, date: "invalid-date" }, 
      { amount: 200, date: "2024-02-10" }
    ];

    const result = groupedTransactionsByMonth(transactions);
    
    expect(Object.keys(result)).toContain("January 2024");
    expect(Object.keys(result)).toContain("February 2024");
    expect(result["January 2024"].length).toBe(1);
    expect(result["February 2024"].length).toBe(1);
  });
});
