// Styles
import './BluePillButton.css';

const BluePillButton = ({ text, title }) => {
  return (
    <button className='bluePillButton' title={title}>
      <p>{text}</p>
    </button>
  );
};

export default BluePillButton;
