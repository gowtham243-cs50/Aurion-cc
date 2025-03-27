import React from 'react';

const ProjectCard = ({ project }) => {
  const isPositive = project.priceChange >= 0;
  
  // Format large numbers with K, M, B suffixes
  const formatCurrency = (value) => {
    if (value >= 1000000000) return `₹${(value / 1000000000).toFixed(2)}B`;
    if (value >= 1000000) return `₹${(value / 1000000).toFixed(2)}M`;
    if (value >= 1000) return `₹${(value / 1000).toFixed(2)}K`;
    return `₹${value}`;
  };
  
  // Determine impact color based on value
  const getImpactColor = () => {
    if (!project.impact) return { bg: 'bg-gray-100', text: 'text-gray-600' };
    
    const impact = project.impact.toLowerCase();
    if (impact.includes('high') || impact.includes('positive')) 
      return { bg: 'bg-green-50', text: 'text-green-700' };
    if (impact.includes('medium') || impact.includes('neutral')) 
      return { bg: 'bg-blue-50', text: 'text-blue-700' };
    if (impact.includes('low') || impact.includes('negative')) 
      return { bg: 'bg-yellow-50', text: 'text-yellow-700' };
    
    return { bg: 'bg-blue-50', text: 'text-blue-700' };
  };
  
  const impactColor = getImpactColor();

  return (
    <div className="bg-[#faf3e0] p-5 border border-green-500">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-1">
        {/* Project Name and Logo */}
        <div className="flex items-center space-x-3 flex-1">
          <div className="bg-gray-100 rounded-full p-2 w-12 h-12 flex items-center justify-center">
            {project.logo ? (
              <img src={project.logo} alt={`${project.name} logo`} className="w-8 h-8" />
            ) : (
              <span className="text-xl font-bold text-gray-500">{project.name.charAt(0)}</span>
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              <a href="#" className="hover:text-blue-600 transition-colors">
                {project.name}
              </a>
            </h3>
            <p className="text-xs text-gray-500">Token: {project.ticker || 'N/A'}</p>
          </div>
        </div>

        {/* Financial Data */}
        <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-auto gap-4 justify-between">
          {/* Price */}
          <div className="flex flex-col items-center">
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Price</p>
            <p className="text-base font-bold">{formatCurrency(project.tokenPrice)}</p>
          </div>

          {/* Price Change */}
          <div className="flex flex-col items-center">
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">24h</p>
            <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'} font-bold`}>
              <span className="text-lg mr-1">{isPositive ? '▲' : '▼'}</span>
              <span>{Math.abs(project.priceChange).toFixed(2)}%</span>
            </div>
          </div>

          {/* Market Cap */}
          <div className="flex flex-col items-center">
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">MCap</p>
            <p className="text-base font-bold">{formatCurrency(project.marketCap)}</p>
          </div>
        </div>

        {/* Impact and Action */}
        <div className="flex items-center gap-6 w-full lg:w-auto justify-between">
          <div className="flex flex-col items-center">
            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Impact</p>
            <div className={`${impactColor.bg} ${impactColor.text} px-3 py-1 rounded-full text-sm font-medium flex items-center`}>
              {project.impact ? (
                <>
                  <span className="h-2 w-2 rounded-full bg-current mr-1.5"></span>
                  {project.impact}
                </>
              ) : 'No data'}
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg px-4 py-2 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow transform hover:-translate-y-0.5">
            <span className="mr-1">Trade</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;