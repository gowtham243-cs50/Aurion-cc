import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/tokenisationComponents/Navbar";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state?.project;

  // Sample price data for the graph
  const priceData = [
    { time: "9:00 AM", price: 480 },
    { time: "10:00 AM", price: 490 },
    { time: "11:00 AM", price: 495 },
    { time: "12:00 PM", price: 500 },
    { time: "1:00 PM", price: 505 },
    { time: "2:00 PM", price: 495 },
    { time: "3:00 PM", price: 490 },
  ];

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="p-6 bg-[#faf3e0] min-h-screen font-inter">
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
            <p className="text-center text-gray-600">No project details available.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#faf3e0] min-h-screen font-inter">
        {/* Hero Section with Image Background */}
        <div className="relative h-64 md:h-80 lg:h-96 bg-green-700 overflow-hidden">
          {project.imageUrl && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 to-green-700/90" />
          <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-end pb-8">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">{project.projectType}</span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">{project.projectLocation}</span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">{project.certificationStandard}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{project.projectName}</h1>
            <p className="text-white/80 mt-2">Developed by {project.projectDeveloper}</p>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 py-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-sm text-gray-500">Current Price</p>
              <p className="text-2xl font-bold text-green-600">${project.currentPrice}</p>
              <p className={`text-xs ${project.priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {project.priceChange >= 0 ? '↑' : '↓'} {Math.abs(project.priceChange)}%
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-sm text-gray-500">Carbon Reduction</p>
              <p className="text-2xl font-bold text-green-600">{project.carbonReduction || "N/A"}</p>
              <p className="text-xs text-gray-500">tCO₂e</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-sm text-gray-500">Available Credits</p>
              <p className="text-2xl font-bold text-green-600">{project.availableCredits || "N/A"}</p>
              <p className="text-xs text-gray-500">credits</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-sm text-gray-500">Vintage Year</p>
              <p className="text-2xl font-bold text-green-600">{project.vintageYear || "N/A"}</p>
              <p className="text-xs text-gray-500">year</p>
            </div>
          </div>

          {/* Price Graph Section */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div>
                  <h2 className="text-2xl font-bold text-gray-800">{project.projectName}</h2>
                  <p className="text-lg text-green-600 font-medium">
                    ${project.currentPrice} <span className="text-sm text-green-500">(+{project.priceChange}% Today)</span>
                  </p>
                  </div>
                  <div className="flex space-x-4">
                  <button className="px-4 py-2 text-sm font-medium border rounded-md text-gray-600 hover:bg-gray-100">
                    Create Alert
                  </button>
                  <button className="px-4 py-2 text-sm font-medium border rounded-md text-gray-600 hover:bg-gray-100">
                    Watchlist
                  </button>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={priceData}>
                  <XAxis dataKey="time" stroke="#8884d8" />
                  <YAxis stroke="#8884d8" />
                  <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Other Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Project Details */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="border-b border-gray-100">
                  <h2 className="text-xl font-bold px-6 py-4 text-green-700">Project Details</h2>
                </div>
                <div className="px-8 py-6">
                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Project Type:</span>
                      <span className="font-medium">{project.projectType}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{project.projectLocation}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-medium">{project.certificationStandard}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Developer:</span>
                      <span className="font-medium">{project.projectDeveloper}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Project Description */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="border-b border-gray-100">
                  <h2 className="text-xl font-bold p-6 text-green-700">Project Description</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {project.description || "No project description available."}
                  </p>
                </div>
              </div>

              {/* Impact Details */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="border-b border-gray-100">
                  <h2 className="text-xl font-bold p-6 text-green-700">Impact Details</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-green-700 mb-2">Sustainable Development Goals</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.sdgs ? (
                          project.sdgs.map((sdg, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1.5 rounded-full">
                              {sdg}
                            </span>
                          ))
                        ) : (
                          <p className="text-gray-500">No SDGs specified</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-green-700 mb-2">Co-benefits</h3>
                      <p className="text-gray-700">{project.cobenefits || "No co-benefits specified"}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-green-700 mb-2">Impact Reports & Audits</h3>
                      <p className="text-gray-700">{project.impactReports || "No reports available"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Buy Project Shares Card */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden sticky top-6">
                <div className="border-b border-gray-100">
                  <h2 className="text-xl font-bold p-6 text-green-700">Buy Project Shares</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {/* Project Name and Price */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{project.projectName}</h3>
                      <p className="text-sm text-gray-500">
                        Current Price: <span className="font-medium text-green-600">${project.currentPrice}</span>
                      </p>
                    </div>

                    {/* Buy/Sell Tabs */}
                    <div className="flex border-b border-gray-200">
                      <button className="flex-1 text-center py-2 font-medium text-green-600 border-b-2 border-green-600">
                        Buy
                      </button>
                      <button className="flex-1 text-center py-2 font-medium text-gray-500 hover:text-green-600">
                        Sell
                      </button>
                    </div>

                    {/* Order Type Options */}
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 text-sm font-medium border rounded-md bg-green-50 text-green-600">
                          Delivery
                        </button>
                        <button className="px-4 py-2 text-sm font-medium border rounded-md text-gray-600 hover:bg-gray-100">
                          Intraday
                        </button>
                        <button className="px-4 py-2 text-sm font-medium border rounded-md text-gray-600 hover:bg-gray-100">
                          MTF
                        </button>
                      </div>
                      <button className="text-gray-500 hover:text-gray-800">
                        <i className="fas fa-cog"></i>
                      </button>
                    </div>

                    {/* Quantity and Price Inputs */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <label className="text-gray-600">Qty</label>
                        <input
                          type="number"
                          className="w-1/2 border rounded-md px-3 py-2 text-gray-800"
                          placeholder="Enter quantity"
                          min="1"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <label className="text-gray-600">Price</label>
                        <select className="w-1/2 border rounded-md px-3 py-2 text-gray-800">
                          <option value="market">Market</option>
                          <option value="limit">Limit</option>
                        </select>
                      </div>
                    </div>

                    {/* Warning Message */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-700 mt-4">
                      Market order might be subject to price fluctuation.
                    </div>

                    {/* Balance and Approx. Requirement */}
                    <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                      <span>Balance: $0</span>
                      <span>Approx. Req.: $0</span>
                    </div>

                    {/* Buy Button */}
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md transition font-medium mt-4">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;