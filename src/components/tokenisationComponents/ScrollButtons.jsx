import React from "react";

export const ScrollButtons = ({ onScrollLeft, onScrollRight, disableLeft, disableRight }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <button
        onClick={onScrollLeft}
        disabled={disableLeft}
        className={`p-2 rounded-full bg-white shadow-md hover:bg-gray-100 ${disableLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label="Scroll left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      <button
        onClick={onScrollRight}
        disabled={disableRight}
        className={`p-2 rounded-full bg-white shadow-md hover:bg-gray-100 ${disableRight ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label="Scroll right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};
