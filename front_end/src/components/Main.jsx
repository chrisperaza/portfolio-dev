// import React from 'react'
// Components
import Banner from './Banner/Banner';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import AboutMeSection from './AboutMeSection';
import ContactMeSection from './ContactMeSection';
import HorizontalLine from './HorizontalLine';
// Database
import { featuredProjectsArray } from '../database/featuredProjects';
import { otherProjectsArray } from '../database/otherProjectsArray';
// React router
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main className='main'>
      <Banner />
      <ProjectsSection
        title='Featured projects'
        description='Take a look at some of the projects I have designed and developed. These include original ones, some clones, and landing pages, among others.'
        itemsQuantity={3}
        database={featuredProjectsArray}
      />
      <ProjectsSection
        title='Other projects'
        description='Discover how creative I can be.'
        itemsQuantity={6}
        database={otherProjectsArray}
      />
      <Link className='allProjectsLink' to={'/projects'} title='All projects'>
        <button className='allProjectsButton'>
          <p>Check out more projects</p>
        </button>
      </Link>
      <SkillsSection />
      <AboutMeSection />
      <ContactMeSection />
      <HorizontalLine />
    </main>
  );
};

export default Main;
