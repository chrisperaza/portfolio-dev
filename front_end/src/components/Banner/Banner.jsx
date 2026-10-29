// Components
import BluePillButton from '../BluePillButton/BluePillButton';
import ArrowButton from '../ArrowButton/ArrowButton';
// Styles
import './Banner.css';
// Utils
import { downloadCV } from '../../utils/downloadCV';

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
            <span className='bannerTexts-hideOnDesktop'>I’m a</span> Full-Stack
            JavaScript Developer focused on{' '}
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
          <a
            className='contactMeLink'
            href='mailto:christianperaza2000@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BluePillButton text='Contact me' title='Send me an email' />
          </a>
          <ArrowButton
            text='Download my Resume'
            title='Download my Resume'
            clickFunction={downloadCV}
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
