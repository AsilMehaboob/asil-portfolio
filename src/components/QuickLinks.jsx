import React from 'react';
import { Link } from 'react-router-dom';
import './QuickLinks.css';
import arrowIcon from '../images/arrow.svg';

const QuickLinks = () => {
  return (
    <div className='quicklinks'>
      <Link to="/FindMe" className='quick-button'>
        Contact
        <img className="arrow-icon" src={arrowIcon} alt="Arrow Icon" />
      </Link>
      <Link to="/projects" className='quick-button'>
        Projects
        <img className="arrow-icon" src={arrowIcon} alt="Arrow Icon" />
      </Link>
      <Link to="https://github.com/AsilMehaboob" className='quick-button'>
        Github
        <img className="arrow-icon" src={arrowIcon} alt="Arrow Icon" />
      </Link>
    </div>
  );
}

export default QuickLinks;
