import React from 'react';
import './Portfolio.css'; // CSS for styling
import Navbar from './Navbar';

const Portfolio = () => {
  const investments = [
    { name: "Green-Energy", amount: "$5,000", date: "01/05/2023" },
    { name: "Info-Tech", amount: "$3,000", date: "02/10/2023" },
    { name: "Sustainable", amount: "$7,000", date: "03/15/2023" },
  ];

  return (
    <div className="portfolio-page">
      <Navbar /> {/* Navbar remains full-width */}
      <div className="portfolio-container">
        <h2>My Portfolio</h2>
        <p className="portfolio-description">Track your investments in real-time.</p>

        <h3>Investments</h3>
        <div className="investment-list">
          {investments.map((inv, index) => (
            <div key={index} className="investment-card">
              <div className="investment-info">
                <span className="investment-name">{inv.name}</span>
                <span className="investment-date">{inv.date}</span>
              </div>
              <span className="investment-amount">{inv.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
