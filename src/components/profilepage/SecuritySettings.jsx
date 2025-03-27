import React from 'react';
import './SecuritySettings.css';

const SecuritySettings = () => {
  return (
    <div className="security-settings-card">
      <h2>Security & Settings</h2>
      <div className="info-container">
        <div className="info-column">
          <div className="info-item">
            <span>2FA Authentication:</span>
            <strong>Enabled</strong>
          </div>
          <div className="info-item">
            <span>Password Change / Reset:</span>
            <strong>Available</strong>
          </div>
        </div>
        <div className="info-column">
          <div className="info-item">
            <span>Linked Accounts:</span>
            <strong>UPI, Bank, Other Wallets</strong>
          </div>
          <div className="info-item">
            <span>Consent & Privacy Settings:</span>
            <strong>Data sharing preferences</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings; 