// Styles
import './SectionTitles.css';

const SectionTitles = ({ title, description }) => {
  return (
    <section className='sectionTitles'>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
};

export default SectionTitles;
