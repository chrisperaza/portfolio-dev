// Components
import Banner from '../components/Banner/Banner';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import BluePillButton from '../components/BluePillButton/BluePillButton';
import SkillsSection from '../components/SkillsSection';
import AboutMeSection from '../components/AboutMeSection';
import ContactMeSection from '../components/ContactMeSection';
import HorizontalLine from '../components/HorizontalLine';
// Database
import { featuredProjectsArray } from '../database/featuredProjects';
// import { otherProjectsArray } from '../database/otherProjectsArray';
// React router
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className='main'>
      <Banner />
      <ProjectsSection itemsQuantity={6} database={featuredProjectsArray} />
      {/*       <ProjectsSection
        itemsQuantity={6}
        database={otherProjectsArray}
      /> */}
      <Link className='allProjectsLink' to={'/projects'} title='All projects'>
        <BluePillButton
          text='Check out all my projects'
          title='Go to all projects'
        />
      </Link>
      <SkillsSection />
      <AboutMeSection />
      <ContactMeSection />
      <HorizontalLine />
    </main>
  );
};

export default Home;
