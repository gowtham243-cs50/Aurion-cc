import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/profilepage/Sidebar';
import PersonalInfo from './components/profilepage/PersonalInfo';
import AccountInfo from './components/profilepage/AccountInfo';
import SecuritySettings from './components/profilepage/SecuritySettings';
import ActivityMarket from './components/profilepage/ActivityMarket';
import './App.css';
import CapAndTrade from './CapAndTrade';
import Tokenisation from './Tokenisation';
import ProjectInfo from "./ProjectInfo";
import ProjectDetails from "./ProjectDetails"
const App = () => {
  return (
    
      <div>
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
 
  );
};

export default App;
