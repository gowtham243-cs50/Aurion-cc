import React from 'react';
import './ActivityMarket.css';

const ActivityMarket = () => {
  return (
    <div className="activity-market-card">
      <h2>Activity & Market Engagement</h2>
      <div className="info-container">
        <div className="info-column">
          <div className="info-item">
            <span>Current Investments & ROI:</span>
            <strong>Performance of purchased credits</strong>
          </div>
          <div className="info-item">
            <span>Listed Projects:</span>
            <strong>If the user is a project owner</strong>
          </div>
        </div>
        <div className="info-column">
          <div className="info-item">
            <span>Marketplace Access:</span>
            <strong>Quick Buy/Sell Button for Carbon Credits</strong>
          </div>
          <div className="info-item">
            <span>Leaderboard or Achievements:</span>
            <strong>If applicable, for engagement metrics</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityMarket; 