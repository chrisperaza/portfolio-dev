// import React from 'react'
// Import components
import SkillsList from './SkillsList';

const SkillsSection = () => {
  return (
    <div className='skillsContainer'>
      <section className='skillsSection'>
        <div>
          <h3 className='skillsSection-title'>See my current skills</h3>
          <p className='skillsSection-text'>And learning more...</p>
        </div>
        <SkillsList itemsQuantity={6} />
        <button className='skillsSection-button'>
          <p>See more</p>
        </button>
      </section>
    </div>
  );
};

export default SkillsSection;
