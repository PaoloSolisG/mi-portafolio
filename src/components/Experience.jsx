// src/components/Experience.jsx
import React from "react";
import "./Experience.css";

const experienceData = [
  {
    company: "Corporación SIGA (Valeapp)",
    role: "Full Stack Developer",
    location: "Lima, Perú",
    period: "Febrero 2022 – Junio 2025",
    details: [
      "Desarrollé módulos para el sistema de facturación con CodeIgniter 3.",
      "Implementé tienda online con CodeIgniter 4 y sistemas de pago (Izipay, Mercado Pago).",
      "Diseñé APIs REST para conectar tienda y apps móviles.",
      "Optimizé el código para mejor escalabilidad y mantenimiento.",
    ],
    technologies:
      "CodeIgniter 3, Bootstrap, jQuery, RESTful API, Node.js, Socket.IO, JavaScript, MySQL, Git",
  },
  {
    company: "Instituto Dozer",
    role: "Backend Developer - Laravel 11",
    location: "Lima, Perú",
    period: "Noviembre 2024 – Enero 2025",
    details: [
      "Desarrollé campus virtual con Laravel 11.",
      "Diseñé base de datos para usuarios, materiales y evaluaciones.",
      "Integré API REST con plataformas externas y sistemas de pago.",
      "Optimicé experiencia de usuario con Blade y JavaScript.",
    ],
    technologies: "Laravel 11, MySQL, Tailwind CSS, Blade, RESTful API",
  },
  {
    company: "Hands Of Grace (Virginia - Beach)",
    role: "Full Stack Developer",
    location: "Lima, Perú",
    period: "Abril 2024 – Presente",
    details: [
      "Lancé sitio web para ONG en Virginia, USA.",
      "Sitio interactivo y responsivo con CodeIgniter 4 y JavaScript.",
      "Módulo administrativo para gestionar eventos, voluntarios, donaciones y noticias.",
    ],
    technologies: "CodeIgniter 4, MySQL, Tailwind CSS, Axios",
  },
  {
    company: "Transportes Flores",
    role: "Técnico de Soporte IT",
    location: "Lima, Perú",
    period: "Nov 2021 – Ene 2022",
    details: [
      "Soporte IT en sistemas de gestión de envíos y boletos.",
      "Capacitación a personal en uso del sistema.",
      "Mantenimiento de integridad de datos y respaldo regular.",
      "Apoyo en gestión de bases de datos y redes.",
    ],
  },
];

const educationData = {
  institution: "IESTP María Rosario Araoz Pinto (IESTP MRAP)",
  degree: "Técnico en Desarrollo de Sistemas - Graduado 2021",
  location: "Lima, Perú",
};

function Experience() {
  return (
    <section className="experience-console" id="experiencia">
      <div className="console-header">
        <div className="buttons">
          <span className="btn close"></span>
          <span className="btn minimize"></span>
          <span className="btn maximize"></span>
        </div>
        <p className="console-title">Mi Experiencia Profesional</p>
      </div>

      <div className="console-body">
        {experienceData.map(({ company, role, location, period, details, technologies }, i) => (
          <div key={i} className="console-block">
            <p className="console-line comment">// {company}</p>
            <p className="console-line">
              <strong>{role}</strong> — {location} — <em>{period}</em>
            </p>
            <ul className="console-list">
              {details.map((d, idx) => (
                <li key={idx} className="console-line detail">
                  {d}
                </li>
              ))}
            </ul>
            <p className="console-line">
              <strong>Tecnologías:</strong> {technologies}
            </p>
            <p className="console-separator"></p>
          </div>
        ))}

        <div className="console-block">
          <p className="console-line comment">// Educación</p>
          <p className="console-line">
            <strong>{educationData.institution}</strong> — {educationData.location}
          </p>
          <p className="console-line">{educationData.degree}</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
