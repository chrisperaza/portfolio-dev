// Comonents
import SocialMediaList from '../SocialMediaList';
// Database
import { socialMediaArray } from '../../database/socialMediaArray';
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
            href={socialMediaArray[0].link}
            target='_blank'
            title={socialMediaArray[0].title}
          >
            @chrisperaza
          </a>
        </p>
        <p>
          <a
            href={socialMediaArray[3].link}
            target='_blank'
            title={socialMediaArray[3].title}
          >
            christianperaza2000@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
