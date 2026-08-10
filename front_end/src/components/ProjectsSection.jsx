// import React from 'react'
// Import components
import ProjectsList from './ProjectsList';

const ProjectsSection = ({ title, description, itemsQuantity, database }) => {
  return (
    <section className='projectsSection' id='projects'>
      <div>
        <div className='projectsSection-titles'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <ProjectsList itemsQuantity={itemsQuantity} database={database} />
      </div>
    </section>
  );
};

export default ProjectsSection;
