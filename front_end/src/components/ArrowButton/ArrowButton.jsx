// Styles
import './ArrowButton.css';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ArrowButton = ({ text, title, clickFunction }) => {
  return (
    <button className='arrowButton' title={title} onClick={clickFunction}>
      <p>{text}</p>
      <div>
        <FontAwesomeIcon className='arrowRightIcon fa-lg' icon={faAngleRight} />
      </div>
    </button>
  );
};

export default ArrowButton;
