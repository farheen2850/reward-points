import React, { useState, useEffect } from "react";
import styles from "../styles/CustomerSelect.module.css";

const CustomerSelect = React.memo(({ data, setFilteredData }) => {
  const [selectedCustomerName, setSelectedCustomerName] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [selectedCustomerId, setSelectedCustomerId] = useState("");

  const handleCustomerNameChange = (e) => {
    setSelectedCustomerName(e.target.value);
  };

  const handlePhoneInputChange = (e) => {
    setPhoneInput(e.target.value);
  };

  const handleCustomerIdChange = (e) => {
    setSelectedCustomerId(e.target.value);
  };

  useEffect(() => {
    let filteredData = data;

    if (selectedCustomerName || phoneInput || selectedCustomerId) {
      if (selectedCustomerName) {
        filteredData = filteredData.filter((item) =>
          item.customerName
            .toLowerCase()
            .includes(selectedCustomerName.toLowerCase())
        );
      }

      if (phoneInput) {
        filteredData = filteredData.filter((item) =>
          item.phoneNumber.includes(phoneInput)
        );
      }

      if (selectedCustomerId) {
        filteredData = filteredData.filter(
          (item) => item.customerId === parseInt(selectedCustomerId)
        );
      }
    } else {
      filteredData = [];
    }

    setFilteredData(filteredData);
  }, [
    selectedCustomerName,
    phoneInput,
    selectedCustomerId,
    data,
    setFilteredData
  ]);

  return (
    <div className={styles.customerSelect}>
      <label>Customer ID</label>
      <select
        value={selectedCustomerId}
        onChange={handleCustomerIdChange}
        className={styles.select}
      >
        <option value="">Select a customer ID</option>
        {data.map((item) => (
          <option key={item.customerId} value={item.customerId}>
            {item.customerId}
          </option>
        ))}
      </select>

      <label>Customer Name</label>
      <select
        value={selectedCustomerName}
        onChange={handleCustomerNameChange}
        className={styles.select}
      >
        <option value="">Select a customer</option>
        {[...new Set(data.map((item) => item.customerName))].map(
          (customerName) => (
            <option key={customerName} value={customerName}>
              {customerName}
            </option>
          )
        )}
      </select>

      <label>Phone Number</label>
      <input
        type="text"
        value={phoneInput}
        onChange={handlePhoneInputChange}
        className={styles.input}
        placeholder="Enter phone number"
      />
    </div>
  );
});

export default CustomerSelect;
