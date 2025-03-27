import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList = ({ projects }) => {
  return (
    <div className="space-y-2 bg-[#faf3e0]">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;