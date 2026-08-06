// import React from 'react'
// Import components
import ProjectsItem from './ProjectsItem';

const ProjectsList = ({ itemsQuantity, database }) => {
  return (
    <ul className='projectsSection-list'>
      {database
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
