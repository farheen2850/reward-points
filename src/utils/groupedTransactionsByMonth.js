const groupedTransactionsByMonth = (transactions) => {
  return transactions.reduce((acc, transaction) => {
    const month = new Date(transaction.date).toLocaleString("default", {
      month: "long",
      year: "numeric"
    });
    
    if (!acc[month]) acc[month] = [];
    acc[month].push(transaction);
    
    return acc;
  }, {});
};

export default groupedTransactionsByMonth;
