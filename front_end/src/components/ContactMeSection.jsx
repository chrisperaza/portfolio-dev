// Components
import SectionTitles from './SectionTitles/SectionTitles';

const ContactMeSection = () => {
  return (
    <div className='contactMe-container' id='contact'>
      <section className='contactMe-section'>
        <SectionTitles
          title="Let's talk!"
          description='Take a look at some of the projects I have designed and developed.
            These include original ones, some clones, and landing pages, among
            others'
        />
        <button className='contactMe-button'>
          <p>Say hello</p>
        </button>
      </section>
    </div>
  );
};

export default ContactMeSection;
