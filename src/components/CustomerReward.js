import React, { useEffect, useState } from "react";
import simulateTransactionApiCall from "../api/transaction";
import RewardDetails from "./RewardDetails";
import CustomerSelect from "./CustomerSelect";
import styles from "../styles/CustomerReward.module.css";

const CustomerReward = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    simulateTransactionApiCall()
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.customerReward}>
      <h1 className={styles.title}>Customer Reward Points</h1>
      <CustomerSelect data={data} setFilteredData={setFilteredData} />

      {loading && <h2 className={styles.loading}>Loading...</h2>}
      {error && <h2 className={styles.error}>Error: {error}</h2>}
      {!loading && filteredData.length === 0 && (
        <h2 className={styles.noData}>
          No customers found or no transactions available.
        </h2>
      )}
      <div className={styles.list}>
        {!loading &&
          filteredData.length > 0 &&
          filteredData.map((customerData) => (
            <RewardDetails
              key={customerData.customerId}
              customerData={customerData}
            />
          ))}
      </div>
    </div>
  );
};

export default CustomerReward;
