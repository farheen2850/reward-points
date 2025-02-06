import simulateTransactionApiCall from '../../src/api/transaction';

describe('simulateTransactionApiCall', () => {
  it('should return transaction data after a delay', async () => {
    const expectedData = [
      {
        customerId: 1,
        customerName: "Alice",
        phoneNumber: "1234567890",
        transactions: [
          { amount: 150, date: "2024-12-12" },
          { amount: 120, date: "2025-01-10" },
          { amount: 80, date: "2025-01-12" },
          { amount: 150, date: "2025-02-15" },
          { amount: 55, date: "2025-02-20" },
        ]
      },
      {
        customerId: 2,
        customerName: "Bob",
        phoneNumber: "2345678901",
        transactions: [
          { amount: 95, date: "2025-01-18" },
          { amount: 220, date: "2025-01-22" },
          { amount: 130, date: "2025-02-02" },
          { amount: 40, date: "2025-02-05" },
        ]
      },
      {
        customerId: 3,
        customerName: "Charlie",
        phoneNumber: "3456789012",
        transactions: [
          { amount: 95, date: "2025-01-10" },
          { amount: 105, date: "2025-02-15" },
        ]
      },
      {
        customerId: 4,
        customerName: "Alice",
        phoneNumber: "4567890123",
        transactions: [
          { amount: 95, date: "2025-01-10" },
          { amount: 105, date: "2025-02-15" },
        ]
      }
    ];

    const data = await simulateTransactionApiCall();
    
    expect(data).toEqual(expectedData);
  });
});
