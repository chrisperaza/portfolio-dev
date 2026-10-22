// Components
import BluePillButton from '../BluePillButton/BluePillButton';
// Styles
import './Navigation.css';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolderOpen,
  faStar,
  faCircleUser,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
// Utils
import { downloadCV } from '../../utils/downloadCV';

const Navigation = ({ showClass, closeMenu, handleNavClick }) => {
  return (
    <nav className={`nav ${showClass ? 'showOnMobile' : ''}`}>
      <ul className='navList'>
        <li className='navItem'>
          <a
            href='#projects'
            onClick={() => {
              closeMenu();
              handleNavClick();
            }}
          >
            <FontAwesomeIcon className='menuItemsIcon' icon={faFolderOpen} />
            <p>Projects</p>
          </a>
        </li>
        <li className='navItem'>
          <a
            href='#skills'
            onClick={() => {
              closeMenu();
              handleNavClick();
            }}
          >
            <FontAwesomeIcon className='menuItemsIcon' icon={faStar} />
            <p>Skills</p>
          </a>
        </li>
        <li className='navItem'>
          <a
            href='#aboutMe'
            onClick={() => {
              closeMenu();
              handleNavClick();
            }}
          >
            <FontAwesomeIcon className='menuItemsIcon' icon={faCircleUser} />
            <p>About me</p>
          </a>
        </li>
        <li className='navItem'>
          <a
            href='#contact'
            onClick={() => {
              closeMenu();
              handleNavClick();
            }}
          >
            <FontAwesomeIcon className='menuItemsIcon' icon={faPaperPlane} />
            <p>Contact</p>
          </a>
        </li>
      </ul>
      <hr />
      <button className='resumeBtnMobile' onClick={downloadCV}>
        <FontAwesomeIcon className='dlResumeIcon' icon={faAnglesDown} />
        <p>Download Resume</p>
        {/*         <FontAwesomeIcon icon={faAngleDown} />
         */}{' '}
      </button>
      <BluePillButton
        text='Resume'
        title='Download my Resume'
        clickFunction={downloadCV}
      />
    </nav>
  );
};

export default Navigation;
