// Components
import SkillsList from './SkillsList';
import SectionTitles from '../SectionTitles/SectionTitles';
// Styles
import './SkillsSection.css';

const SkillsSection = () => {
  return (
    <div className='skillsContainer' id='skills'>
      <SectionTitles title='My current skills' description='' />
      <section className='skillsSection'>
        <p className='skillsSection-text'>Frontend Development</p>
        <SkillsList /* itemsQuantity={7} */ type='front' />
        <p className='skillsSection-text'>Backend & Databases</p>
        <SkillsList /* itemsQuantity={7} */ type='back-db' />
        <p className='skillsSection-text'>Tools, Design & Cloud</p>
        <SkillsList /* itemsQuantity={7} */ type='tools-design-cloud' />
        {/** <button className='skillsSection-button'>
          <p>See more</p>
        </button> **/}
      </section>
    </div>
  );
};

export default SkillsSection;
