import React from 'react';
import './AccountInfo.css';

const AccountInfo = () => {
  return (
    <div className="account-info-card">
      <h2>Account Information</h2>
      <div className="info-container">
        <div className="info-column">
          <div className="info-item">
            <span>Digital Wallet Balance:</span>
            <strong>₹10,000</strong>
          </div>
          <div className="info-item">
            <span>Bank Account:</span>
            <strong>****0001 CATHOLIC SYRIAN BANK LTD</strong>
          </div>
        </div>
        <div className="info-column">
          <div className="info-item">
            <span>Investment Portfolio:</span>
            <strong>List of Owned Tokens & Values</strong>
          </div>
          <div className="info-item">
            <span>Recent Transactions:</span>
            <strong>Deposit, Purchase, Withdrawal History</strong>
          </div>
          <div className="info-item">
            <span>Tax Compliance:</span>
            <strong>GST / PAN Linkage if required</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo; 