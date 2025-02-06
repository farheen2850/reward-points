import {
  calculatePoints,
  calculateTotalPoints
} from "../../src/utils/calculatePoints";

describe("calculatePoints", () => {
  test("returns 0 points for value less than 50", () => {
    expect(calculatePoints(50)).toBe(0);
    expect(calculatePoints(30)).toBe(0);
  });

  test("return correct points for value between 51 and 100", () => {
    expect(calculatePoints(60)).toBe(10);
    expect(calculatePoints(80)).toBe(30);
  });

  test("return correct points for values over 100", () => {
    expect(calculatePoints(120)).toBe(90);
    expect(calculatePoints(150)).toBe(150);
  });
});

describe("calculateTotalPoints", () => {
  test("return 0 points for an empty transaction list", () => {
    expect(calculateTotalPoints([])).toBe(0);
  });

  test("return correct total points for multiple transactions", () => {
    const transactions = [
      { amount: 30 },
      { amount: 60 },
      { amount: 120 },
      { amount: 150 }
    ];
    expect(calculateTotalPoints(transactions)).toBe(250);
  });
});


describe("calculatePoints for negative values", () => {
    test("should return 0 points for invalid amounts (negative values)", () => {
      expect(calculatePoints(-20)).toBe(0);
      expect(calculatePoints(-100)).toBe(0);
    });
  
    test("should return 0 points for non-numeric input", () => {
      expect(calculatePoints("abc")).toBe(0);
      expect(calculatePoints(null)).toBe(0);
      expect(calculatePoints(undefined)).toBe(0);
    });
  });
  
