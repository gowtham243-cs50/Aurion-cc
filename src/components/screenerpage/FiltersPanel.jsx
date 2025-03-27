import React, { useState } from 'react';

// Updated projectTypes
const projectTypes = [
  { label: "Renewable Energy", value: "Renewable Energy" },
  { label: "Reforestation", value: "Reforestation" },
  { label: "Carbon Capture", value: "Carbon Capture" },
  { label: "Energy Efficiency", value: "Energy Efficiency" },
];

const FiltersPanel = ({ applyFilters, resetFilters }) => {
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedStage, setSelectedStage] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [tokenPriceMin, setTokenPriceMin] = useState("");
  const [tokenPriceMax, setTokenPriceMax] = useState("");
  const [tokenAvailability, setTokenAvailability] = useState("");
  const [projectImpact, setProjectImpact] = useState("");
  const [rating, setRating] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleApply = () => {
    applyFilters({
      sector: selectedSector,
      region: selectedRegion,
      stage: selectedStage,
      location: selectedLocation,
      tokenPriceMin,
      tokenPriceMax,
      tokenAvailability,
      projectImpact,
      rating,
      status: selectedStatus,
    });
  };

  const handleReset = () => {
    setSelectedSector("");
    setSelectedRegion("");
    setSelectedStage("");
    setSelectedLocation("");
    setTokenPriceMin("");
    setTokenPriceMax("");
    setTokenAvailability("");
    setProjectImpact("");
    setRating("");
    setSelectedStatus("");
    resetFilters();
  };

  return (
    <div className="bg-[#faf3e0] p-4 rounded-lg shadow-md border-2 border-green-500">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Project Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Project Type</label>
        <select
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
          className="w-full border border-green-400 rounded p-2"
        >
          <option value="">All</option>
          {projectTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Project Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Project Location</label>
        <input
          type="text"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          placeholder="Enter country, region, or city"
          className="w-full border border-green-400 rounded p-2"
        />
      </div>

      {/* Region */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Region</label>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="w-full border border-green-400 rounded p-2"
        >
          <option value="">All</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
        </select>
      </div>

      {/* Stage */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Stage</label>
        <select
          value={selectedStage}
          onChange={(e) => setSelectedStage(e.target.value)}
          className="w-full border border-green-400 rounded p-2"
        >
          <option value="">All</option>
          <option value="Planning">Planning</option>
          <option value="Development">Development</option>
          <option value="Execution">Execution</option>
        </select>
      </div>

      {/* Token Price Range */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Token Price Range ($)</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={tokenPriceMin}
            onChange={(e) => setTokenPriceMin(e.target.value)}
            placeholder="Min"
            className="w-1/2 border border-green-400 rounded p-2"
          />
          <input
            type="number"
            value={tokenPriceMax}
            onChange={(e) => setTokenPriceMax(e.target.value)}
            placeholder="Max"
            className="w-1/2 border border-green-400 rounded p-2"
          />
        </div>
      </div>

      {/* Token Availability */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Token Availability</label>
        <input
          type="number"
          value={tokenAvailability}
          onChange={(e) => setTokenAvailability(e.target.value)}
          placeholder="Number of tokens"
          className="w-full border border-green-400 rounded p-2"
        />
      </div>

      {/* Project Impact (CO₂ Saved Annually) */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Project Impact (CO₂ saved annually)</label>
        <input
          type="number"
          value={projectImpact}
          onChange={(e) => setProjectImpact(e.target.value)}
          placeholder="Enter impact metric"
          className="w-full border border-green-400 rounded p-2"
        />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Rating</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Enter rating (e.g., 1-5)"
          className="w-full border border-green-400 rounded p-2"
        />
      </div>

      {/* Status Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Status</label>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="w-full border border-green-400 rounded p-2"
        >
          <option value="">All</option>
          <option value="New Listings">New Listings</option>
          <option value="Verified Projects">Verified Projects</option>
          <option value="Top Traded Projects">Top Traded Projects</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handleApply}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Apply
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-300 text-black px-4 py-2 rounded border border-green-400"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FiltersPanel;
