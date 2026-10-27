// Components
import SkillsList from './SkillsList';
import SectionTitles from '../SectionTitles/SectionTitles';
// Styles
import './SkillsSection.css';

const SkillsSection = () => {
  return (
    <div className='skillsContainer' id='skills'>
      <SectionTitles
        title={
          <>
            Skills and technologies <span>I have mastered</span>
          </>
        }
        description={
          <>
            From <b>UI design and interactive frontends</b> to solid{' '}
            <b>backend systems</b>, I use a full JavaScript stack to build{' '}
            <b>clean</b>, <b>fast</b>, and <b>responsive</b> web apps.
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
