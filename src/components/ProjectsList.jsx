// import React from 'react'
// Import database
import { featuredProjectsArray } from '../database/featuredProjects';
// Import components
import ProjectsItem from './ProjectsItem';

const ProjectsList = ({ itemsQuantity }) => {
  return (
    <ul className='projectsSection-list'>
      {featuredProjectsArray
        .filter((currentValue, index) => index < itemsQuantity)
        .map((currentValue) => (
          <ProjectsItem
            image={currentValue.image}
            title={currentValue.title}
            description={currentValue.description}
            repoLink={currentValue.repoLink}
            demoLink={currentValue.demoLink}
            key={currentValue.id}
          />
        ))}
    </ul>
  );
};

export default ProjectsList;
