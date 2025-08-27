import React from 'react';
import './pages.css';

const Projects = () => {
  return (
    <div className="page-content projects-page">
      <h2>My Projects</h2>
      <div className="projects-list">
        <div className="project-card">
          <h3>Netflix Clone</h3>
          <p>A mini-project replicating the Netflix UI.</p>
          <a href="https://github.com/kunj2210/Netflix-clone-mini-project" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>News Feed</h3>
          <p>A simple news feed application.</p>
          <a href="https://github.com/kunj2210/news-feed" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Projects; 