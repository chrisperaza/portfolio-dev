// import React from 'react'
// Import images
import christianPhoto from '../assets/christianPeraza_photo.png';
// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// Import components
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className='header'>
      <section>
        <div>
          <img
            className='profilePhoto-small'
            src={christianPhoto}
            alt='Profile photo of Christian Peraza smiling, wearing a white shirt and dark green tie, with a blurred nature background.'
          />
          <p>Christian Peraza</p>
        </div>
        <Navigation />
        <FontAwesomeIcon className='burgerMenu-icon fa-lg' icon={faBars} />
      </section>
    </header>
  );
};

export default Header;
