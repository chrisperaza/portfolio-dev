// Styles
import './BluePillButton.css';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BluePillButton = ({ text, title, clickFunction, icon }) => {
  return (
    <button className='bluePillButton' title={title} onClick={clickFunction}>
      <p>{text}</p>
      <FontAwesomeIcon icon={icon} className='bluePillButton-icon' />
    </button>
  );
};

export default BluePillButton;
