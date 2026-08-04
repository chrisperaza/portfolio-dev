// import React from 'react'
// Import components
import ProjectsList from './ProjectsList';

const ProjectsSection = ({ title, description, itemsQuantity }) => {
  return (
    <section className='projectsSection'>
      <div className='projectsSection-titles'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <ProjectsList itemsQuantity={itemsQuantity} />
    </section>
  );
};

export default ProjectsSection;
