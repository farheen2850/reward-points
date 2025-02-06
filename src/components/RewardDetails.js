import React from "react";
import {
  calculatePoints,
  calculateTotalPoints
} from "./../utils/calculatePoints";
import groupedTransactionsByMonth from "./../utils/groupedTransactionsByMonth";
import styles from "../styles/RewardDetails.module.css";

const RewardDetails = ({ customerData }) => {
  const groupedTransactions = groupedTransactionsByMonth(
    customerData.transactions
  );
  const totalPoints = calculateTotalPoints(customerData.transactions);

  return (
    <div className={styles.rewardDetails}>
      <h2 className={styles.title}>Reward Points</h2>
      <div className={styles.customerInfo}>
        <h3 className={styles.customerName}>
          Customer: {customerData.customerName}
        </h3>
        <h3 className={styles.phoneNumber}>
          Phone: {customerData.phoneNumber}
        </h3>
      </div>
      <div className={styles.transactions}>
        {Object.keys(groupedTransactions).map((month) => {
          const pointsForMonth = groupedTransactions[month].reduce(
            (acc, transaction) => acc + calculatePoints(transaction.amount),
            0
          );
          return (
            <div className={styles.month} key={month}>
              <p className={styles.points}>
                <strong>{month}:</strong> {pointsForMonth} Points
              </p>
            </div>
          );
        })}
      </div>
      <h3 className={styles.totalPoints}>
        Total: {totalPoints} Points
      </h3>
    </div>
  );
};

export default RewardDetails;
