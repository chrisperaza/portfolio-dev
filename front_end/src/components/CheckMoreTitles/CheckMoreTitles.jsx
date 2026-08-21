// Components
import SectionTitles from '../SectionTitles/SectionTitles';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './CheckMoreTitles.css';

const CheckMyGitHub = ({ icon, title, description, morePaddingBottom }) => {
  return (
    <div className={`checkMoreTitles-container ${morePaddingBottom}`}>
      <section className='checkMoreTitles-section'>
        <FontAwesomeIcon className='socialMedia-icon fa-3x' icon={icon} />
        {/* <h2>
          See more on my{' '}
          <a href='https://github.com/chrisperaza' target='_blank'>
            GitHub
          </a>
        </h2>
        <p>
          Take a look at some of the projects I have designed and developed.
          These include original ones, some clones, and landing pages, among
          others.
        </p> */}
        <SectionTitles title={title} description={description} />
      </section>
    </div>
  );
};

export default CheckMyGitHub;
