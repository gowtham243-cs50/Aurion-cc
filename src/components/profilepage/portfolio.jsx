import React from 'react';
import './Portfolio.css'; // CSS for styling
import Navbar from './Navbar';

const Portfolio = () => {
  const investments = [
    { name: "Investment 1", amount: "$5000" },
    { name: "Investment 2", amount: "$3000" },
    { name: "Investment 3", amount: "$7000" }
  ];

  return (
    <div className="portfolio-page">
      <Navbar /> {/* Navbar stays outside to remain full width */}
      <div className="portfolio-container">
        <h2>My Portfolio</h2>
        <p className="portfolio-description">Your portfolio details will be displayed here.</p>

        <h3>Investments</h3>
        <div className="investment-list">
          {investments.map((inv, index) => (
            <div key={index} className="investment-card">
              <span className="investment-name">{inv.name}</span>
              <span className="investment-amount">{inv.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
