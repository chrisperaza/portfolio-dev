// import React from 'react'
// Import database
//import { socialMediaArray } from '../database/socialMediaArray';
// Styles
import './SocialMediaList.css';
// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaList = () => {
  return (
    <ul className='socialMedia-list'>
      <li className='socialMedia-item'>
        <a
          href='https://github.com/chrisperaza'
          title='Explore my code & projects'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon className='socialMedia-icon fa-lg' icon={faGithub} />
        </a>
      </li>
      <li className='socialMedia-item'>
        <a
          href='https://www.linkedin.com/in/chrisperaza'
          title='Professional network & experience'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            className='socialMedia-icon fa-lg'
            icon={faLinkedinIn}
          />
        </a>
      </li>
      <li className='socialMedia-item'>
        <a
          href='https://www.instagram.com/chrispperaza'
          title='Beyond the code'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            className='socialMedia-icon fa-lg'
            icon={faInstagram}
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaList;
