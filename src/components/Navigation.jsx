// import React from 'react'

const Navigation = () => {
  return (
    <nav className='nav'>
      <ul className='navList'>
        <li className='navItem'>
          <a href='#'>Projects</a>
        </li>
        <li className='navItem'>
          <a href='#'>Skills</a>
        </li>
        <li className='navItem'>
          <a href='#'>About me</a>
        </li>
        <li className='navItem'>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <button className='navButton'>
        <p>Resume</p>
      </button>
    </nav>
  );
};

export default Navigation;
