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
import ProjectDetails from "./ProjectDetails";
import Screener from './screener';
import ProfilePage from './profilepage';

// Dashboard wrapper to handle the sidebar logic
const DashboardLayout = ({ children }) => {
  // Sidebar will be rendered for dashboard routes
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    
      <Routes>
        <Route path="/capAndTrade" element={<CapAndTrade />} />
        <Route path="/Tokenisation" element={<Tokenisation />} />
        <Route path="/project/:id" element={<ProjectInfo />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/screener" element={<Screener />} />
        
        {/* Dashboard routes with sidebar */}
        <Route path="/personal-info" element={<DashboardLayout><PersonalInfo /></DashboardLayout>} />
        <Route path="/account-info" element={<DashboardLayout><AccountInfo /></DashboardLayout>} />
        <Route path="/security-settings" element={<DashboardLayout><SecuritySettings /></DashboardLayout>} />
        <Route path="/activity-market" element={<DashboardLayout><ActivityMarket /></DashboardLayout>} />
        <Route path="/profile-page" element={<ProfilePage />} />
      </Routes>
    
  );
};

export default App;
