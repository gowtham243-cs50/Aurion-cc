import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-overview">
        <div className="profile-picture">X</div>
        <h1 className="user-name">donald trump</h1>
        <p className="membership-level">Investor, Project Owner</p>
      </div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/personal-info">Personal Info</Link></li>
        <li><Link to="/account-info">Account Info</Link></li>
        <li><Link to="/security-settings">Security & Settings</Link></li>
        <li><Link to="/activity-market">Activity & Market Engagement</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar; 