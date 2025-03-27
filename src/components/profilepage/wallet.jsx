import React from 'react';
import './Wallet.css'; // CSS for styling
import Navbar from './Navbar';

const Wallet = () => {
  const transactions = [
    { type: "Deposit", amount: "$500", date: "01/01/2023" },
    { type: "Withdrawal", amount: "$200", date: "01/15/2023" },
    { type: "Deposit", amount: "$700", date: "02/01/2023" }
  ];

  return (
    <div className="wallet-page">
      <Navbar /> {/* Navbar stays outside the constrained container */}
      <div className="wallet-container">
        <h2>Wallet</h2>
        <p className="wallet-balance">Your wallet balance: <span>$1000</span></p>

        <h3>Transaction History</h3>
        <div className="transaction-list">
          {transactions.map((tx, index) => (
            <div key={index} className={`transaction-card ${tx.type.toLowerCase()}`}>
              <span className="tx-type">{tx.type}</span>
              <span className="tx-amount">{tx.amount}</span>
              <span className="tx-date">{tx.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
