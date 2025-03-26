import React from 'react';
import './SecuritySettings.css';

const SecuritySettings = () => {
  return (
    <div className="security-settings">
      <h2>Security & Settings</h2>
      <p>2FA Authentication: Enabled</p>
      <p>Password Change / Reset</p>
      <p>Linked Accounts: UPI, Bank, Other Wallets</p>
      <p>Consent & Privacy Settings: Data sharing preferences</p>
    </div>
  );
};

export default SecuritySettings; 