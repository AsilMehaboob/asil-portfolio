import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './Navbar.css';
import alogo from '../images/logo.png';

function Navbar() {
  return (
     <nav className='navbar'>

      <Link className='logo-link' to="/"><img className='logo' src={alogo}></img></Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/FindMe">Find Me</Link>
      
      </nav>
  );
}

export default Navbar;
