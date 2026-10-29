// Components
import SocialMediaList from '../SocialMediaList/SocialMediaList';
// Database
// import { socialMediaArray } from '../../database/socialMediaArray';
// Styles
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <SocialMediaList />
      <div className='footerContainer'>
        <p>
          &copy; 2026 Designed and developed by{' '}
          <a
            href='https://github.com/chrisperaza'
            target='_blank'
            rel='noopener noreferrer'
            title='Explore my code & projects'
          >
            @chrisperaza
          </a>
        </p>
        <p>
          <a
            href='mailto:christianperaza2000@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            title='Send me an email'
          >
            christianperaza2000@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
