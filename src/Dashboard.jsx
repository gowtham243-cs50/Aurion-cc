import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/profilepage/Sidebar';
import Navbar from './components/tokenisationComponents/Navbar';
import PersonalInfo from './components/profilepage/PersonalInfo';
import AccountInfo from './components/profilepage/AccountInfo';
import SecuritySettings from './components/profilepage/SecuritySettings';
import ActivityMarket from './components/profilepage/ActivityMarket';
import './Dashboard.css'; // Optional: Create a CSS file for additional styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <Sidebar />
      <div className="dashboard-content">
        <Routes>
          <Route path="/personal-info/*" element={<PersonalInfo />} />
          <Route path="/account-info/*" element={<AccountInfo />} />
          <Route path="/security-settings/*" element={<SecuritySettings />} />
          <Route path="/activity-market/*" element={<ActivityMarket />} />
          <Route path="/" element={<PersonalInfo />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
