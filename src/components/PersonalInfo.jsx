import React from 'react';
import './PersonalInfo.css';

const PersonalInfo = () => {
  return (
    <div className="personal-info-card">
      <h2>Personal Information</h2>
      <div className="info-container">
        <div className="info-column">
          <div className="info-item">
            <span>Full Name:</span>
            <strong>Donald Trump</strong>
          </div>
          <div className="info-item">
            <span>Email:</span>
            <strong>user@example.com</strong>
          </div>
          <div className="info-item">
            <span>Phone:</span>
            <strong>****1709</strong>
          </div>
        </div>
        <div className="info-column">
          <div className="info-item">
            <span>Date of Birth:</span>
            <strong>01/01/1980</strong>
          </div>
          <div className="info-item">
            <span>Residential Address:</span>
            <strong>123 Main St, City, Country</strong>
          </div>
          <div className="info-item">
            <span>Aadhaar/PAN:</span>
            <strong>****181B</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo; 