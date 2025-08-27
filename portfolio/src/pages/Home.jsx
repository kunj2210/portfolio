import React from 'react';
import './pages.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-content">
      <div className="hero-main section">
        <div className="hero-text">
          <h1>Kunj Lunagariya</h1>
          <h2>Full Stack Developer & Problem Solver</h2>
          <p>
            I design and develop responsive, high-performance web applications, translating complex problems into elegant, user-friendly solutions.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn primary">
              My Work
            </Link>
            <Link to="/contact" className="btn secondary">
              Contact Me
            </Link>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/kunj2210" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/profile.jpg" alt="Kunj Lunagariya" />
        </div>
      </div>
    </div>
  );
};

export default Home; 