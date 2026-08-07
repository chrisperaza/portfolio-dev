// import React from 'react'
// Components
import ProjectsSection from '../components/ProjectsSection';
import CheckMyGitHub from '../components/CheckMyGitHub';
import AboutMeSection from '../components/AboutMeSection';
import ContactMeSection from '../components/ContactMeSection';
import HorizontalLine from '../components/HorizontalLine';
// Database
import { featuredProjectsArray } from '../database/featuredProjects';

const Projects = () => {
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
        title='All projects'
        description='Take a look at some of the projects I have designed and developed. These include original ones, some clones, and landing pages, among others.'
        itemsQuantity={15}
        database={featuredProjectsArray}
      />
      <CheckMyGitHub />
      <AboutMeSection />
      <ContactMeSection />
      <HorizontalLine />
    </main>
  );
};

export default Projects;
