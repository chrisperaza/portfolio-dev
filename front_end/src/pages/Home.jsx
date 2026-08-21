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
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <main className='main'>
      <Banner />
      <ProjectsSection itemsQuantity={6} database={featuredProjectsArray} />
      <CheckMoreTitles
        icon={faDiagramProject}
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
