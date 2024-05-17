// React JSX Component
import React from 'react';
import './ProjectCard.css';
import trimage from '../images/T&R.png'
import unveilimage from '../images/unveil.png'

const ProjectCard = () => {
  return (
    <div className='projects-div'>
    <div className='project-container'>
    <div className="project-card">
      <nav className="project-nav">
        <div className="project-date">2020-04-08-projecthtml</div>
      </nav>
      <hr className='hr'></hr>
      <img src={trimage} alt="" className="project-image" />
      <h1 className="project-title">Treats&Reels</h1>
      <p className="project-description">
      Treats and Reels is your go-to place for Christmas fun! With easy-to-use features created with ReactJS, you can discover yummy holiday recipes and cozy movies in one spot. Treats gives you tons of Christmas recipes to try, while Reels offers up festive films for you to enjoy. It's the perfect way to get into the holiday spirit with tasty treats and heartwarming movies, all in one convenient place!</p>
      <div className='button-div'>
      <a href='https://github.com/AsilMehaboob/WebFlake' className="view-btn">View Project</a>
      </div>
    </div></div>



    <div className='project-container'>
    <div className="project-card">
      <nav className="project-nav">
        <div className="project-date">2020-04-08-projecthtml</div>
      </nav>
      <hr className='hr'></hr>
      <img src={unveilimage} alt="" className="project-image" />
      <h1 className="project-title">Unveil</h1>
      <p className="project-description">
      Unveil is a confession page developed with Firebase and ReactJS, providing a secure platform for anonymous sharing. Leveraging Firebase's real-time database, it enables instant updates while prioritizing user privacy and data security. Through an intuitive ReactJS interface, Unveil fosters community engagement and empathy, empowering users to connect and support each other in a safe digital space.</p>
      <div className='button-div'>
      <a href='https://github.com/AsilMehaboob/Unveil' className="view-btn">View Project</a>
      </div>
    </div></div>




    </div>
  );
};

export default ProjectCard;
