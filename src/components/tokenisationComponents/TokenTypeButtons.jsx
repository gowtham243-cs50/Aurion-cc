import React, { useState } from 'react';

export const TokenTypeButtons = ({ onTypeChange }) => {
  const [activeType, setActiveType] = useState('shares');

  const handleTypeChange = (type) => {
    setActiveType(type);
    if (onTypeChange) {
      onTypeChange(type);
    }
  };

  return (
    <div className="flex flex-wrap space-x-3 sm:space-x-5 mb-6">
      <button
        className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-200 ${
          activeType === 'shares'
            ? 'bg-[#faf3e0] text-green-600 border-2 border-green-500 shadow-md'
            : 'bg-[#faf3e0] text-gray-700 hover:bg-gray-100'
        }`}
        onClick={() => handleTypeChange('shares')}
      >
        Shares
      </button>
      <button
        className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-200 ${
          activeType === 'mutual-funds'
            ? 'bg-[#faf3e0] text-green-600 border-2 border-green-500 shadow-md'
            : 'bg-[#faf3e0] text-gray-700 hover:bg-gray-100'
        }`}
        onClick={() => handleTypeChange('mutual-funds')}
      >
        Mutual Funds
      </button>
    </div>
  );
};
