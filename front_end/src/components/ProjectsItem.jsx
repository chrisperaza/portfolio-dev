// import React from 'react'
// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjectsItem = ({ image, title, description, repoLink, demoLink }) => {
  return (
    <li className='projectsSection-item'>
      <a className='projectsSection-link' href={demoLink} target='_blank'>
        <section className='projectsSection-linkContainer'>
          <img className='projectImage' src={image} alt={`${title} cover`} />
          <div className='projectTitles'>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </section>
      </a>
      <ul className='project-linkList'>
        <li className='project-linkItem'>
          <a href={repoLink} target='_blank'>
            <FontAwesomeIcon
              className='socialMedia-icon fa-lg'
              icon={faGithub}
            />
          </a>
        </li>
        <li className='project-linkItem'>
          <a href={demoLink} target='_blank'>
            <FontAwesomeIcon
              className='socialMedia-icon fa-lg'
              icon={faArrowUpRightFromSquare}
            />
          </a>
        </li>
      </ul>
    </li>
  );
};

export default ProjectsItem;
