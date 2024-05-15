import React, { useState } from 'react';
import './Contact.css';
import ContactCard from '../components/ContactCard';

const Contact = () => {
  // State to track whether the map is loading
  const [isLoading, setIsLoading] = useState(true);

  // Function to handle when the map finishes loading
  const handleMapLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
    <div className='container-contact'>
    <div className='map'>
      {isLoading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}
      <section className="mapbox" data-mapbox>
        <div className="map-container">
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.4282322393337!2d76.32925971869366!3d10.02870124685831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c5006491601%3A0xcf23e14245d4694d!2sGovernment%20Model%20Engineering%20College!5e0!3m2!1sen!2sin!4v1715614003534!5m2!1sen!2sin"
              width="1000"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={handleMapLoad} // Call handleMapLoad when the map finishes loading
            ></iframe>
          </figure>
        </div>
      </section>
    </div>
    <ContactCard/>

    </div>
    </>
  );
};

export default Contact;
