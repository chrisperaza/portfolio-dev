// Images
import christianPhoto from '../../assets/christianPeraza_photo.png';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// Components
import Navigation from '../Navigation';
// React router
import { Link } from 'react-router-dom';
// Styles
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <section>
        <Link to={'/'} title='Home' className='logoLink'>
          <img
            className='profilePhoto-small'
            src={christianPhoto}
            alt='Profile photo of Christian Peraza smiling, wearing a white shirt and dark green tie, with a blurred nature background.'
          />
          <p>
            chris<span>peraza</span>
          </p>
        </Link>
        <Navigation />
        <FontAwesomeIcon className='burgerMenu-icon fa-lg' icon={faBars} />
      </section>
    </header>
  );
};

export default Header;
