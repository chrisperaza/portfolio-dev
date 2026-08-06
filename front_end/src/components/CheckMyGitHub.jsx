// import React from 'react'
// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const CheckMyGitHub = () => {
  return (
    <div className='checkMyGithub-container'>
      <section className='checkMyGithub-section'>
        <FontAwesomeIcon className='socialMedia-icon fa-3x' icon={faGithub} />
        <h2>
          See more on my{' '}
          <a href='https://github.com/chrisperaza' target='_blank'>
            GitHub
          </a>
        </h2>
        <p>
          Take a look at some of the projects I have designed and developed.
          These include original ones, some clones, and landing pages, among
          others.
        </p>
      </section>
    </div>
  );
};

export default CheckMyGitHub;
