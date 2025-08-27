import React from 'react';
import './pages.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="page-content contact-page">
      <h2>Get In Touch</h2>
      <p>I'm currently open to new opportunities. If you have a project in mind, want to collaborate, or just want to say hi, feel free to reach out!</p>
      
      <div className="contact-info">
        <a href="mailto:kunjlunagariya@gmail.com" className="contact-item">
          <MdEmail /> kunjlunagariya@gmail.com
        </a>
      </div>

      <p>You can also find me on:</p>
      <div className="contact-socials">
          <a href="https://github.com/kunj2210" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kunj-lunagariya-a56404303/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
      </div>
    </div>
  );
};

export default Contact; 