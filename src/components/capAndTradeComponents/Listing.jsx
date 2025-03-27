import React, { useState } from "react";
import { ChevronDown, ChevronUp, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Listing = () => {
  const [showMore, setShowMore] = useState(false);

  // Company Data Array
  const companies = [
    {
      id: 1,
      name: "Eco Solutions Ltd.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60",
      description: "A leading firm in sustainable energy solutions, providing innovative ways to reduce carbon footprints.",
      carbonCredits: "1,500 Tons",
      location: "United Kingdom",
      website: "https://www.ecosolutions.com",
      tradingStatus: "Active",
      pricePerTon: "$45"
    },
    {
      id: 2,
      name: "GreenFuture Corp.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=60",
      description: "Innovating in carbon offset and green investments, helping industries transition to sustainability.",
      carbonCredits: "2,000 Tons",
      location: "United States",
      website: "https://www.greenfuturecorp.com",
      tradingStatus: "Pending",
      pricePerTon: "$50"
    },
    {
      id: 3,
      name: "SustainaTech",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop&q=60",
      description: "Advancing technology for a greener planet, focusing on AI-driven emission reduction.",
      carbonCredits: "1,200 Tons",
      location: "Germany",
      website: "https://www.sustainatech.com",
      tradingStatus: "Active",
      pricePerTon: "$42"
    },
    {
      id: 4,
      name: "EnviroTrade",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=60",
      description: "Specialists in carbon credit exchange, facilitating smooth trading between businesses.",
      carbonCredits: "3,500 Tons",
      location: "Canada",
      website: "https://www.envirotrade.com",
      tradingStatus: "Active",
      pricePerTon: "$48"
    },
    {
      id: 5,
      name: "Nature's Balance Inc.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=60",
      description: "Preserving biodiversity through sustainable practices and responsible resource management.",
      carbonCredits: "2,800 Tons",
      location: "Australia",
      website: "https://www.naturesbalance.com",
      tradingStatus: "Pending",
      pricePerTon: "$47"
    },
    {
      id: 6,
      name: "Zero Emission Partners",
      image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=600&auto=format&fit=crop&q=60",
      description: "Helping businesses achieve carbon neutrality through investment in clean energy solutions.",
      carbonCredits: "1,700 Tons",
      location: "Sweden",
      website: "https://www.zeroemissionpartners.com",
      tradingStatus: "Active",
      pricePerTon: "$44"
    },
    {
      id: 7,
      name: "Renewable Innovations",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=60",
      description: "Developing advanced solar and wind energy solutions for a more sustainable future.",
      carbonCredits: "3,100 Tons",
      location: "Norway",
      website: "https://www.renewableinnovations.com",
      tradingStatus: "Active",
      pricePerTon: "$49"
    },
    {
      id: 8,
      name: "Carbon Capture Co.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60",
      description: "Pioneering technologies for carbon sequestration, reducing atmospheric CO₂ efficiently.",
      carbonCredits: "2,200 Tons",
      location: "Japan",
      website: "https://www.carboncaptureco.com",
      tradingStatus: "Pending",
      pricePerTon: "$46"
    },
    {
      id: 9,
      name: "FutureEarth Ventures",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60",
      description: "Investing in a cleaner, more sustainable planet through large-scale environmental projects.",
      carbonCredits: "2,500 Tons",
      location: "Netherlands",
      website: "https://www.futureearthventures.com",
      tradingStatus: "Active",
      pricePerTon: "$51"
    }
  ];
  

  return (
    <div className="p-8 flex flex-row justify-between items-start w-full max-w-6xl">
      {/* Left Section: Carbon Credit Listings */}
      <div className="flex flex-col items-center flex-1">
        <div className="flex items-center justify-between w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-[#2B5541] mb-6">Carbon Credit Listings</h1>
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#2B5541] p-2 rounded-full transition-all duration-300"
          >
            {showMore ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {companies.slice(0, showMore ? companies.length : 3).map((company, index) => (
            <Link to={`/project/${company.id}`} key={company.id} className="w-56 h-72 bg-[#FAF3E0] rounded-xl flex flex-col items-center p-4 overflow-hidden">

            <div
              key={index}
              className="w-56 h-72 border border-[#359e53] bg-[#FAF3E0] rounded-xl flex flex-col items-center p-4  overflow-hidden"
            >
              <img
                src={company.image}
                alt={company.name}
                className="w-24 h-24 rounded-lg object-cover mb-3"
              />
              <h2 className="text-lg font-semibold text-[#2B5541] text-center">{company.name}</h2>
              <p className="text-sm text-gray-600 text-center px-2 line-clamp-2">{company.description}</p>
              <p className="font-bold text-[#EB8A25] mt-auto">{company.carbonCredits}</p>
              <button className="mt-3 px-3 py-1 bg-[#359e53] text-white rounded-md text-sm">Request Trade</button>
            </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Right Section: Watchlist */}
      <div className="w-64 p-4 bg-[#FAF3E0] rounded-lg">
        <h2 className="text-lg font-semibold text-[#2B5541]">All Watchlist</h2>
        <div className="border border-[#359e53] rounded-lg p-4 mt-4">
          <div className="mt-4">
            <p className="text-sm text-gray-700 font-medium">My Watchlist</p>
            <p className="text-xl font-bold text-[#359e53] mt-1">12 Items</p>
          </div>
          <button className="mt-4 flex items-center text-blue-600 font-medium hover:underline">
            <PlusCircle size={20} className="mr-2" />
            Add New Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listing;

