import React, { useState } from 'react';
import './About.css'

const About = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div className={`about-container ${clicked ? 'clicked' : ''}`}>
      <div className='about-box' onClick={handleClick}>
        <div id="abt-content" className="abt-content">
          <h1 className="title">About Me</h1>
          <div className="inner">
            <h4 className='about-text'>Hello there👋. I'm Asil, a developer with a knack for web development and exploring AI and ML. I have worked with React, Express, and other JavaScript frameworks, creating webpages with a personal touch of my own. Feel free to connect with me.</h4>
          </div>
        </div>
      </div>
      <div className='downloadbtn-div'>
        <a href='src/assets/AsilMehaboobResume.pdf' download='Asil Mehaboob.pdf' className='download-btn'>Download Resume</a>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/asil-mehaboob-v" target="_blank"><img src="src/assets/linkedin.png" className='image-social' alt="LinkedIn Profile"/></a>
        <a href="mailto:asilmehaboob@gmail.com"><img className='image-social' src='src/assets/mail.png'/></a>
        <a href="https://github.com/AsilMehaboob" target="_blank"><img className='image-social'  src="src/assets/github.png" alt="GitHub Profile"/></a>
      </div>
    </div>
  );
}

export default About;
