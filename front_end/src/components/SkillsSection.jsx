// import React from 'react'
// Import components
import SkillsList from './SkillsList';

const SkillsSection = () => {
  return (
    <div className='skillsContainer' id='skills'>
      <section className='skillsSection'>
        <div>
          <h3 className='skillsSection-title'>My current skills</h3>
        </div>
        <SkillsList itemsQuantity={7} />
        <p className='skillsSection-text'>And learning more...</p>
        {/** <button className='skillsSection-button'>
          <p>See more</p>
        </button> **/}
      </section>
    </div>
  );
};

export default SkillsSection;
