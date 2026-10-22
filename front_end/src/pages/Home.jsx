// Hooks
import { useState } from 'react';
// Utils
import { useMediaQuery } from '../utils/useMediaQuery';
// Components
import Banner from '../components/Banner/Banner';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import BluePillButton from '../components/BluePillButton/BluePillButton';
import CheckMoreTitles from '../components/CheckMoreTitles/CheckMoreTitles';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import AboutMeSection from '../components/AboutMeSection/AboutMeSection';
import ContactMeSection from '../components/ContactMeSection/ContactMeSection';
// Database
import { featuredProjectsArray } from '../database/featuredProjects';
// import { otherProjectsArray } from '../database/otherProjectsArray';
// React router
import { Link } from 'react-router-dom';
// Icons
// import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import {
  faFolderOpen,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons'; // '@fortawesome/free-regular-svg-icons';

const Home = () => {
  const [showMore, setShowMore] = useState(false); // Show more projects

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const isDesktop = useMediaQuery('(min-width: 992px');

  const itemsQuantity = isDesktop ? 6 : showMore ? 6 : 3;
  const btnName = showMore ? 'less' : 'more';
  const icon = showMore ? faAngleUp : faAngleDown;

  return (
    <main className='main'>
      <Banner />
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
        icon={faFolderOpen}
        title='Check out more projects'
        description='Take a look at some of the projects I have designed and developed. These include original ones, some clones, and landing pages, among others'
      />
      <Link className='allProjectsLink' to={'/projects'} title='All projects'>
        <BluePillButton text='See more projects' title='Go to all projects' />
      </Link>
      <SkillsSection />
      <AboutMeSection />
      <ContactMeSection />
    </main>
  );
};

export default Home;
