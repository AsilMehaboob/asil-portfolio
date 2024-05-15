import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './Navbar.css';

function Navbar() {
  return (
     <nav className='navbar'>

      <Link className='logo-link' to="/"><img className='logo' src='src/assets/logo.png'></img></Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/FindMe">Find Me</Link>
      
      </nav>
  );
}

export default Navbar;
