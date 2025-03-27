import React, { useState, useEffect } from 'react';
import FiltersPanel from './components/screenerpage/FiltersPanel';
import ProjectsList from './components/screenerpage/ProjectsList';
import Navbar from './components/tokenisationComponents/Navbar';
import Footer from './components/Footer';
import mockProjects from './data/mockProjects';

const Screener = () => {
  const [filters, setFilters] = useState({});
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Apply filters to projects
  useEffect(() => {
    if (Object.keys(filters).length === 0) {
      setFilteredProjects(mockProjects);
      return;
    }

    // Simple filtering logic - can be expanded based on filter requirements
    const filtered = mockProjects.filter(project => {
      const matchesSector = !filters.sector || project.sector === filters.sector;
      const matchesRegion = !filters.region || project.region === filters.region;
      const matchesStage = !filters.stage || project.stage === filters.stage;
      return matchesSector && matchesRegion && matchesStage;
    });

    setFilteredProjects(filtered);
  }, [filters]);

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    console.log('Applied filters:', newFilters);
  };

  const handleResetFilters = () => {
    setFilters({});
    console.log('Filters reset');
  };

  return (
    <div className="font-inter bg-[#faf3e0]">
      <Navbar />
      <div className="p-6 bg-[#faf3e0] min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-6">Project Screener</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <FiltersPanel 
                applyFilters={handleApplyFilters} 
                resetFilters={handleResetFilters} 
              />
            </div>
            
            <div className="md:w-3/4">
              <div className="bg-[#faf3e0] rounded-lg shadow-md p-6  ">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Projects</h2>
                  <p className="text-sm text-gray-600">
                    {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
                  </p>
                </div>
                
                <ProjectsList 
                  projects={filteredProjects} 
                  filters={filters} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Screener;
