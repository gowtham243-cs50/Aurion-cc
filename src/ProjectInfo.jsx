import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import InfoHeading from "./components/capAndTradeComponents/InfoHeading";
import Navbar from "./components/tokenisationComponents/Navbar";
import Footer from './components/Footer';
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import pineTreesImage from './assets/A_minimalist_logo_featuring_scattered_pine_trees_i.png';

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

const ProjectInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const company = companies.find((comp) => comp.id === parseInt(id));

  if (!company) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500">Company Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF3E0] min-h-screen flex flex-col">
      <Navbar />
      <InfoHeading />

      <div className="flex flex-col md:flex-row flex-1 bg-[#FAF3E0] overflow-hidden p-4">
        {/* Left Section */}
        <div className="w-full md:w-1/3 p-4 sm:p-6 md:p-10 bg-[#FAF3E0] flex flex-col items-start border border-green-500 rounded-xl">
          <img 
            src={company.image} 
            alt={company.name} 
            className="w-full md:w-80 h-60 mt-4 md:mt-10 object-cover rounded-md"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4 flex items-center gap-2">
            <FaBuilding className="text-gray-600" /> {company.name}
          </h2>
          <p className="text-gray-600 mt-2 flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" /> {company.location}
          </p>
          <img 
            src={pineTreesImage}
            alt="Pine Trees Logo" 
            className="w-full md:w-80 h-60 mt-4 md:mt-10 object-cover rounded-md"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
            <p className="text-gray-600 text-center">{company.description}</p>
            <div className="mt-4 flex items-center justify-center">
              <span className="text-lg font-semibold text-white bg-orange-500 px-4 py-2 rounded-full shadow-md">
                {company.carbonCredits}
              </span>
            </div>
          </div>

          {/* Trading Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 mt-4">
            <h3 className="text-xl font-bold text-gray-800">Trading Information</h3>
            <div className="mt-4 space-y-2">
              <p><span className="font-semibold">Trading Status:</span> {company.tradingStatus}</p>
              <p><span className="font-semibold">Price per Ton:</span> {company.pricePerTon}</p>
              <p><span className="font-semibold">Website:</span> <a href={company.website} className="text-blue-500 hover:underline">{company.website}</a></p>
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 mt-4">
            <h3 className="text-xl font-bold text-gray-800">Additional Details</h3>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
            </p>
            <p className="mt-2 text-gray-600">
              Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectInfo;
