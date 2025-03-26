import React from "react";

// Add this CSS at the top of your file or in a separate CSS file
const scrollbarHiddenStyle = {
  scrollbarWidth: 'none',  // Firefox
  msOverflowStyle: 'none',  // IE and Edge
};

export const TokenTile = ({
  projectName,
  companyName,
  logo,
  currentPrice,
  priceChange,
  onClick,
}) => {
  return (
    <div
      className="bg-[#faf3e0] border border-green-400 shadow-md rounded-lg p-5 cursor-pointer hover:bg-[#f5ead0] hover:border-green-500 transition-all duration-300 "  
      onClick={onClick}
      style={scrollbarHiddenStyle}
    >
      <div className="flex items-center mb-3">
        <img src={logo} alt={`${projectName} logo`} className="w-12 h-12 mr-3 rounded-full object-cover" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{projectName}</h3>
          <p className="text-xs text-gray-500">{companyName}</p>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-end">
        <div>
          <p className="text-xs text-gray-500 mb-1">Current Price</p>
          <p className="text-lg font-bold">${currentPrice}</p>
        </div>
        <div className={`px-3 py-1 rounded-full ${
          priceChange >= 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
        }`}>
          <span className="text-sm font-medium">
            {priceChange >= 0 ? "+" : ""}{priceChange}%
          </span>
        </div>
      </div>
    </div>
  );
};

// Add this at the bottom of your file
// This will hide the scrollbar in Webkit browsers like Chrome and Safari
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  div::-webkit-scrollbar {
    display: none;
  }
`;
document.head.appendChild(styleSheet);
