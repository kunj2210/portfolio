import React from 'react';
import './pages.css';
import { MdEmail } from 'react-icons/md';

const About = () => {
  return (
    <div className="page-content about-page">
      <h2>About Me</h2>
      <p>
        I am a versatile software developer with a strong foundation in computer science principles and a passion for building robust, scalable web applications. My journey in technology has been driven by a curiosity to understand how things work and a desire to create solutions that make a tangible impact.
      </p>
      <p>
        With expertise across the full stack—from crafting intuitive user interfaces with React and modern CSS to building resilient backend services with Node.js and managing databases with MongoDB—I thrive on tackling complex challenges and turning ideas into reality. My background in C++, Java, and Python, combined with a deep understanding of data structures and algorithms, allows me to write efficient, high-quality code.
      </p>
      <p>
        I'm a lifelong learner, always eager to explore new technologies and methodologies. When I'm not coding, I enjoy staying up-to-date with the latest industry trends and contributing to open-source projects.
      </p>
      <h3>Connect with Me</h3>
      <div className="about-socials">
          <a href="mailto:kunjlunagariya@gmail.com" className="social-link">
            <MdEmail /> kunjlunagariya@gmail.com
          </a>
      </div>
    </div>
  );
};

export default About; 