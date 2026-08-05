// import React from 'react'
// Import components
import Banner from './Banner';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import AboutMeSection from './AboutMeSection';
import ContactMeSection from './ContactMeSection';
// Import database
import { featuredProjectsArray } from '../database/featuredProjects';
import { otherProjectsArray } from '../database/otherProjectsArray';

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
      <SkillsSection />
      <AboutMeSection />
      <ContactMeSection />
    </main>
  );
};

export default Main;
