import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PersonalInfo from './components/PersonalInfo';
import AccountInfo from './components/AccountInfo';
import SecuritySettings from './components/SecuritySettings';
import ActivityMarket from './components/ActivityMarket';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/account-info" element={<AccountInfo />} />
            <Route path="/security-settings" element={<SecuritySettings />} />
            <Route path="/activity-market" element={<ActivityMarket />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
