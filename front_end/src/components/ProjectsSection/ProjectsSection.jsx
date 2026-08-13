// Components
import ProjectsList from './ProjectsList';
import SectionTitles from '../SectionTitles/SectionTitles';
// Styles
import './ProjectsSection.css';

const ProjectsSection = ({ itemsQuantity, database }) => {
  return (
    <section className='projectsSection' id='projects'>
      <div>
        <SectionTitles
          title='Featured projects'
          description={
            <>
              Take a look at some of the projects I have <b>designed</b> and{' '}
              <b>developed</b>
              <span>
                . These include <b>original</b> ones, some <b>clones</b>, and{' '}
                <b>landing pages</b>, among others
              </span>
            </>
          }
        />
        <ProjectsList itemsQuantity={itemsQuantity} database={database} />
      </div>
    </section>
  );
};

export default ProjectsSection;
