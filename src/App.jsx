import React, { useState } from 'react'; // Changed import statement
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corrected import statement
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {

  return (
    <>
  <div style={{cursor: 'url(cursor.png), auto'}}>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/FindMe' element={<Contact/>}/>
          <Route path='/Projects' element={<Projects/>}/>
         
        </Routes>
      </BrowserRouter>

    </div></>
  );
}

export default App;
