import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PersonalInfo from './components/PersonalInfo';
import AccountInfo from './components/AccountInfo';
import SecuritySettings from './components/SecuritySettings';
import ActivityMarket from './components/ActivityMarket';
import './App.css';
import CapAndTrade from './CapAndTrade'
import Tokenisation from './Tokenisation'
import ProjectInfo from "./ProjectInfo";
import ProjectDetails from "./ProjectDetails"
const App = () => {
  const location = useLocation();
  const isDashboardRoute = ['/personal-info', '/account-info', '/security-settings', '/activity-market'].includes(location.pathname);

  return (
    <div className="app-container">
      <div className="main-content">
        {isDashboardRoute && <Sidebar />}
        <div className={`content ${isDashboardRoute ? 'with-sidebar' : ''}`}>
          <Routes>
            <Route path="/capAndTrade" element={<CapAndTrade />} />
            <Route path="/Tokenisation" element={<Tokenisation />} />
            <Route path="/project/:id" element={<ProjectInfo />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/account-info" element={<AccountInfo />} />
            <Route path="/security-settings" element={<SecuritySettings />} />
            <Route path="/activity-market" element={<ActivityMarket />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
