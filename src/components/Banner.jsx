// import React from 'react'

const Banner = () => {
  return (
    <div className='banner'>
      <section className='banner_section'>
        <p className='banner_section-greetings'>Hi! My name is</p>
        <h2 className='banner_section-title'>
          <span className='banner_section-titleName'>Christian Peraza. </span>
          I'm a Full-stack JavaScript Developer.
        </h2>
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
          <svg
            width='17'
            height='15'
            viewBox='0 0 17 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.625 0.75L15.375 7.5L8.625 14.25M14.4375 7.5H0.75'
              stroke='#52A5E0'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
