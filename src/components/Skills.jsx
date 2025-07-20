import React from "react";
import "./Skills.css";

const skills = [
  { name: "CSS3", icon: "/css3.svg" },
  { name: "ExpressJS", icon: "/expressjs.svg" },
  { name: "Figma", icon: "/figma.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "NodeJS", icon: "/nodejs.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "TailwindCSS", icon: "/tailwindcss.svg" },
  { name: "SQL", icon: "/sql.svg" },
  { name: "MySQL", icon: "/mysql.svg" },
  { name: "CodeIgniter", icon: "/codeigniter.svg" },
  { name: "jQuery", icon: "/jquery.svg" },
  { name: "AWS", icon: "/aws.svg" },
  { name: "Laravel", icon: "/laravel.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Socket.IO", icon: "/socket.svg" },
  { name: "Vue", icon: "/vue.svg" },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Mis Skills</h2>
      <div className="skills-grid">
        {skills.map(({ name, icon }) => (
          <div key={name} className="skill-card" title={name}>
            <img src={icon} alt={name} className="skill-icon" loading="lazy" />
            <span className="skill-name">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
