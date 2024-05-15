import React, { useState } from 'react';
import './ContactCard.css';

const ContactCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Clearing the input fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contact-box'>
      <div id="content" className="content">
        <div className="control-box close-box">
          <a className="control-box-inner"></a>
        </div>
        <div className="control-box zoom-box">
          <div className="control-box-inner">
            <div className="zoom-box-inner"></div>
          </div>
        </div>
        <div className="control-box windowshade-box">
          <div className="control-box-inner">
            <div className="windowshade-box-inner"></div>
          </div>
        </div>
        <h1 className="title">Contact Me</h1>
        <div className="inner">
          <div className="input-group">
            <label>Name:</label>
            <input
              type='text'
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input
              type='email'
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Message:</label>
            <textarea
              rows="4"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className='sendbtn-div'>
            <button className="send-button" onClick={handleSendMessage}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
