// Hooks
import { useState, useEffect } from 'react';
// Images
import christianPhoto from '../../assets/christianPeraza_photo.png';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
// Components
import Navigation from '../Navigation/Navigation';
// React router
import { Link } from 'react-router-dom';
// Styles
import './Header.css';

const Header = () => {
  const [showClass, setShowClass] = useState(false);

  const toggleClass = () => {
    setShowClass(!showClass);
  };

  // Close menu when clicking
  const closeMenu = () => {
    setShowClass(false);
  };

  // Close menu when clicking everywhere
  useEffect(() => {
    if (showClass) {
      const timer = setTimeout(() => {
        window.addEventListener('click', closeMenu);
      }, 0);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('click', closeMenu);
      };
    }
  }, [showClass]);

  // Toggle menu icon variable
  const menuText = showClass ? 'CLOSE' : 'MENU';
  const menuIcon = showClass ? faXmark : faBars;

  return (
    <header className='header'>
      <section>
        <Link to={'/'} title='Home' className='logoLink'>
          <img
            className='profilePhoto-small'
            src={christianPhoto}
            alt='Profile photo of Christian Peraza smiling, wearing a white shirt and dark green tie, with a blurred nature background.'
          />
          <h1>
            chris<span>peraza</span>
          </h1>
        </Link>
        <Navigation showClass={showClass} closeMenu={closeMenu} />
        <button className='buttonMenu' onClick={toggleClass}>
          <p>{menuText}</p>
          <FontAwesomeIcon className='burgerMenu-icon fa-lg' icon={menuIcon} />
        </button>
      </section>
    </header>
  );
};

export default Header;
