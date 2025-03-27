import React from 'react';
import PersonalInfo from './components/profilepage/PersonalInfo';
import ActivityMarket from './components/profilepage/ActivityMarket';
import SecuritySettings from './components/profilepage/SecuritySettings';

const ProfilePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap -mx-4">
        {/* Main Content */}
        <div className="w-full lg:w-2/3 px-4 mb-8">
          <div className="mb-8">
            <PersonalInfo />
          </div>
          <div>
            <ActivityMarket />
          </div>
        </div>
        
        {/* Sidebar Column */}
        <div className="w-full lg:w-1/3 px-4">
          <div>
            <SecuritySettings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
