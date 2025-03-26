import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const companies = [
    {
        id: 1,
      name: "Eco Solutions Ltd.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60",
      description: "A leading firm in sustainable energy solutions.",
      carbonCredits: "1,500 Tons",
    },
    {
        id: 2,
      name: "GreenFuture Corp.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=60",
      description: "Innovating in carbon offset and green investments.",
      carbonCredits: "2,000 Tons",
    },
    {
        id: 3,
      name: "SustainaTech",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop&q=60",
      description: "Advancing technology for a greener planet.",
      carbonCredits: "1,200 Tons",
    },
    {
        id: 4,
      name: "EnviroTrade",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=60",
      description: "Specialists in carbon credit exchange.",
      carbonCredits: "3,500 Tons",
    },
    {
        id: 5,
      name: "Nature's Balance Inc.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=60",
      description: "Preserving biodiversity through sustainable practices.",
      carbonCredits: "2,800 Tons",
    },
    {
        id: 6,
      name: "Zero Emission Partners",
      image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=600&auto=format&fit=crop&q=60",
      description: "Helping businesses achieve carbon neutrality.",
      carbonCredits: "1,700 Tons",
    },
    {
        id: 7,
      name: "Renewable Innovations",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXBhbmllc3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Developing advanced solar and wind energy solutions.",
      carbonCredits: "3,100 Tons",
    },
    {
        id: 8,
      name: "Carbon Capture Co.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFuaWVzfGVufDB8fDB8fHww",
      description: "Pioneering technologies for carbon sequestration.",
      carbonCredits: "2,200 Tons",
    },
    {
        id: 9,
      name: "FutureEarth Ventures",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXBhbmllc3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Investing in a cleaner, more sustainable planet.",
      carbonCredits: "2,500 Tons",
    },
];

const ProjectInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const company = companies.find((comp) => comp.id === parseInt(id));

  if (!company) {
    return <div className="text-center text-red-500 font-bold text-xl">Company Not Found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <button onClick={() => navigate(-1)} className="mb-4 bg-[#359e53] text-white px-4 py-2 rounded-md">Go Back</button>
      <div className="w-96 border border-[#359e53] bg-[#FAF3E0] rounded-xl p-6 shadow-md flex flex-col items-center">
        <img src={company.image} alt={company.name} className="w-32 h-32 rounded-lg object-cover mb-3" />
        <h2 className="text-xl font-bold text-[#2B5541]">{company.name}</h2>
        <p className="text-gray-700 text-center">{company.description}</p>
        <p className="font-bold text-[#EB8A25] mt-2">{company.carbonCredits}</p>
      </div>
    </div>
  );
};

export default ProjectInfo;
