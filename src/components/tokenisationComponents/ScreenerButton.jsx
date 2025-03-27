import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScreenerButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/screener');
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 font-medium transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
      Advanced Screener
    </button>
  );
};

export default ScreenerButton;
