// import React from 'react'
// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div className='banner'>
      <section className='banner_section'>
        <p className='banner_section-greetings'>Hi! My name is</p>
        <h1 className='banner_section-title'>
          <span className='banner_section-titleName'>Christian Peraza, </span>{' '}
          <br />
          and I'm a Full-stack JavaScript Developer.
        </h1>
        <p className='banner_section-text'>
          As a current student at BYU - Idaho, and a future Software Engineer, I
          am passionate about imagining, designing and developing exceptional
          digital experiences for users.
        </p>
      </section>
      <div className='banner_buttons'>
        <button className='banner_buttons-talk'>
          <p>Let's talk</p>
        </button>
        <button className='banner_buttons-projects'>
          <p>Check out my projects</p>
          <div>
            <FontAwesomeIcon className='arrowRightIcon' icon={faArrowRight} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Banner;
