import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/profilepage/Sidebar';
import PersonalInfo from './components/profilepage/PersonalInfo';
import AccountInfo from './components/profilepage/AccountInfo';
import SecuritySettings from './components/profilepage/SecuritySettings';
import ActivityMarket from './components/profilepage/ActivityMarket';
import './App.css';
import CapAndTrade from './CapAndTrade'
import Tokenisation from './Tokenisation'
import ProjectInfo from "./ProjectInfo";
import ProjectDetails from "./ProjectDetails"
import Dashboard from './Dashboard';
const App = () => {
  const location = useLocation();
  const isDashboardRoute = ['/personal-info', '/account-info', '/security-settings', '/activity-market'].includes(location.pathname);

  return (
    
      <div>
          <Routes>
            <Route path="/capAndTrade" element={<CapAndTrade />} />
            <Route path="/Tokenisation" element={<Tokenisation />} />
            <Route path="/project/:id" element={<ProjectInfo />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/*" element={<Dashboard />} />
          </Routes>
        </div>
 
  );
};

export default App;
