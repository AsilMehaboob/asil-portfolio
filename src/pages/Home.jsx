import React, { useEffect } from 'react';
import './Home.css';
import QuickLinks from '../components/QuickLinks';
import waveImage from '../images/wave.png'
import resumepdf from '../images/Asil Mehaboob Resume Final.pdf'

const Home = () => {
  useEffect(() => {
    // Trigger animation when the component mounts (page loads)
    const image = document.querySelector('.image');
    image.classList.add('animate');
  }, []);

  return (
    <>
      <div className='hello-container'>
        <div className='hello'>
          <h1>Hello.<br/>
          i'm asil.</h1>
          
          <p className='subtitle'>
            a developer and ML enthusiast
          </p>
          {/* Button to download resume */}
          <a href={resumepdf} download='Asil Mehaboob.pdf' className='retro'>Hit me!</a>
        </div>
        <div>
          <img className='image' src={waveImage}/>
        </div>
        
      </div>
      <div>
        <hr className='hr-1'/>
      </div>
      <div>
        <QuickLinks/>
      </div>
      

    </>
  );
};

export default Home;
