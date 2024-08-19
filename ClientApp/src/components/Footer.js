import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <span className="footer-label">Contacts:</span>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="LinkedIn_icon.png" alt="LinkedIn" className="footer-icon" />
        </a>
        <a href="mailto:asmaagamal.nagy@gmail.com">
          <img src="gmail-icon.png" alt="Gmail" className="footer-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;




