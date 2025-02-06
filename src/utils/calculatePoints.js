const calculatePoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    points += (amount - 100) * 2;
    points += 50;
  } else if (amount > 50) {
    points += amount - 50;
  }
  return points;
};

const calculateTotalPoints = (transactions) => {
    let totalPoints = 0;
    transactions.forEach((transaction) => {
        totalPoints += calculatePoints(transaction.amount)
    });
    return totalPoints;
}

export {calculatePoints, calculateTotalPoints};
