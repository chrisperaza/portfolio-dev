// import React from 'react'
// Import image
import christianPhoto from '../assets/christianPeraza_photo.png';
// Import components
import SocialMediaList from './SocialMediaList';

const AboutMeSection = () => {
  return (
    <section className='aboutMe-section' id='aboutMe'>
      <section className='aboutMe-infoSection'>
        <img
          className='aboutMe-img'
          src={christianPhoto}
          alt='Profile photo of Christian Peraza smiling, wearing a white shirt and dark green tie, with a blurred nature background.'
          width={120}
        />
        <div>
          <div className='aboutMe-infoSection-titlesContainer'>
            <div>
              <h3>About me</h3>
              <p>Associate of Applied Science in Software Development</p>
            </div>
          </div>
          <p className='aboutMe-infoSection-text'>
            Currently, I am a student at BYU-Pathway Worldwide pursuing a
            Bachelor Degree in Software Development. I am passionate about
            technology and design, which is why I want to become a web
            developer. <br /> <br /> My goal is to design and develop web
            applications that provide exceptional user experiences and
            facilitate or support specific tasks.
          </p>
          <SocialMediaList />
          <button className='aboutMe-infoSection-resumeButton'>
            <p>Download Resume</p>
          </button>
        </div>
      </section>
    </section>
  );
};

export default AboutMeSection;
