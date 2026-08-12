// Components
import BluePillButton from '../BluePillButton/BluePillButton';
// Styles
import './Navigation.css';

const Navigation = ({ showClass }) => {
  return (
    <nav className={`nav ${showClass ? 'showOnMobile' : ''}`}>
      <ul className='navList'>
        <li className='navItem'>
          <a href='#projects'>Projects</a>
        </li>
        <li className='navItem'>
          <a href='#skills'>Skills</a>
        </li>
        <li className='navItem'>
          <a href='#aboutMe'>About me</a>
        </li>
        <li className='navItem'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <BluePillButton text='Resume' title='Download my Resume' />
    </nav>
  );
};

export default Navigation;
