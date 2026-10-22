// Hooks
import { useState } from 'react';
// Utils
import { useMediaQuery } from '../utils/useMediaQuery';
// Components
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import CheckMoreTitles from '../components/CheckMoreTitles/CheckMoreTitles';
import AboutMeSection from '../components/AboutMeSection/AboutMeSection';
import ContactMeSection from '../components/ContactMeSection/ContactMeSection';
import BluePillButton from '../components/BluePillButton/BluePillButton';
// Database
import { featuredProjectsArray } from '../database/featuredProjects';
// Icons
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'; // '@fortawesome/free-regular-svg-icons';

const Projects = () => {
  const [showMore, setShowMore] = useState(false); // Show more projects

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const isDesktop = useMediaQuery('(min-width: 992px');

  const itemsQuantity = isDesktop ? 12 : showMore ? 12 : 6;
  const btnName = showMore ? 'less' : 'more';
  const icon = showMore ? faAngleUp : faAngleDown;

  return (
    <main className='main'>
      <div className='banner'>
        <section className='banner_section'>
          <h1 className='banner_section-title'>
            <span className='banner_section-titleName'>Take a look </span>at
            some of the following
            <span className='banner_section-titleName'> selected projects</span>
          </h1>
          <h1 className='banner_section-title2'>
            <span className='banner_section-titleName'>Take a look </span>
            at some of the <br /> following
            <span className='banner_section-titleName'> selected projects</span>
          </h1>
        </section>
      </div>
      <hr className='allProjectsHrLine' />
      <ProjectsSection
        itemsQuantity={itemsQuantity}
        database={featuredProjectsArray}
      />
      <BluePillButton
        text={`Show ${btnName} featured projects`}
        title={`Show ${btnName}`}
        clickFunction={toggleShowMore}
        icon={icon}
      />
      <CheckMoreTitles
        icon={faGithub}
        title={
          <>
            See more on my{' '}
            <a
              href='https://github.com/chrisperaza'
              target='_blank'
              title='Explore my code & projects'
            >
              GitHub
            </a>
          </>
        }
        description='Take a look at some of the projects I have designed and developed. These include original ones, some clones, and landing pages, among others'
        morePaddingBottom='morePaddingBottom'
      />
      <AboutMeSection />
      <ContactMeSection />
    </main>
  );
};

export default Projects;
