import React from 'react';
import './MySkillsstyle.css';

const skillGroups = {
  Frontend: [
    { name: 'HTML5', iconClass: 'devicon-html5-plain colored', level: 90 },
    { name: 'CSS3', iconClass: 'devicon-css3-plain colored', level: 60 },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored', level: 80 },
    { name: 'React', iconClass: 'devicon-react-original colored', level: 90 },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored', level: 80 },
    { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain colored', level: 50 },
    { name: 'Tailwind', iconClass: 'devicon-tailwindcss-plain colored', level: 50 },
    { name: 'Vite', imgSrc: 'https://vitejs.dev/logo.svg', level: 60 },
    { name: 'GSAP', imgSrc: 'https://gsap.com/img/logo.svg', level: 40 },
  ],
  Backend: [
    { name: 'Express', imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg', level: 90 },
    { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored', level: 80 },
    { name: 'MySQL', iconClass: 'devicon-mysql-plain colored', level: 60 },
    { name: 'Postman', imgSrc: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', level: 70 },
  ],
  Tools: [
    { name: 'Jest', imgSrc: 'https://jestjs.io/img/jest.svg', level: 50 },
    { name: 'VS Code', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 90 },
  ],
};

const renderSkill = ({ name, iconClass, imgSrc, level }) => (
  <div key={name} className="skill-item" title={`${name} - ${level}%`}>
    {iconClass ? (
      <i className={`${iconClass} skill-icon`} />
    ) : (
      <img src={imgSrc} alt={name} className="skill-img" />
    )}
    <div className="progress-bar-bg">
      <div className="progress-bar-fill" style={{ width: `${level}%` }} />
    </div>
    <div className="skill-label">{name}</div>
  </div>
);

const MySkills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-rows">
        <div className="skills-row">
          <div className="skills-column">
            <h2>Frontend</h2>
            <div className="skills-icons-flex">
              {skillGroups.Frontend.map(renderSkill)}
            </div>
          </div>
          <div className="skills-column">
            <h2>Backend</h2>
            <div className="skills-icons-flex">
              {skillGroups.Backend.map(renderSkill)}
            </div>
          </div>
        </div>

        <div className="skills-row">
          <div className="skills-column">
            <h2>Tools</h2>
            <div className="skills-icons-flex">
              {skillGroups.Tools.map(renderSkill)}
            </div>
          </div>
          {/* Removed the empty second column */}
        </div>
      </div>
    </div>
  );
};

export default MySkills;




