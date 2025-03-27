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
import Dashboard from './Dashboard';
import Wallet from './components/profilepage/wallet';
import Portfolio from './components/profilepage/portfolio'; 
import Screener from './screener';
const App = () => {
  return (
    
      <div>
          <Routes>
            <Route path="/capAndTrade" element={<CapAndTrade />} />
            <Route path="/Tokenisation" element={<Tokenisation />} />
            <Route path="/project/:id" element={<ProjectInfo />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/*" element={<Dashboard />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/screener" element={<Screener />} />
          </Routes>
        </div>
 
  );
};

export default App;
