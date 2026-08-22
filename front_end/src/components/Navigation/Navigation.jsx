// Components
import BluePillButton from '../BluePillButton/BluePillButton';
// Styles
import './Navigation.css';

const Navigation = ({ showClass, closeMenu }) => {
  return (
    <nav className={`nav ${showClass ? 'showOnMobile' : ''}`}>
      <ul className='navList'>
        <li className='navItem'>
          <a href='#projects' onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li className='navItem'>
          <a href='#skills' onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li className='navItem'>
          <a href='#aboutMe' onClick={closeMenu}>
            About me
          </a>
        </li>
        <li className='navItem'>
          <a href='#contact' onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
      <BluePillButton text='Resume' title='Download my Resume' />
    </nav>
  );
};

export default Navigation;
