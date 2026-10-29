// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjectsItem = ({
  image,
  title,
  techs,
  description,
  repoLink,
  demoLink,
}) => {
  return (
    <li className='projectsSection-item'>
      <a
        className='projectsSection-link'
        href={demoLink}
        target='_blank'
        rel='noopener noreferrer'
        title={`Go to ${title} live demo`}
      >
        <section className='projectsSection-linkContainer'>
          <img className='projectImage' src={image} alt={`${title} cover`} />
          <div className='projectTitles'>
            <h3>{title}</h3>
            <ul className='projectTechs'>
              {techs.map((tech, index) => (
                <li key={index}>{tech.name}</li>
              ))}
            </ul>
            <p>{description}</p>
          </div>
        </section>
      </a>
      <ul className='project-linkList'>
        <li className='project-linkItem'>
          <a
            href={repoLink}
            target='_blank'
            rel='noopener noreferrer'
            title={`Check out the ${title} repository`}
          >
            <FontAwesomeIcon
              className='socialMedia-icon fa-lg'
              icon={faGithub}
            />
          </a>
        </li>
        <li className='project-linkItem'>
          <a href={demoLink} target='_blank' title={`Go to ${title} live demo`}>
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
