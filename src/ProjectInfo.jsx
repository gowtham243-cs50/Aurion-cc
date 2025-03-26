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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-blue-100 p-8">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
      >
        ← Go Back
      </button>
      
      <div className="max-w-lg bg-white rounded-xl shadow-xl overflow-hidden p-6 border border-gray-200">
        <img 
          src={company.image} 
          alt={company.name} 
          className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-green-500 shadow-lg"
        />
        
        <h2 className="text-2xl font-bold text-gray-800 text-center mt-4">{company.name}</h2>
        <p className="text-gray-600 text-center mt-2">{company.description}</p>
        
        <div className="mt-4 flex items-center justify-center">
          <span className="text-lg font-semibold text-white bg-orange-500 px-4 py-2 rounded-full shadow-md">
            {company.carbonCredits}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
