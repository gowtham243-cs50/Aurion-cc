import React from 'react';

const Indices = ({ data }) => {
  const safeData = data || []; // Ensure data is defined and defaults to an empty array
  const slicedData = safeData.slice(0, 10); // Adjust slice logic as needed

  return (
    <div>
      {/* Render slicedData */}
      <P>yeahhhhh</P>
      {slicedData.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Indices;