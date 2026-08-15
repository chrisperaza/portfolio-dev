// Components
import SectionTitles from '../SectionTitles/SectionTitles';
import BluePillButton from '../BluePillButton/BluePillButton';
// Styles
import './ContactMeSection.css';

const ContactMeSection = () => {
  return (
    <div className='contactMe-container' id='contact'>
      <section className='contactMe-section'>
        <SectionTitles
          title="Let's work together!"
          description={
            <>
              I'm available to collaborate on full-stack web projects, develop
              APIs, or build interactive applications using <b>React</b>,{' '}
              <b>Node.js</b>, and <b>MongoDB</b>.{' '}
              <b>Email me, and I'll reply as soon as possible</b>.
            </>
          }
        />
        <BluePillButton text='Contact me' title='Send me an email' />
      </section>
    </div>
  );
};

export default ContactMeSection;
