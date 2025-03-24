import React, { useState } from 'react';

const Indices = ({ data = [] }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#FAF3E0] p-4">
      <h1 className="text-center text-2xl font-bold text-[#2B5541] mb-6">Indices</h1>
      <div className="flex flex-wrap justify-center gap-4 max-w-[75%] mx-auto">
        {data.slice(0, showMore ? data.length : 3).map((item, index) => (
          <div
            key={index}
            className="w-[30%] min-w-[200px] bg-white shadow-md rounded-lg p-4 text-center"
          >
            <h2 className="text-lg font-semibold text-[#2B5541]">{item.heading}</h2>
            <p className="text-xl font-bold text-[#FE6D73] flex justify-center items-center">
              <span className="mr-1">₹</span>
              {item.amount}
            </p>
            <p className="text-sm text-gray-600">{item.percentage}</p>
          </div>
        ))}
      </div>
      {data.length > 3 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-[#2B5541] text-white px-4 py-2 rounded hover:bg-[#1E3B2F] transition"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Indices;
