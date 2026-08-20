// Components
import SkillsList from './SkillsList';
import SectionTitles from '../SectionTitles/SectionTitles';
// Styles
import './SkillsSection.css';

const SkillsSection = () => {
  return (
    <div className='skillsContainer' id='skills'>
      <SectionTitles
        title='Skills and technologies I have mastered'
        description={
          <>
            Take a look at some of the projects I have <b>designed</b> and{' '}
            <b>developed</b>
            <span>
              . These include <b>original</b> ones, some <b>clones</b>, and{' '}
              <b>landing pages</b>, among others
            </span>
          </>
        }
      />
      <section className='skillsSection'>
        <div>
          <p className='skillsSection-text'>Frontend Development</p>
          <SkillsList /* itemsQuantity={7} */ type='front' />
        </div>
        <div>
          <p className='skillsSection-text'>Backend & Databases</p>
          <SkillsList /* itemsQuantity={7} */ type='back-db' />
        </div>
        <div>
          <p className='skillsSection-text'>Tools, Design & Cloud</p>
          <SkillsList /* itemsQuantity={7} */ type='tools-design-cloud' />
        </div>
        {/** <button className='skillsSection-button'>
          <p>See more</p>
        </button> **/}
      </section>
    </div>
  );
};

export default SkillsSection;
