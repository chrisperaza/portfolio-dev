// Components
import BluePillButton from '../BluePillButton/BluePillButton';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// React router
import { Link } from 'react-router-dom';
// Styles
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <section className='bannerSection'>
        <div className='bannerGreetings'>
          <p className='bannerGreetings-introduce'>Hi, I'm Christian Peraza.</p>
          <p className='bannerGreetings-major'>Software Developer</p>
        </div>
        <section className='bannerTexts'>
          <h2 className='bannerTexts-title'>
            I’m a Full-Stack JavaScript Developer focused on{' '}
            <span className='bannerTexts-title-gray'>
              dynamic web applications
            </span>
          </h2>
          <p className='bannerTexts-paragraph'>
            I develop interactive frontend interfaces using <b>React</b>, and
            robust backend REST APIs with <b>Node.js</b>, <b>Express.js</b>, and{' '}
            <b>MongoDB</b>.
          </p>
        </section>
        <div className='bannerButtons'>
          <BluePillButton text='Contact me' title='Send me an email' />
          <button className='banner_buttons-projects'>
            <Link to={'/projects'} title='Go to all projects'>
              <p>Check out my projects</p>
              <div>
                <FontAwesomeIcon
                  className='arrowRightIcon fa-lg'
                  icon={faArrowRight}
                />
              </div>
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
