// import React from 'react'
// Import database
import { socialMediaArray } from '../database/socialMediaArray';
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
          href={socialMediaArray[0].link}
          title={socialMediaArray[0].name}
          target='_blank'
        >
          <FontAwesomeIcon className='socialMedia-icon fa-lg' icon={faGithub} />
        </a>
      </li>
      <li className='socialMedia-item'>
        <a
          href={socialMediaArray[1].link}
          title={socialMediaArray[1].name}
          target='_blank'
        >
          <FontAwesomeIcon
            className='socialMedia-icon fa-lg'
            icon={faLinkedinIn}
          />
        </a>
      </li>
      <li className='socialMedia-item'>
        <a
          href={socialMediaArray[2].link}
          title={socialMediaArray[2].name}
          target='_blank'
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
