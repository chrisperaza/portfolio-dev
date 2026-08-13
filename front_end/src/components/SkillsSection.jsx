// Components
import SkillsList from './SkillsList';
import SectionTitles from './SectionTitles/SectionTitles';

const SkillsSection = () => {
  return (
    <div className='skillsContainer' id='skills'>
      <section className='skillsSection'>
        <SectionTitles title='Current skills' description='' />
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
