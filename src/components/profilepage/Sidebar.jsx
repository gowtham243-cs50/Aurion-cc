import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebar">
      <div className="user-overview">
        <div className="profile-picture">X</div>
        <h1 className="user-name">Donald Trump</h1>
        <p className="membership-level">Investor</p>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link 
              to="/personal-info" 
              className={isActive('/personal-info') ? 'active' : ''}
            >
              Personal Info
            </Link>
          </li>
          <li>
            <Link 
              to="/account-info" 
              className={isActive('/account-info') ? 'active' : ''}
            >
              Account Info
            </Link>
          </li>
          <li>
            <Link 
              to="/security-settings" 
              className={isActive('/security-settings') ? 'active' : ''}
            >
              Security & Settings
            </Link>
          </li>
          <li>
            <Link 
              to="/activity-market" 
              className={isActive('/activity-market') ? 'active' : ''}
            >
              Activity & Market
            </Link>
          </li>
          <li>
            <Link 
              to="/wallet" 
              className={isActive('/wallet') ? 'active' : ''}
            >
              Wallet
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio" 
              className={isActive('/portfolio') ? 'active' : ''}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 