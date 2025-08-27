import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaPython } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import { VscSymbolStructure } from "react-icons/vsc";
import { GrNetwork } from "react-icons/gr";
import { FaC } from "react-icons/fa6";
import './pages.css';

const skillsData = {
  "Programming Languages": [
    { name: "C", icon: <FaC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ],
  "Frontend Development": [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "React.js", icon: <FaReact /> },
  ],
  "Backend & Databases": [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  "Core CS Concepts": [
    { name: "Data Structures & Algorithms", icon: <VscSymbolStructure /> },
    { name: "Computer Networks", icon: <GrNetwork /> },
  ]
};

const Skills = () => {
  return (
    <div className="page-content skills-page">
      <h2>My Technical Skills</h2>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skills-category">
          <h3>{category}</h3>
          <div className="skills-grid">
            {skills.map(skill => (
              <div key={skill.name} className="skill-item">
                <span className="skill-icon">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills; 